import { createBrowserRouter } from "react-router-dom";
import { DashboardPage } from "../pages/dashboard";
import { CalendarPage } from "../pages/calendar";
import { AutoSelectPage } from "../pages/autoselect";
import { MainLayout } from "../layout/MainLayout";
import { NotFound } from "../contex/not-found";
import { Table } from "../pages/table";
import { Menu } from "../pages/menu";
import { Timelines } from "../pages/timeline";
import { ImportIMG } from "../pages/importIMG";

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
      {
        path: "menu",
        element: <Menu />
      },
      {
        path: "timeline",
        element: <Timelines />
      },
      {
        path: "import",
        element: <ImportIMG />,
      },
    ],
  },
];

const router = createBrowserRouter(finalRoutes);

export default router;
