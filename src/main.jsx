import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Your global CSS file
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx"; // Import the configured router

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
