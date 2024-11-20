import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../DisplayLayout/HomeLayout";
import Lesson from "../pages/Lesson";
import LessonDetails from "../pages/LessonDetails";
import Totorials from "../pages/Totorials";
import About from "../pages/About";
import AuthLayout from "../DisplayLayout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
    },
    {
        path: "/lesson",
        element: <Lesson></Lesson>,
        loader: () => fetch("/voc.json"),
    },
    {
        path: "/lesson/:lessonId", // Dynamic route for lesson details
        element: <LessonDetails></LessonDetails>,
        loader: () => fetch("/voc.json").then(res => res.json())
    },
    {
        path: "/tutorials",
        element: <Totorials></Totorials>,
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
                path: "", // Default route for /auth
                element: <Login></Login>,
            },
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "register",
                element: <Register></Register>,
            },
        ],
    },
    {
        path: "*",
        element: <h1>Error</h1>, 
    },
]);

export default router;
