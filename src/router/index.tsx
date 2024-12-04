import { createBrowserRouter } from "react-router-dom";
import { DashboardPage } from "../pages/dashboard";
import { CalendarPage } from "../pages/calendar";
import { AutoSelectPage } from "../pages/autoselect";
import { MainLayout } from "../layout/MainLayout";
import { NotFound } from "../contex/not-found";
import { Table } from "../pages/table";

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
      {
        path: "table",
        element: <Table />,
      },
    ],
  },
];

const router = createBrowserRouter(finalRoutes);

export default router;
