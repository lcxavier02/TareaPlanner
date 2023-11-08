import { React, useEffect, useState } from "react";
import axios from "axios";
import Button from "../Button/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";

function Navbar() {
  const [user, setUser] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((response) => {
        const { data } = response;
        setUser(data.firstName);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex items-center shadow-lg justify-end gap-x-10 h-14 w-full">
      {/* <div className="rounded-full shadow-sm ">
        <IoNotificationsOutline className="text-2xl" />
      </div>
      <div className="mr-20 flex items-center gap-3">
        <h1 className="font-medium">Xavier Velazquez</h1>
        <FaUserCircle className="text-2xl" />
      </div> */}
      <Link to={"/login"}>
        <button className="mr-20 bg-boardColor hover:bg-boardHover text-white font-semibold py-2 px-4 rounded-[5px] focus:outline-none focus:shadow-outline w-[82px]">
          Login
        </button>
      </Link>
    </div>
  );
}

export default Navbar;
