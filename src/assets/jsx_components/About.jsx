import React from "react";
import { Accordion, AccordionItem } from "react-bootstrap";
import Navbar from "./navbar";
import Footer from "./footer";

function About() {
  return (
    <div>
      <Navbar />
      <div className="about__banner"></div>
      <div className="about__accordion">
        {data.map((item) => (
          <Accordion defaultActiveKey={0}>
            <Accordion.Item className="accordion-item">
              <Accordion.Header className="about__accordion__header">
                {item.about__accordion__title}
              </Accordion.Header>
            </Accordion.Item>
            <Accordion.Item className="about__accordion__content">
              <Accordion.Body>{item.about__accordion__content}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}
      </div>
      <div className="about__footer">
        <Footer />
      </div>
    </div>
  );
}

const data = [
  {
    about__accordion__title: "Fiabilité",
    about__accordion__content: `Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont coformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.`,
  },
  {
    about__accordion__title: "Respect",
    about__accordion__content: `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.`,
  },
  {
    about__accordion__title: "Service",
    about__accordion__content: `La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.`,
  },
  {
    about__accordion__title: "Sécurité",
    about__accordion__content: `La sécurité est la priorité chez Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`,
  },
];

export default About;
