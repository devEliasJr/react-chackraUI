import Home from "./pages/Home";
import Login from "./pages/Login";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import "./App.css";
import { DefaultLayout } from "./Layout/DefaultLayout";
import ErrorPage from "./routes/ErrorPage";
import { Contact } from "./pages/Contact";
import ContactDetails from "./pages/Contact/ContacDetails";
import Dashboard from "./pages/DashBoard";
import Create, { createAction } from "./pages/Create";
import Profile from "./pages/Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create" element={<Create />} action={createAction} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/contact/:id" element={<ContactDetails />} />
    </Route>
  )
);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
