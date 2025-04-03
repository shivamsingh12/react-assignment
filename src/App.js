import "./App.css";
import Layout from "./Layout";
import EventTablePage from "./pages/EventTablePage";
import EventDetailsPage from "./pages/EventDetailsPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <EventTablePage /> },
      { path: "details", element: <EventDetailsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
