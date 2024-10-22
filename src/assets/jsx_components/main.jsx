import { StrictMode } from "react";
//import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "../css_components/app.scss";
import Apparts from "./Apparts.jsx";
import "../css_components/apparts.scss";
import About from "./About.jsx";
import "../css_components/about.scss";
import Error404 from "./Error404.jsx";
import "../css_components/error404.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
  },
  {
    path: "/apparts",
    element: <Apparts />,
    errorElement: <Error404 />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Error404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
