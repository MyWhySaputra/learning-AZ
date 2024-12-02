import { createBrowserRouter } from "react-router-dom";
import { DashboardPage } from "../pages/dashboard";
import { CalendarPage } from "../pages/calendar";
import { AutoSelectPage } from "../pages/autoselect";
import { MainLayout } from "../layout/MainLayout";
import { NotFound } from "../contex/not-found";

const finalRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <DashboardPage />,
      },
      {
        path: "calendar",
        element: <CalendarPage />,
      },
      {
        path: "autoselect",
        element: <AutoSelectPage />,
      },
    ],
  },
];

const router = createBrowserRouter(finalRoutes);

export default router;
