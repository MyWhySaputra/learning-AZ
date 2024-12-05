// import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../../models/autoselect";
import { NoLibrary } from "../../components/AutoComplate/NoLibrary";
import { ReactSelects } from "../../components/AutoComplate/ReactSelect";
// import { Test } from "../../components/AutoComplate/test";
import datas from "../../data/products.json";

// const products = [
//   { id: 1, title: "Apple" },
//   { id: 2, title: "Orange" },
//   { id: 3, title: "Banana" },
//   { id: 4, title: "Pineapple" },
//   { id: 5, title: "Grapes Pear" },
// ];

export const AutoSelectPage = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const { data } = await axios.get("https://fakestoreapi.com/products");
    //     setData(data);
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };
    // fetchData();
    const datasWithDate = datas.map((data) => ({ ...data, date: new Date() }));
    setData(datasWithDate);
  }, []);
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-6">Auto Select</h1>
      <div className="flex justify-center w-2/3 mx-auto h-screen">
        <div className="overflow-x-auto w-full">
          <table className="table-lg w-full table-zebra table-fixed">
            {/* head */}
            <thead>
              <tr>
                <th className="w-1/12"></th>
                <th className="w-2/12">Name Library</th>
                <th>Preview</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>No Library</td>
                <td>
                  <NoLibrary data={data} />
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>React Select</td>
                <td>
                  <ReactSelects data={data} />
                </td>
              </tr>
              {/* row 3 */}
              {/* <tr>
                <th>3</th>
                <td>Test</td>
                <td><Test data={products} /></td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
