import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  return (
    <div className="bg-mainBlue w-full h-14">
      <div>
        <MenuIcon sx={{ color: "#fff" }} />
      </div>
    </div>
  );
}

export default Navbar;
