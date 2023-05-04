import React, { useState } from "react";

function DatePicker() {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  return (
    <div className="w-full">
      <div className="-mx-2 flex flex-wrap">
        <div className="mb-4 w-full px-2 md:mb-0 md:w-1/2">
          <label className="mb-2 block font-bold text-gray-700">
            Start Date:
          </label>
          <input
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
            className="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 leading-tight shadow hover:border-gray-500 focus:outline-none"
          />
        </div>
        <div className="w-full px-2 md:w-1/2">
          <label className="mb-2 block font-bold text-gray-700">
            End Date:
          </label>
          <input
            type="date"
            value={endDate}
            onChange={handleEndDateChange}
            className="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 leading-tight shadow hover:border-gray-500 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default DatePicker;
