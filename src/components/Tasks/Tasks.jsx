import React from "react";
import Sidemenu from "../Sidemenu/Sidemenu";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { KanbanBoard } from "../TaskManager/KanbanBoard";

function Tasks() {
  return (
    <>
      <div className="flex">
        <Sidemenu />
        <div className="w-full">
          <Navbar />
          <div className="container mx-auto mt-10 h-auto">
            <h1 className="container text-3xl m-auto mb-4">Tasks</h1>
          </div>
          <KanbanBoard />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Tasks;
