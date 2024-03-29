import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-md font-mono 
    font-bold">
      <Link to="/" className="pl-8">
        BRIAN
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <Link className="p-4 hover:bg-slate-100 rounded-full transition duration-500" to="/">
          Home
        </Link>
        <Link className="p-4 hover:bg-slate-100 rounded-full transition duration-500" to="/menu">
          Menu
        </Link>
        <Link className="p-4 hover:bg-slate-100 rounded-full transition duration-500" to="/about">
          About
        </Link>
        <Link className="p-4 hover:bg-slate-100 rounded-full transition duration-500" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
