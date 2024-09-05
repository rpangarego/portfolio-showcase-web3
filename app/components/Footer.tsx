import React from "react";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="border-t border-gray-800 text-xl">
      <div className="container flex flex-row justify-between items-center min-h-20 ">
        <span>Developed by Ronaldo Pangarego 🍀</span>
        <div className="social flex flex-row gap-3">
          <a href="https://www.github.com/rpangarego" target="_blank">
            <Image
              src="https://github.com/rpangarego/rpangarego-portofolio/blob/master/images/social/github-sm.png?raw=true"
              alt="github_logo"
              width={22}
              height={22}
            />
          </a>

          <a href="https://www.instagram.com/ropangarego" target="_blank">
            <Image
              src="https://github.com/rpangarego/rpangarego-portofolio/blob/master/images/social/instagram-sm.png?raw=true"
              alt="instagram_logo"
              width={22}
              height={22}
            />
          </a>

          <a href="https://www.medium.com/@rpangarego" target="_blank">
            <Image
              src="https://github.com/rpangarego/rpangarego-portofolio/blob/master/images/social/medium-sm.png?raw=true"
              alt="medium_logo"
              width={22}
              height={22}
            />
          </a>

          <a href="https://www.linkedin.com/in/rpangarego" target="_blank">
            <Image
              src="https://github.com/rpangarego/rpangarego-portofolio/blob/master/images/social/linkedin-sm.png?raw=true"
              alt="linkedin_logo"
              width={22}
              height={22}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
