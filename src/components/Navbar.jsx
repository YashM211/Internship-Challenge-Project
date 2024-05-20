import React from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-[#262626] px-5 w-[100vw] fixed max-h-[54px]  z-20  ">
      <div className="relative flex justify-between items-center">
        <img src={Logo} alt="brand-logo" width={150} className="relative " />
        <button className=" relative  bg-[#82b440] mx-[20px] my-[12px] text-white px-[16px] py-[5px] font-sora text-[14px] rounded">
          Buy now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
