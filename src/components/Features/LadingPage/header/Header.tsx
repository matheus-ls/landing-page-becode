import React, { useEffect, useState } from "react";
import "./header.scss";
import images from './../../../../assets';

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
  
  return (
    <header className={isSticky ? "sticky" : ""}>
      <div className="container header">
        <div className="logo">
          <img src={images.logo} alt="" width={200} />
        </div>
        <nav>
          <ul className="nav-items">
            <li>Home</li>
            <li>Sobre nós</li>
            <li>Serviços</li>
            <li>Perguntas Frequentes</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
