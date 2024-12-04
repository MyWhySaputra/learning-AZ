import React, { useState } from "react";
import { Table } from "../../models/table"

const Table1 = ( { data }: { data: Table[] }) => {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);
  console.log(expandedRows)

  const toggleRow = (id: number) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const renderRows = (data: Table[], level = 0) => {
    return data.map((row: Table) => (
      <React.Fragment key={row.id.toString()}>
        <tr>
          <td
            style={level > 0 && { paddingLeft: `${level * 20}px` } || { paddingLeft: "10px"}} // Adjust padding per level
            className="py-2"
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
      </React.Fragment>
    ));
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-lg w-full text-left table-fixed">
        <thead>
          <tr>
            <th className="border-b border-gray-300 text-center py-2">Nama Lengkap</th>
            <th className="border-b border-gray-300 text-center py-2 w-36">Jenis Kelamin</th>
            <th className="border-b border-gray-300 text-center py-2 w-40">Tanggal Lahir</th>
            <th className="border-b border-gray-300 text-center py-2 w-28">Agama</th>
            <th className="border-b border-gray-300 text-center py-2 w-40">Pendidikan</th>
            <th className="border-b border-gray-300 text-center py-2 w-40">Status</th>
          </tr>
        </thead>
        <tbody>{renderRows(data)}</tbody>
      </table>
    </div>
  );
};

export default Table1;
