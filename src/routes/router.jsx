import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../DisplayLayout/HomeLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
    },
    {
        path: "/lesson",
        element: <h1>Lesson</h1>,
    },
    {
        path: "/tutorials",
        element: <h1>Tutorials</h1>,
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
