import { useState } from "react";
import { Calendar } from "primereact/calendar";

export const Primereact = () => {
    const [dates, setDates] = useState<(Date | null)[] | null>(null);

    return (
      <div className="flex container ">
        <Calendar
          value={dates}
          onChange={(e) => setDates(e.value as (Date | null)[])}
          selectionMode="range"
          readOnlyInput
          hideOnRangeSelection
          className="h-10"
        />
      </div>
    );
};