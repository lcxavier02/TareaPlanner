import React from "react";
import Button from "../Button/Button";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  return (
    <div className="bg-mainBlue w-full h-14 flex flex-row justify-between px-8 items-center fixed top-0">
      <div className="w-8 h-8 text-center">
        <MenuIcon sx={{ color: "#fff" }} />
      </div>

      <div className="h-8 w-auto flex items-center justify-evenly gap-x-10">
        <Button
          text="Pending"
          color="bg-buttonHover"
          height="h-8"
          width="w-28"
          textColor="text-white"
        />

        <Button
          text="Queue"
          color="bg-buttonHover"
          height="h-8"
          width="w-28"
          textColor="text-white"
        />

        <Button
          text="Working"
          color="bg-buttonHover"
          height="h-8"
          width="w-28"
          textColor="text-white"
        />
      </div>
    </div>
  );
}

export default Navbar;
