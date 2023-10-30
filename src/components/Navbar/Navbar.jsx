import React from "react";
import Button from "../Button/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className="flex items-center shadow-lg justify-end gap-x-10 h-14 w-full">
      <div className="rounded-full shadow-sm ">
        <IoNotificationsOutline className="text-2xl" />
      </div>
      <div className="mr-12 flex items-center gap-3">
        <h1 className="font-medium">Xavier Velazquez</h1>
        <FaUserCircle className="text-2xl" />
      </div>
    </div>
  );
}

export default Navbar;
