import { RouterProvider } from "react-router-dom";
import router from "./router";
// import { useLoading } from "./contex/loading";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";

export default function App() {
  // const { setLoading } = useLoading();
  // setLoading(true);
  return (
    <>
      <PrimeReactProvider>
        <RouterProvider router={router} />
      </PrimeReactProvider>
    </>
  );
}
