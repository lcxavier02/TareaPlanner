import React from "react";

// eslint-disable-next-line react/prop-types
function Postit({ title, content, state }) {
  const color = state === "pending" ? "postItHighlight" : "postItNormal";

  const style = `bg-${color} h-60 w-40 text-center flex flex-col gap-4 py-5 px-2 rounded-md shadow-xl`;

  return (
    <div className={style}>
      <h2 className="text-black font-bold text-lg px-2">{title}</h2>
      <p className="text-black">{content}</p>
    </div>
  );
}

export default Postit;
