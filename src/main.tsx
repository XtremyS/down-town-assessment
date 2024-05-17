import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Pages/HomePage/Homepage.tsx";
import SymptomChecker from "./Pages/SymptomChecker/SymptomChecker.tsx";
import Layout from "./Layout/Layout.tsx";
const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "symptom-checker",
        element: <SymptomChecker />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
