import { NoLibrary } from "../../components/Calendar/NoLibrary";
import DatePicker2 from "../../components/Calendar/Tailgrid2";
import DatePickerWithRange from "../../components/Calendar/Shadcn";
import { Primereact } from "../../components/Calendar/Primereact";
import Calendar from "../../components/Calendar/ReactTailwindDatepicker";

export const CalendarPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-6">Calendar</h1>
      <div className="flex justify-center w-full px-4 md:px-8 lg:px-16 mb-10 lg:mb-0 h-screen">
        <div className="overflow-x-auto w-full max-w-7xl">
          <table className="table-auto w-full border-collapse border border-gray-200">
            {/* head */}
            <thead>
              <tr className="bg-gray-100">
                <th className="w-1/12 p-2 text-left text-sm md:text-base border border-gray-300">#</th>
                <th className="w-2/12 p-2 text-left text-sm md:text-base border border-gray-300">Name Library</th>
                <th className="p-2 text-left text-sm md:text-base border border-gray-300">Preview</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th className="p-2 border border-gray-300 text-sm md:text-base">1</th>
                <td className="p-2 border border-gray-300 text-sm md:text-base">No Library</td>
                <td className="p-2 border border-gray-300">
                  <NoLibrary />
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th className="p-2 border border-gray-300 text-sm md:text-base">2</th>
                <td className="p-2 border border-gray-300 text-sm md:text-base">PrimeReact</td>
                <td className="p-2 border border-gray-300">
                  <Primereact />
                </td>
              </tr>
              {/* row 3 */}
              <tr>
                <th className="p-2 border border-gray-300 text-sm md:text-base">3</th>
                <td className="p-2 border border-gray-300 text-sm md:text-base">Shadcn</td>
                <td className="p-2 border border-gray-300">
                  <DatePickerWithRange />
                </td>
              </tr>
              {/* row 4 */}
              <tr>
                <th className="p-2 border border-gray-300 text-sm md:text-base">4</th>
                <td className="p-2 border border-gray-300 text-sm md:text-base">ReactTailwindDatepicker</td>
                <td className="p-2 border border-gray-300">
                  <Calendar />
                </td>
              </tr>
              {/* row 5 */}
              <tr>
                <th className="p-2 border border-gray-300 text-sm md:text-base">5</th>
                <td className="p-2 border border-gray-300 text-sm md:text-base">TailGrid</td>
                <td className="p-2 border border-gray-300">
                  <DatePicker2 />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
