import Layout from "@/components/Layout";
import Checkout from "@/pages/Checkout";
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/search", element: <Search /> }
    ],
  },
]);
