import React from "react";
import "./guide.scss";
import personalizacao from "./../../../../assets/images/personalizacao.svg";
import tecnologia from "./../../../../assets/images/tecnologia.svg";
import seguranca from "./../../../../assets/images/seguranca.svg";
import userExperience from "./../../../../assets/images/user-experience.svg";
import relatorios from "./../../../../assets/images/relatorios.svg";
import suporte from "./../../../../assets/images/suporte.svg";

const Guide = () => {
  const guideItems = [
    {
      icon: personalizacao,
      title: "Personalização",
      content:
        "Serviços desenvolvidos de acordo com a necessidade e identidade da empresa.",
    },
    {
      icon: tecnologia,
      title: "Tecnologia",
      content:
        "Automatize processos, reduza seus custos e aumente a produtividade de sua empresa.",
    },
    {
      icon: seguranca,
      title: "Segurança",
      content: "Todos seus dados e conteúdos protegidos.",
    },
    {
      icon: userExperience,
      title: "User Experience",
      content:
        "Plataformas intuitivas, elaboradas pensando em uma melhor experiência para o usuário.",
    },
    {
      icon: relatorios,
      title: "Relatórios",
      content: "Plataformas estáveis para o sucesso do seu negócio.",
    },
    {
      icon: suporte,
      title: "Suporte",
      content:
        "Equipe disponível para auxiliar sua empresa no que for necessário.",
    },
  ];
  return (
    <div id="sobre">
      <h2>
        Tudo que você precisa para inserir sua empresa no mercado tecnológico e
        digital.
      </h2>
      <div className="flex-container">
        {guideItems.map((item, _) => {
          return (
            <div className="flex-item">
              <div className="icon">
                <img src={item.icon} alt="" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Guide;
