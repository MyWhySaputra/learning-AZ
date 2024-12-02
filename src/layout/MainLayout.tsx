import { Outlet } from "react-router-dom";
import { Navbar } from "../components/NavFoo/Navbar";
import { Footer } from "../components/NavFoo/Footer";

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
