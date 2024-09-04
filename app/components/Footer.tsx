import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="border-t border-gray-800 text-xl">
      <div className="container flex flex-row justify-between items-center min-h-20 ">
        <span>
          Developed by{" "}
          <a
            href="https://instagram.com/ropangarego"
            target="_blank"
            className="font-bold hover:underline"
          >
            Ronaldo Pangarego
          </a>{" "}
          🍀
        </span>
      </div>
    </div>
  );
};

export default Footer;
