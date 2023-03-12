import React from "react";
import "./header.scss";
import images from './../../../../assets';

const Header = () => {
  return (
    <div>
      <header className="container">
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
      </header>
    </div>
  );
};

export default Header;
