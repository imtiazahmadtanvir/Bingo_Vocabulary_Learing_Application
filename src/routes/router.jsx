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
import UpdateProfile from "../pages/UpdateProfile"; // Corrected component name

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <h1>Error</h1>,
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
  },
  {
    path: "/tutorials",
    element: (
      <PrivateRoute>
        <Totorials></Totorials>
      </PrivateRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <Profile></Profile>
      </PrivateRoute>
    ),
  },
  {
    path: "/update",
    element: <UpdateProfile></UpdateProfile>, // Corrected component name
  },
  {
    path: "/about",
    element: <About></About>,
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
        element: <ForgetPassword />,
      },
    ],
  },
]);

export default router;
