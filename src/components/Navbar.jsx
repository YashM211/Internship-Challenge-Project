import React from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-[#262626] p-4 w-[100vw]  fixed  z-10  " >
      <div className="flex justify-between items-center">
        <img src={Logo} alt="brand-logo" width={150} />
        <button className="bg-[#82b440] text-white px-4 py-1 text-[14px] rounded">
          Buy now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
