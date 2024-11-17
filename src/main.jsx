import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import About from "./components/about/About.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Define routes correctly without nesting for non-child routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Main component for the root path
  },
  {
    path: "/about", // About page route
    element: <About />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
