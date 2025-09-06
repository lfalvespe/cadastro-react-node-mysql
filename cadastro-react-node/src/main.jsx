import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Users from "./pages/Users.jsx";
import Home from "./pages/Home.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Contact from "./pages/Contact.jsx";
import UserDetails from "./pages/UserDetails.jsx";
import Edit from "./pages/Edit.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "users/:id",
        element: <UserDetails />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "users/edit/:id",
        element: <Edit />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
