import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './component/Login';
import Roots from './Roots/Roots';
import Register from './component/Register';
import AllRoute from './component/AllRoute';
import PrivateRoute from './component/PrivateRoute';
import Home from './component/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Roots></Roots> ,
    children: [
      {
        path: "/",
        element: <AllRoute />,
      },
      {
        path: "/home",
        element: <PrivateRoute><Home></Home></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
