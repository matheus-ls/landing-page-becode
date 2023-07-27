import React from "react";
import Card from "../../../Generics/card/Card";
import "./services.scss";
import images from "./../../../../assets";
import dev from "./../../../../assets/images/dev.svg";
import gestao from "./../../../../assets/images/gestao.svg";
import ecommerce from "./../../../../assets/images/ecomerce.svg";
import devSist from "./../../../../assets/images/dev-sist.svg";
import criacaoIos from "./../../../../assets/images/criacao-ios.svg";
import idiomas from "./../../../../assets/images/idiomas.svg";
import Button from "../../../Generics/button/Button";


interface ICardContent {
  id: number;
  icon: string;
  title: string;
  content: string;
}

const cardContent: ICardContent[] = [
  {
    id: 1,
    icon: dev,
    title: "Desenvolvimento de Softwares",
    content:
      "Ter um software específico para o seu negócio é um diferencial muito importante. Aqui na BeCode desenvolvemos Softwares exclusivos para a necessidade de cada cliente.",
  },
  {
    id: 2,
    icon: gestao,
    title: "Gestão de Plataformas",
    content:
      "Desenvolvemos plataformas que auxiliam no gerenciamento de sua empresa. Facilitando ou automatizando diversas etapas, o que trará um maior e melhor rendimento para suas equipes.",
  },
  {
    id: 3,
    icon: ecommerce,
    title: "Criação de Sites e E-commerces",
    content:
      "Ter um site fará com que sua empresa alcance mais visibilidade na internet e, consequentemente, conquiste um número maior de clientes.",
  },
  {
    id: 4,
    icon: devSist,
    title: "Desenvolvimento e Manutenção de Sistemas",
    content:
      "Desenvolvemos e oferecemos manutenção em sistemas, de acordo com a necessidade de seu negócio, seguindo todas as fases de um projeto e considerando o mercado que atua.",
  },
  {
    id: 5,
    icon: idiomas,
    title: "Adequação de Sites e Sistemas em outros idiomas",
    content:
      "A adequação de sites e sistemas em outros idiomas é uma das principais formas de garantir que o produto ou serviço de uma empresa alcance o mercado global.",
  },
  {
    id: 6,
    icon: criacaoIos,
    title: "Criação de app em IOS e Android",
    content:
      "Desenvolvemos aplicativos para seu negócio, com alta tecnologia, personalização de acordo com sua identidade, trazendo inúmeras soluções para sua empresa.",
  },
];
function Services() {
  return (
    <div id="services">
      <section className="services-container">
        <h2>Serviços Oferecidos</h2>
        <div className="cards container">
          {cardContent.map((item, _) => {
            return (
              <Card
                key={item.id}
                icon={item.icon}
                title={item.title}
                content={item.content}
              />
            );
          })}
        </div>
        <div className="info container">
          <div className="info-item">
            <img className="services-banner" src={images.image2} alt="" />
          </div>
          <div className="info-item">
            <p>
              Criamos e personalizamos os mais diversos tipos de sistema,
              adequando-os a necessidade da sua empresa.
            </p>
            <Button content="Saiba mais" link="https://wa.me/+55319497-0540"/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
