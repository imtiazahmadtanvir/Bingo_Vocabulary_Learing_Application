import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../DisplayLayout/HomeLayout";
import Lesson from "../pages/Lesson";
import LessonDetails from "../pages/LessonDetails";
import Totorials from "../pages/Totorials";
import About from "../pages/About";
import AuthLayout from "../DisplayLayout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import ForgetPassword from "../pages/ForgetPassword";
import UpdateProfile from "../pages/Updateprofile"; // Corrected component name
import Errorpage from "../pages/Errorpage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <Errorpage></Errorpage>,
  },
  {
    path: "/lesson",
    element: <Lesson></Lesson>,
    loader: () => fetch("/voc.json").then((res) => res.json()),
  },
  {
    path: "/lesson/:lessonId", // Dynamic route for lesson details
    element: (
      <PrivateRoute>
        <LessonDetails></LessonDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/voc.json").then((res) => res.json()),
    errorElement: <Errorpage></Errorpage>,

  },
  {
    path: "/tutorials",
    element: (
      <PrivateRoute>
        <Totorials></Totorials>
      </PrivateRoute>
    ),
    errorElement: <Errorpage></Errorpage>,

  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <Profile></Profile>
      </PrivateRoute>
    ),
    errorElement: <Errorpage></Errorpage>,

  },
  {
    path: "/update",
    element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
     , // Corrected component name
  },
  {
    path: "/about",
    element: <About></About>,
    errorElement: <Errorpage></Errorpage>,

  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "reset-password",
        element: <ForgetPassword></ForgetPassword>,
      },
      
    ],
    errorElement: <Errorpage></Errorpage>,

  },
  
]);

export default router;
