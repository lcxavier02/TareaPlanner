import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./index.css";
import Working from "./components/Working/Working.jsx";
import Queue from "./components/Queue/Queue.jsx";
import Pending from "./components/Pending/Pending.jsx";
import Login from "./components/LogIn/Login.jsx";
import Settings from "./components/Settings/Settings.jsx";
import CalendarView from "./components/CalendarView/CalendarView.jsx";
import Tasks from "./components/Tasks/Tasks.jsx";
import Register from "./components/Register/Register.jsx";
import { AuthContextProvider } from "./context/authContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error</div>,
  },
  {
    path: "/working",
    element: <Working />,
  },
  {
    path: "/queue",
    element: <Queue />,
  },
  {
    path: "/pending",
    element: <Pending />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/calendar",
    element: <CalendarView />,
  },
  {
    path: "/tasks",
    element: <Tasks />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
