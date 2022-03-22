import React from "react";
import Nav from "./layout/Nav";
import NavLogo from "./assets/svg/NavLogo";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="header">
            <NavLogo />
            <Nav />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
