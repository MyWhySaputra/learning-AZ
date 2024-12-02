import { NoLibrary } from "../../components/Calendar/NoLibrary";
import { Primereact } from "../../components/Calendar/Primereact";
import DatePicker1 from "../../components/Calendar/Tailgrid";
import DatePicker2 from "../../components/Calendar/Tailgrid2";

export const CalendarPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-6">Calendar</h1>
      <div className="flex justify-center w-2/3 mx-auto h-screen">
        <div className="overflow-x-auto w-full">
          <table className="table-lg w-full table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name Library</th>
                <th>Preview</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>No Library</td>
                <td>
                  <NoLibrary />
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Primereact</td>
                <td>
                  <Primereact />
                </td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>TailGrid</td>
                <td><DatePicker1 /></td>
              </tr>
              {/* row 4 */}
              <tr>
                <th>4</th>
                <td>TailGrid</td>
                <td><DatePicker2 /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
