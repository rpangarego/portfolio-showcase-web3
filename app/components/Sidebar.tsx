import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import { SelectedPage } from "../constants/types";
import SidebarLink from "./SidebarLink";

type Props = {
  selectedPage: SelectedPage;
  handleSidebar: () => void;
  isSidebarOpen: Boolean;
};

const Sidebar = ({ selectedPage, handleSidebar, isSidebarOpen }: Props) => {
  return (
    <div
      className={`z-50 h-[50vh] w-full border-b border-gray-700 bg-white  ${
        isSidebarOpen ? "fixed" : "hidden"
      } md:hidden`}
    >
      <div className="relative">
        <CloseOutlined
          onClick={handleSidebar}
          className="absolute top-8 right-12 text-xl"
        />

        <div className="flex flex-col gap-5 items-center pt-32">
          <SidebarLink
            linkId="welcome"
            selectedPage={selectedPage}
            handleSidebar={handleSidebar}
          />
          <SidebarLink
            linkId="projects"
            selectedPage={selectedPage}
            handleSidebar={handleSidebar}
          />
          <SidebarLink
            linkId="about"
            selectedPage={selectedPage}
            handleSidebar={handleSidebar}
          />
          <SidebarLink
            linkId="contact"
            selectedPage={selectedPage}
            handleSidebar={handleSidebar}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
