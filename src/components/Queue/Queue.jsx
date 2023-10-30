import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidemenu from "../Sidemenu/Sidemenu";
import Footer from "../Footer/Footer";

function Queue() {
  return (
    <>
      <div className="flex">
        <Sidemenu />
        <div>Queue</div>
      </div>
      <Footer />
    </>
  );
}

export default Queue;
