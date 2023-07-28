import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { DefaultLayout } from "./Layout/DefaultLayout";
import ErrorPage from "./routes/ErrorPage";
import { Contact } from "./pages/Contact";
import ContactDetails from "./pages/Contact/ContacDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/contact", element: <Contact /> },
      { path: "/contact/:id", element: <ContactDetails /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
