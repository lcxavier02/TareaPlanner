import React from "react";
import { BsCalendar4 } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
function Postit({ title, content, state, dueDate }) {
  const style = `bg-white h-auto w-48 border border-gray-300 border-opacity-50 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] rounded-lg px-3 py-4`;

  return (
    <div className={style}>
      <h2 className="font-sans font-semibold text-lg mb-1">{title}</h2>
      <p className="font-sans font-normal text-sm text-gray-500 text-[15px] my-2">
        {content}
      </p>
      <div className="flex items-center gap-3 mt-4 h-8">
        <BsCalendar4 className="text-gray-500 font-medium text-[20px]" />
        <p className="font-medium text-gray-500 text-center h-7">{dueDate}</p>
      </div>
    </div>
  );
}

export default Postit;
