const jwt = require('jsonwebtoken');
require('dotenv').config();
const generateToken = (user) => {
  console.log('env Token:', process.env.JWT_SECRET);
  return jwt.sign(
    {
      id: user.id,
      name: user.name,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: 'Bearer token is required' });
  }
  const plainToken = token.split(' ')[1];
  jwt.verify(plainToken, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(403).json({ success: false, message: 'Token invalid' });
    }
    req.user = user;
    next();
  });
};

module.exports = { generateToken, authenticateToken };
