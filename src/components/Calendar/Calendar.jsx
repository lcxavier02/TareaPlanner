import React from "react";

function Calendar() {
  const hours = [
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];

  const generateBodyCells = () => {
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    return hours.map((hour, i) => (
      <tr key={i} className="h-16">
        <td className="p-2 border-r-2 border-gray-300 text-center">{hour}</td>
        {daysOfWeek.map((day, dayIndex) => (
          <td
            key={dayIndex}
            className="p-2 border-r-2 border-gray-300 text-center"
          ></td>
        ))}
      </tr>
    ));
  };

  console.log(generateBodyCells());

  return (
    <div className="max-h-[500px] overflow-y-auto w-11/12 m-auto py-4 my-5 bg-[#F3F7FF] rounded-lg border-2 border-gray-300 shadow-lg">
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="p-2 text-center w-1/6">Hour</th>
            <th className="p-2 text-center w-1/6">Monday</th>
            <th className="p-2 text-center w-1/6">Tuesday</th>
            <th className="p-2 text-center w-1/6">Wednesday</th>
            <th className="p-2 text-center w-1/6">Thursday</th>
            <th className="p-2 text-center w-1/6">Friday</th>
          </tr>
        </thead>
        <tbody>{generateBodyCells()}</tbody>
      </table>
    </div>
  );
}

export default Calendar;
