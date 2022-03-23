import React, { useState } from "react";
import UpWork from "../assets/svg/UpWork";
import { UilGithub } from "@iconscout/react-unicons";
import { UilLinkedin } from "@iconscout/react-unicons";
import { UilSkype } from "@iconscout/react-unicons";
import { Sling as Hamburger } from "hamburger-react";

const Nav = () => {
  const [menubarClicked, setMenubarClicked] = useState(false);
  const [status, setStatus] = useState(0);
  const handleMenubar = () => {
    setMenubarClicked(!menubarClicked);
    setStatus(1);
  };
  return (
    <>
      <nav>
        <div
          className={` nav-links ${
            menubarClicked
              ? "nav-links-slide-in"
              : status == 1
              ? "nav-links-slide-out"
              : " "
          } `}
        >
          <a href="">
            <UpWork className="nav-link-svg" />
          </a>
          <a href="">
            <UilLinkedin className="nav-link-svg" />
          </a>
          <a href="">
            <UilGithub className="nav-link-svg" />
          </a>
          <a href="">
            <UilSkype className="nav-link-svg" />
          </a>
        </div>

        <div className="nav-menubar">
          <Hamburger
            size={29.9}
            color={menubarClicked ? "#fff" : "#fbc211"}
            toggle={() => handleMenubar()}
            toggled={menubarClicked}
            duration={0.5}
          />
        </div>

        <div className="scrolling-links">
          <a href="" className="scrolling-link--active">
            Home
          </a>
          <a href="" className="scrolling-link">
            About me
          </a>
          <a href="" className="scrolling-link">
            Resume
          </a>
          <a href="" className="scrolling-link">
            Testimonials
          </a>
          <a href="" className="scrolling-link">
            Contactme
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
