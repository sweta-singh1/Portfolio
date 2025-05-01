import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const handleScroll = (section) => {
    setMenu(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


  return (
    <div className="navbar">
      {/* <img src="/public/github.jpg.jpg" alt="logo" /> */}
      <div className="navbar-logo">Sweta </div>

      <ul className="nav-menu">
        <li>
          <p onClick={() => handleScroll("home")}>Home</p>
        </li>
        <li>
          <p onClick={() => handleScroll("about")}>About me</p>
        </li>
        <li>
          <p onClick={() => handleScroll("services")}>Services</p>
        </li>
        <li>
          <p onClick={() => handleScroll("portfolio")}>Portfolio</p>
        </li>
        <li>
          <p onClick={() => handleScroll("contact")}>Contact</p>
        </li>
      </ul>
      <div className="nav-connect">Connect with me!</div>
    </div>
  );
};

export default Navbar;
