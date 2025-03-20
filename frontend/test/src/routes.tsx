import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CompletedPage from "./pages/CompletedPage";

const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/completed", element: <CompletedPage /> },
    ],
  },
]);

export default routes;
