import React from "react";
import { SelectedPage } from "../constants/types";
import { MenuOutlined } from "@ant-design/icons";

type Props = {
  selectedPage: SelectedPage;
  handleSidebar: () => void;
};

const Navbar = ({ selectedPage, handleSidebar }: Props) => {
  return (
    <div className="border-b border-gray-800 text-xl fixed w-full bg-white z-10">
      <div className="container flex flex-row justify-between items-center min-h-20">
        <span>{"<ropa/>"}</span>
        <div className="hidden links justify-between gap-5 md:flex">
          <a
            href="#welcome"
            className={selectedPage === "welcome" ? "font-bold" : ""}
          >
            Welcome
          </a>
          <a
            href="#projects"
            className={selectedPage === "projects" ? "font-bold" : ""}
          >
            Projects
          </a>
          <a
            href="#about"
            className={selectedPage === "about" ? "font-bold" : ""}
          >
            About
          </a>
          <a
            href="#contact"
            className={selectedPage === "contact" ? "font-bold" : ""}
          >
            Contact me
          </a>
        </div>
        <div className="flex md:hidden">
          <MenuOutlined onClick={handleSidebar} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
