import Table1 from "@/components/TableTree/table1";
import data from "../../data/keluarga.json";

export const Table = () => {
  return (
    <>
      <div className="container mx-auto h-screen">
        <h1 className="text-3xl font-bold text-center my-6">Table</h1>
        <br />
        <h1 className="text-3xl font-bold my-6">Table</h1>
        <Table1 data={data} />
      </div>
    </>
  );
};
