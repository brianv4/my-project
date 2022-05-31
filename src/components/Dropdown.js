import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div className={isOpen ? "grid grid-rows-4 text-center font-bold font-mono items-center bg-slate-100" : "hidden"} onClick={toggle}>
      <Link className="p-4 hover:bg-black hover:text-white transition duration-500" to="/">
        Home
      </Link>
      <Link className="p-4 hover:bg-black hover:text-white transition duration-500" to="/menu">
        Menu
      </Link>
      <Link className="p-4 hover:bg-black hover:text-white transition duration-500" to="/about">
        About
      </Link>
      <Link className="p-4 hover:bg-black hover:text-white transition duration-500" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;
