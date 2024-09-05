import React from "react";
import { SelectedPage } from "../constants/types";

type Props = {
  linkId: String;
  selectedPage: SelectedPage;
  handleSidebar: () => void;
};

const SidebarLink = ({ linkId, selectedPage, handleSidebar }: Props) => {
  return (
    <a
      href={`#${linkId}`}
      className={`text-2xl capitalize ${
        selectedPage === String(linkId) ? "font-bold" : ""
      }`}
      onClick={handleSidebar}
    >
      {linkId}
    </a>
  );
};

export default SidebarLink;
