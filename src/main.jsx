import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import Contactus from "./components/Contactus.jsx";
import Services from "./components/Services.jsx";
import Gallery from "./components/Gallery.jsx";
import Aboutus from "./components/Aboutus.jsx";
import 'font-awesome/css/font-awesome.min.css';

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/contactus",
        element: <Contactus/>,
      },
      {
        path: "/services",
        element: <Services/>,
      },
      {
        path: "/gallery",
        element: <Gallery/>,
      },
      {
        path: "/aboutus",
        element: <Aboutus/>,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
