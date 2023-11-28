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
          <div className="container mx-auto mt-10 h-auto">
            <h1 className="container text-3xl m-auto mb-4">Calendar</h1>
          </div>
          <Calendar />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CalendarView;
