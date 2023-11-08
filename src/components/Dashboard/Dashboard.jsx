import React from "react";
import Postit from "../Post-it/Post-it";
import Calendar from "../Calendar/Calendar";

function Dashboard() {
  return (
    <div className="bg-[#F3F7FF] w-full min-h-screen rounded-lg p-5 container">
      <Calendar />
    </div>
  );
}

export default Dashboard;
