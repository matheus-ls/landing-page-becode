import React from "react";
import "./guide.scss";
import images from "./../../../../assets/";

const Guide = () => {
  return (
    <div className="guide container">
      <h2>
        Tudo que você precisa para inserir sua empresa no mercado tecnológico e
        digital.
      </h2>
      <div className="flex-container">
        <div className="flex-item">
          <div className="icon">
            <img src={images.icon} alt="" />
          </div>
          <h3>Personalização</h3>
          <p>
            Serviços desenvolvidos de acordo com a necessidade e identidade da
            empresa.
          </p>
        </div>
        <div className="flex-item">
          <div className="icon">
            <img src={images.icon} alt="" />
          </div>
          <h3>Tecnologia</h3>
          <p>
            Automatize processos, reduza seus custos e aumente a produtividade
            de sua empresa.
          </p>
        </div>
        <div className="flex-item">
          <div className="icon">
            <img src={images.icon} alt="" />
          </div>
          <h3>Segurança</h3>
          <p>Todos seus dados e conteúdos protegidos.</p>
        </div>
        <div className="flex-item">
          <div className="icon">
            <img src={images.icon} alt="" />
          </div>
          <h3>User Experience</h3>
          <p>
            Plataformas intuitivas, elaboradas pensando em uma melhor
            experiência para o usuário.
          </p>
        </div>
        <div className="flex-item">
          <div className="icon">
            <img src={images.icon} alt="" />
          </div>
          <h3>Relatórios</h3>
          <p>Plataformas estáveis para o sucesso do seu negócio.</p>
        </div>
        <div className="flex-item">
          <div className="icon">
            <img src={images.icon} alt="" />
          </div>
          <h3>Suporte</h3>
          <p>
            Equipe disponível para auxiliar sua empresa no que for necessário.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Guide;
