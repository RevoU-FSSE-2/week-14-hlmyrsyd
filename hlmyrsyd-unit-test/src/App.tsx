import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  Login,
  Register,
} from './pages';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },

    {
      path: "/register",
      element: <Register />
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App; 