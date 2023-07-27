import React, { useEffect, useState } from "react";
import "./header.scss";
import logo from "./../../../../assets/images/becode-logo.svg";
import logoBlue from './../../../../assets/images/becode-logo-azul.svg';

import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > window.innerHeight) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else setIsOpen(true);
  };

  return (
    <header className={isSticky ? "sticky" : ""}>
      <div className="container header">
        <div className="logo">
          <img src={isSticky ? logoBlue : logo} alt="" />
        </div>
        <nav>
          <ul className="nav-items">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#sobre">Sobre nós</a>
            </li>
            <li>
              <a href="#services">Serviços</a>
            </li>
            {/* <li>
              <a href="/">Perguntas Frequentes</a>
            </li> */}
          </ul>
        </nav>
        <FaBars onClick={handleMenuClick} className="btn-mobile" />
        <nav className={isOpen ? "isOpen" : "isClose"}>
          <div className="mobile-menu-header">
            <img className="logo-mobile" src={logo} alt="" />
            <FaTimes onClick={handleMenuClick} className="leftIcon" />
          </div>
          <ul className="nav-items">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#sobre">Sobre nós</a>
            </li>
            <li>
              <a href="#services">Serviços</a>
            </li>
            {/* <li>
              <a href="/">Perguntas Frequentes</a>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
