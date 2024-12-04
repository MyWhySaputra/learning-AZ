import { NoLibrary } from "../../components/Calendar/NoLibrary";
import DatePicker2 from "../../components/Calendar/Tailgrid2";
import DatePickerWithRange from "../../components/Calendar/Shadcn";
//import Calendar from "../../components/Calendar/ReactTailwindDatepicker";

export const CalendarPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-6">Calendar</h1>
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
                  <NoLibrary />
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>TailGrid</td>
                <td><DatePicker2 /></td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Shadcn</td>
                <td><DatePickerWithRange /></td>
              </tr>
              {/* row 4 */}
              {/* <tr>
                <th>4</th>
                <td>ReactTailwindDatepicker</td>
                <td><Calendar /></td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
