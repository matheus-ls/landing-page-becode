import React from "react";
import images from "./../../../../assets";
import "./footer.scss";
import { FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer container">
        <img className="logo" src={images.logo} alt="" width={221} />
        <p>
          Tecnologia, Inovação, Segurança, Agilidade e Eficiência. Tudo em um só
          lugar.
        </p>
        <ul className="contacts">
          <li>
            <FaPhoneAlt className="phone"/>
            <p>(31) 99497-0540</p>
          </li>
          <li>
            <FaPhoneAlt className="phone"/>
            <p>(31) 98356-8142</p>
          </li>
        </ul>
        <ul className="social">
          <li>
            <a href="/">
              <FaInstagram className="insta" />
            </a>
          </li>
          <li>
            <a href="/">
              <FaLinkedin className="linkedin" />
            </a>
          </li>
        </ul>
      </div>
      <p className="copy">© 2022 Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
