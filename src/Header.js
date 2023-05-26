import React, { useEffect } from "react";
import logo from "./img/logo.png";

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 100);
    };

    const handleMenuClick = () => {
      const menu = document.querySelector("#menu-icon");
      const navlist = document.querySelector(".navlist");
      menu.classList.toggle("fa-xmark");
      navlist.classList.toggle("open");
    };

    window.addEventListener("scroll", handleScroll);
    const menu = document.querySelector("#menu-icon");
    menu.addEventListener("click", handleMenuClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      menu.removeEventListener("click", handleMenuClick);
    };
  }, []);

  useEffect(() => {
    const handleWindowScroll = () => {
      const menu = document.querySelector("#menu-icon");
      const navlist = document.querySelector(".navlist");
      menu.classList.remove("fa-xmark");
      navlist.classList.remove("open");
    };

    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);
  return (
    <header id="home">
      <a href="#home" className="logo">
        <img src={logo} alt="logo" />
      </a>

      <ul className="navlist">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="fa-solid fa-bars" id="menu-icon"></div>
    </header>
  );
}

export default Header;
