import { React, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsBookHalf } from "react-icons/bs";
import { MdSpaceDashboard, MdTaskAlt } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Sidemenu() {
  const [isOpen, setIsOpen] = useState(true);
  const Menu = [
    { title: "Dashboard" },
    { title: "Calendar" },
    { title: "Settings" },
  ];

  return (
    <>
      <div
        className={`bg-boardColor min-h-screen duration-200 p-5 pt-8 ${
          isOpen ? "w-64" : "w-20"
        }`}
      >
        <AiOutlineMenu
          className={`text-white text-3xl duration-100 cursor-pointer text-center ${
            !isOpen && "rotate-90"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        />

        <Link to={"/"}>
          <div className="mt-6 h-14">
            <BsBookHalf
              className={`text-white text-4xl cursor-pointer rounded block duration-500 float-left mr-4 ${
                isOpen && "rotate-[360deg] text-4xl"
              }`}
            />
            <h1
              className={`text-white origin-left font-medium text-xl ${
                !isOpen && "scale-0"
              }`}
            >
              Tarea Planner
            </h1>
          </div>
        </Link>

        <div className="pt-2 mt-2">
          <Link to={"/"}>
            <div className="text-white text-xl flex items-center gap-x-5 cursor-pointer p-2 hover:bg-zinc-400 rounded-md mt-3 h-10">
              <span className="text-2xl block float-left ">
                <MdSpaceDashboard />
              </span>
              <span
                className={`text base font-medium flex-1 duration-200 ${
                  !isOpen && "hidden"
                }`}
              >
                Dashboard
              </span>
            </div>
          </Link>
          <Link to={"/tasks"}>
            <div className="text-white text-xl flex items-center gap-x-5 cursor-pointer p-2 hover:bg-zinc-400 rounded-md mt-3 h-10">
              <span className="text-2xl block float-left ">
                <MdTaskAlt />
              </span>
              <span
                className={`text base font-medium flex-1 duration-200 ${
                  !isOpen && "hidden"
                }`}
              >
                Tasks
              </span>
            </div>
          </Link>
          <Link to={"/calendar"}>
            <div className="text-white text-xl flex items-center gap-x-5 cursor-pointer p-2 hover:bg-zinc-400 rounded-md mt-3 h-10">
              <span className="text-2xl block float-left ">
                <FaRegCalendarAlt />
              </span>
              <span
                className={`text base font-medium flex-1 duration-200 ${
                  !isOpen && "hidden"
                }`}
              >
                Calendar
              </span>
            </div>
          </Link>
          <Link to={"/settings"}>
            <div className="text-white text-xl flex items-center gap-x-5 cursor-pointer p-2 hover:bg-zinc-400 rounded-md mt-3 h-10">
              <span className="text-2xl block float-left ">
                <IoSettingsSharp />
              </span>
              <span
                className={`text base font-medium flex-1 duration-200 ${
                  !isOpen && "hidden"
                }`}
              >
                Settings
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidemenu;
