import { useEffect, useState } from "react";
import { Product } from "../../models/autoselect";
import { NoLibrary } from "../../components/AutoComplate/NoLibrary";
import { ReactSelects } from "../../components/AutoComplate/ReactSelect";
import datas from "../../data/products.json";

export const AutoSelectPage = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const datasWithDate = datas.map((data) => ({ ...data, date: new Date() }));
    setData(datasWithDate);
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-6">Auto Select</h1>
      <div className="flex justify-center w-full px-4 lg:px-0 h-screen mb-10 lg:mb-0">
        <div className="overflow-x-auto w-full max-w-7xl">
          <table className="table-auto w-full table-zebra">
            {/* head */}
            <thead>
              <tr className="bg-gray-200">
                <th className="w-1/12 p-2">#</th>
                <th className="w-2/12 p-2">Name Library</th>
                <th className="p-2">Preview</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th className="p-2">1</th>
                <td className="p-2">No Library</td>
                <td className="p-2">
                  <NoLibrary data={data} />
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th className="p-2">2</th>
                <td className="p-2">React Select</td>
                <td className="p-2">
                  <ReactSelects data={data} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
