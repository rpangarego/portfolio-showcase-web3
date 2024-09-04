import React from "react";

const Navbar = () => {
  return (
    <div className="border-b border-gray-800 text-xl">
      <div className="container flex flex-row justify-between items-center min-h-20">
        <span>{"<ropa/>"}</span>
        <div className="links flex justify-between gap-5">
          <span>About</span>
          <span>Showcase</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
