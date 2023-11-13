import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Presentation from "./pages/presentation/Presentation.jsx";
import SectionHome from "./pages/sectionhome/SectionHome.jsx";
import Projects from "./pages/projets/Projects.jsx";
import Cv from "./pages/contact/Cv.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <SectionHome />,
      },
      {
        path: "/Presentation",
        element: <Presentation />,
      },
      {
        path: "/Projects",
        element: <Projects />,
      },
      {
        path: "/Cv",
        element: <Cv />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
