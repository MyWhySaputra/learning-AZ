import Table1 from "@/components/TableTree/table1";
import data from "../../data/keluarga.json";
import Table2 from "@/components/TableTree/table2";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
//import TableWithPrimeFlex from "@/components/TableTree/TableWithPrimeFlex";

export const Table = () => {
  return (
    <>
      <div className="container px-3 md:mx-auto">
        <h1 className="text-3xl font-bold text-center my-6">Table</h1>
        <br />
        <h1 className="text-3xl font-bold my-6">Table Hirarki No Library</h1>
        <Table1 data={data} />
        <br />
        <br />
        <h1 className="text-3xl font-bold my-6">Table Hirarki PrimeReact</h1>
        {/* <TableWithPrimeFlex> */}
        {/* <div className="primeflex-scope"> */}
          <Table2 />
        {/* </div> */}
        {/* </TableWithPrimeFlex> */}
        <br />
        <br />
      </div>
    </>
  );
};
