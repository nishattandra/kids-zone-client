import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blogs from "../pages/Blogs/Blogs";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import AddAToys from "../pages/AddAToys/AddAToys";
import PrivateRoutes from "./PrivateRoutes";
import Update from "../pages/Update/Update";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
          path:'/blogs',
          element:<Blogs></Blogs>
        },
        {
          path:'/allToys',
          element: <AllToys></AllToys>
        },
        {
          path:'/myToys',
          element:<PrivateRoutes><MyToys></MyToys></PrivateRoutes>
        },
        {
          path:'/addAToys',
          element:<AddAToys></AddAToys>
        },
        {
          path:'/updatetoy/:id',
          element: <PrivateRoutes>
            <Update></Update>
          </PrivateRoutes>,
        }
      ]
    },
  ]);

  export default router;