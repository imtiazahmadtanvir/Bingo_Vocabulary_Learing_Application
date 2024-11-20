import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../DisplayLayout/HomeLayout";
import Lesson from "../pages/Lesson";
import LessonDetails from "../pages/LessonDetails";
import Totorials from "../pages/Totorials";
import About from "../pages/About";

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
        element: <h1>Login</h1>,
    },
    {
        path: "*",
        element: <h1>Error</h1>, 
    },
]);

export default router;
