import { AuthProvider } from 'react-auth-kit';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div className="text-3xl underline">Home</div>,
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
