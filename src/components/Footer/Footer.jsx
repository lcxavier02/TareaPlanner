import React from "react";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
    <footer className="w-full bg-mainBlue h-auto flex flex-row justify-around content-center">
      <div className="flex flex-col gap-5 content-center my-14 h-auto w-2/5 px-24">
        <div className="flex gap-4 text-white text-lg h-8 content-center">
          <RoomIcon sx={{ fontSize: 30 }} />
          CETI Colomos 5°M
        </div>
        <div className="flex gap-4 text-white text-lg h-8 content-center">
          <PhoneIcon sx={{ fontSize: 30 }} />
          +52 5555555555
        </div>
        <div className="flex gap-4 text-white text-lg h-8 content-center">
          <EmailIcon sx={{ fontSize: 30 }} />
          a21310440@ceti.mx
        </div>
        <div className="flex gap-4 text-white text-lg h-8 content-center">
          <EmailIcon sx={{ fontSize: 30 }} />
          a21310438@ceti.mx
        </div>
      </div>
      <div className="flex flex-col gap-5 content-center my-14 h-auto w-2/5 px-24">
        <h1 className="text-white font-bold text-lg">About the company</h1>
        <div className="pr-20">
          <p className="text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus distinctio eligendi quidem nam magni molestias, corrupti
            accusamus praesentium similique exercitationem sed tenetur unde.
            Culpa, ipsum dolor vitae autem quia reiciendis.
          </p>
        </div>
        <div className="flex gap-4">
          <GitHubIcon sx={{ color: "#fff" }} fontSize="large" />
          <LinkedInIcon sx={{ color: "#fff" }} fontSize="large" />
          <FacebookIcon sx={{ color: "#fff" }} fontSize="large" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
