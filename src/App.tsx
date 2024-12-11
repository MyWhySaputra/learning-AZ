import { RouterProvider } from "react-router-dom";
import router from "./router";
// import { useLoading } from "./contex/loading";

//import { PrimeReactProvider } from 'primereact/api';
//import Tailwind from 'primereact/passthrough/tailwind';

export default function App() {
  // const { setLoading } = useLoading();
  // setLoading(true);
  return (
    <>
      {/* <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}> */}
        <RouterProvider router={router} />
      {/* </PrimeReactProvider> */}
    </>
  );
}
