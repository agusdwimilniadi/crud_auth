import { instance } from '../../utils/instance';

const Home = () => {
  const fetchData = async () => {
    try {
      await instance.get('blog').then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="text-center underline">
      <button onClick={fetchData}>Button test</button>
    </div>
  );
};

export default Home;
