import Home from "./pages/Home";
import Login from "./pages/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { DefaultLayout } from "./Layout/DefaultLayout";
import ErrorPage from "./routes/ErrorPage";
import { Contact } from "./pages/Contact";
import ContactDetails from "./pages/Contact/ContacDetails";
import Dashboard from "./pages/DashBoard";
import Create from "./pages/Create";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/dashboard", element: <Dashboard />},
      { path: "/create", element: <Create /> },
      { path: "/profile", element: <Profile /> },
      { path: "/contact", element: <Contact /> },
      { path: "/contact/:id", element: <ContactDetails /> },
    ],
  },
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
