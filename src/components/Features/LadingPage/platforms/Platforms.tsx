import React from "react";
import "./platforms.scss";
import images from "./../../../../assets";

function Platforms() {
  return (
    <section className="platforms">
      <div className=" list-items container">
        <div className="list-item">
          <h2>
            Oferecemos uma plataforma customizada para treinamentos
            corporativos, cursos e workshops.
          </h2>
          <h4>Criação de plataformas:</h4>
          <ul>
            <li>
              <img src={images.check} alt="" width={25} />
              Educacionais - Corporativas
            </li>
            <li>
              <img src={images.check} alt="" width={25} />
              Gestão
            </li>
            <li>
              <img src={images.check} alt="" width={25} />
              Venda (lojas virtuais)
            </li>
            <li>
              <img src={images.check} alt="" width={25} />
              Sistema ERP (enterprise resource planning)
            </li>
            <li>
              <img src={images.check} alt="" width={25} />
              Personalizados
            </li>
          </ul>
        </div>
        <div className="list-banner">
          <img className="banner" src={images.platformImage} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Platforms;
