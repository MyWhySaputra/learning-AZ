import { useState, Fragment } from "react";
import { Table } from "../../models/table";

const Table1 = ({ data }: { data: Table[] }) => {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const toggleRow = (id: number) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const renderRows = (data: Table[], level = 0) => {
    return data.map((row: Table) => (
      <Fragment key={row.id.toString()}>
        <tr className="hover:bg-gray-100">
          <td
            style={{ paddingLeft: `${level * 20}px` }}
            className="py-2 text-sm"
          >
            {row.children && (
              <button
                onClick={() => toggleRow(row.id)}
                className="mr-2 text-blue-600"
              >
                {expandedRows.includes(row.id) ? "▼" : "▶"}
              </button>
            )}
            {row.nama_lengkap}
          </td>
          <td style={ level > 0 && { paddingLeft: `${level * 20}px` } || { paddingLeft: "10px"}} className="py-2">
            {row.jenis_kelamin}
          </td>
          <td style={ level > 0 && { paddingLeft: `${level * 20}px` } || { paddingLeft: "10px"}} className="py-2">
            {row.tanggal_lahir}
          </td>
          <td style={ level > 0 && { paddingLeft: `${level * 20}px` } || { paddingLeft: "10px"}} className="py-2">
            {row.agama}
          </td>
          <td style={ level > 0 && { paddingLeft: `${level * 20}px` } || { paddingLeft: "10px"}} className="py-2">
            {row.pendidikan}
          </td>
          <td style={ level > 0 && { paddingLeft: `${level * 20}px` } || { }} className="py-2 text-center">
            {row.status}
          </td>
        </tr>
        {row.children &&
          expandedRows.includes(row.id) &&
          renderRows(row.children, level + 1)}
      </Fragment>
    ));
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border-b border-gray-300 py-3 px-4 text-sm">
              Nama Lengkap
            </th>
            <th className="border-b border-gray-300 py-3 px-4 text-sm">
              Jenis Kelamin
            </th>
            <th className="border-b border-gray-300 py-3 px-4 text-sm">
              Tanggal Lahir
            </th>
            <th className="border-b border-gray-300 py-3 px-4 text-sm">
              Agama
            </th>
            <th className="border-b border-gray-300 py-3 px-4 text-sm">
              Pendidikan
            </th>
            <th className="border-b border-gray-300 py-3 px-4 text-center text-sm">
              Status
            </th>
          </tr>
        </thead>
        <tbody>{renderRows(data)}</tbody>
      </table>
    </div>
  );
};

export default Table1;
