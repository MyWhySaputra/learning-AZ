import { useState } from "react";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

type DateRangeType = {
  startDate: DateValueType;
  endDate: DateValueType;
};

const Calendar = () => {
  const [value, setValue] = useState<DateRangeType>({
    startDate: null,
    endDate: null,
  });

  return (
    <section className="bg-white dark:bg-dark">
      <Datepicker
        value={value.startDate}
        onChange={(newValue: DateValueType) =>
          setValue({ ...value, startDate: newValue, endDate: null })
        }
      />
    </section>
  );
};

export default Calendar;
