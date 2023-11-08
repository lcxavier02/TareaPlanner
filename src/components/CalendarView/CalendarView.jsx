import React from "react";
import Calendar from "../Calendar/Calendar";
import Sidemenu from "../Sidemenu/Sidemenu";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function CalendarView() {
  return (
    <>
      <div className="flex">
        <Sidemenu />
        <div className="w-full">
          <Navbar />
          <Calendar />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CalendarView;
