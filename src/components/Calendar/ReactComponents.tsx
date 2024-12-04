// import { forwardRef, useState, useCallback } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { BiCalendar } from "react-icons/bi";

// function InputGroup6({
//     label,
//     name,
//     value,
//     onChange,
//     type = "text",
//     decoration,
//     inputClassName = "",
//     decorationClassName = "",
//     disabled,
//   }) {
//     return (
//       <div className="flex flex-row items-stretch w-full">
//         <input
//           id={name}
//           name={name}
//           value={value}
//           onChange={onChange}
//           type={type}
//           placeholder={label}
//           aria-label={label}
//           className={`peer block w-full p-3 text-gray-600 bg-gray-100 border border-r-0 focus:border-red-400 focus:bg-white focus:outline-none focus:ring-0 appearance-none rounded-tr-none rounded-br-none rounded transition-colors duration-300 ${
//             disabled ? "bg-gray-200" : ""
//           } ${inputClassName}`}
//           disabled={disabled}
//         />
//         <div
//           className={`flex items-center rounded-tl-none rounded-bl-none rounded pr-3 py-3 text-gray-600 bg-gray-100 border border-l-0 peer-focus:border-red-400 peer-focus:bg-white transition-colors duration-300 ${
//             disabled ? "bg-gray-200" : ""
//           } ${decorationClassName}`}
//         >
//           {decoration}
//         </div>
//       </div>
//     );
//   }

// const CustomInputField = forwardRef<HTMLButtonElement, any>(
//   ({ name, value, label, onClick, disabled, inputClassName, icon = <BiCalendar size="1rem" /> }, ref) => (
//     <button className="w-full" onClick={onClick} ref={ref} disabled={disabled}>
//       <InputGroup6
//         name={name}
//         value={value}
//         onChange={() => null}
//         label={label}
//         decoration={icon}
//         disabled={disabled}
//         inputClassName={inputClassName}
//       />
//     </button>
//   )
// );

// const Calendar = () => {
//   const [startDate, setStartDate] = useState<Date | null>(new Date());
//   const [endDate, setEndDate] = useState<Date | null>(new Date());

//   const onRangeChange = useCallback(
//     (dates: [Date | null, Date | null] | null) => {
//       if (dates) {
//         const [start, end] = dates;
//         setStartDate(start);
//         setEndDate(end);
//       }
//     },
//     []
//   );

//   return (
//     <section className="bg-white dark:bg-dark">
//       <DatePicker
//         selected={startDate}
//         onChange={onRangeChange}
//         customInput={<CustomInputField name="name" label="Select date" />}
//         startDate={startDate}
//         endDate={endDate}
//         popperPlacement="bottom"
//         selectsRange
//         isClearable
//       />
//     </section>
//   );
// };

// export default Calendar;
