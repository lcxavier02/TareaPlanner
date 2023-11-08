import React from "react";
import Sidemenu from "../Sidemenu/Sidemenu";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Tasks() {
  return (
    <>
      <div className="flex">
        <Sidemenu />
        <div className="w-full">
          <Navbar />
          <h1>Tasks</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Tasks;
