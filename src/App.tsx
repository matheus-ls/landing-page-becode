import React from "react";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import "./styles/main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

const App = () => {
  <RouterProvider router={router} />;
};

export default App;
