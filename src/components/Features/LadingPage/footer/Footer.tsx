import React from "react";
import images from "./../../../../assets";
import "./footer.scss";

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
            <img src={images.phone} alt="" width={20} />
            <p>(31) 99497-0540</p>
          </li>
          <li>
            <img src={images.phone} alt="" width={20} />
            <p>(31) 99497-0540</p>
          </li>
        </ul>
        <ul className="social">
          <li>
            <a href="/">
              <img src={images.phone} alt="" width={20} />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={images.phone} alt="" width={20} />
            </a>
          </li>
        </ul>
      </div>
      <p className="copy">© 2022 Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
