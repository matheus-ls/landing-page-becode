import React from "react";
import "./platforms.scss";
import images from "./../../../../assets";
import { FaCheckCircle } from "react-icons/fa";

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
              <FaCheckCircle className="checkIcon" />
              Educacionais - Corporativas
            </li>
            <li>
              <FaCheckCircle className="checkIcon" />
              Gestão
            </li>
            <li>
              <FaCheckCircle className="checkIcon" />
              Venda (lojas virtuais)
            </li>
            <li>
              <FaCheckCircle className="checkIcon" />
              Sistema ERP (enterprise resource planning)
            </li>
            <li>
              <FaCheckCircle className="checkIcon" />
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
