import { StrictMode } from "react";
//import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../App_components/App.jsx";
import "../App_components/app.scss";

import Apparts from "../Apparts_components/Apparts.jsx";
import "../Apparts_components/apparts.scss";

import About from "../About_components/About.jsx";
import "../About_components/about.scss";

import Error404 from "../Error404_components/Error404.jsx";
import "../Error404_components/error404.scss";

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
