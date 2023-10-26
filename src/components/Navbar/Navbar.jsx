import React from "react";
import Button from "../Button/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-mainBlue w-full h-14 flex flex-row justify-between px-8 items-center fixed top-0">
      <div className="flex gap-4">
        <div className="w-8 h-8 text-center">
          <MenuIcon sx={{ color: "#fff" }} />
        </div>
        <Link to={"/"}>
          <img
            src="../../../images/Tarea PLANNER.png"
            alt="Logo"
            className="h-8 w-18 bg-cover"
          />
        </Link>
      </div>

      <div className="flex gap-20">
        <div className="h-8 w-auto flex items-center justify-evenly gap-x-10">
          <Link to={"/pending"}>
            <Button
              text="Pending"
              color="bg-buttonHover"
              height="h-8"
              width="w-28"
              textColor="text-white"
            />
          </Link>

          <Link to={"/queue"}>
            <Button
              text="Queue"
              color="bg-buttonHover"
              height="h-8"
              width="w-28"
              textColor="text-white"
            />
          </Link>

          <Link to={"/working"}>
            <Button
              text="Working"
              color="bg-buttonHover"
              height="h-8"
              width="w-28"
              textColor="text-white"
            />
          </Link>
        </div>

        <div>
          <Link to={"/login"}>
            <Button
              text="Log In"
              color="bg-slate-900"
              height="h-8"
              width="w-28"
              textColor="text-white"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
