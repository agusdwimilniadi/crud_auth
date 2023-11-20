import { AuthProvider } from 'react-auth-kit';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
  ]);
  return (
    <>
      <AuthProvider
        authName="_auth"
        authType="cookie"
        cookieDomain={window.location.hostname}
        cookieSecure={window.location.protocol === 'https:'}
      >
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}
