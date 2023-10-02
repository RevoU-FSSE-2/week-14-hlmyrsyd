import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  Login,
  Register,
  CategoryList,
  CategoryEdit,
  CategoryNew,
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

    {
      path: "/category",
      element: <CategoryList />
    },

    {
      path: "/category/new",
      element: <CategoryNew />
    },

    {
      path: "/category/edit/:id",
      element: <CategoryEdit />
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App; 