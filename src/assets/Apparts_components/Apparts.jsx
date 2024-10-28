import React from "react";
import { Accordion, AccordionItem } from "react-bootstrap";
import "../Apparts_components/apparts.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft as faAngleLeftSolid } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight as faAngleRightSolid } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../NavbarAndBanner_components/navbar";
import Footer from "../Footer_components/footer";
import Banner from "../NavbarAndBanner_components/banner.jsx";

function Apparts() {
  fetch("src/images/appartements.json")
    .then((res) => res.json())
    .then((response) => console.log(response))
    .catch(console.error);

  return (
    <div>
      <Navbar />
      <div className="apparts__main">
        <div className="apparts__image__container">
          <FontAwesomeIcon
            icon={faAngleLeftSolid}
            size="xl"
            className="apparts__image__container__arrowleft"
          />
          <img
            className="apparts__image"
            src="src/images/landscape.png"
            alt="Logo Kasa"
          />
          <FontAwesomeIcon
            icon={faAngleRightSolid}
            size="xl"
            className="apparts__image__container__arrowright"
          />
        </div>
        <div className="apparts__title__and__owner">
          <div className="apparts__title__subtitle">
            <h1 className="apparts__title">Cozy loft on Canal Saint-Martin</h1>
            <p className="apparts__subtitle">Paris, Île-de-France</p>
          </div>
          <div className="apparts__owner__and__rating">
            <div className="apparts__owner_and__picture">
              <h4 className="apparts__owner">Alexandre Dumas</h4>
              <div className="apparts__owner__picture"></div>
            </div>
            <div className="apparts__owner__and__rating__itself">
              <FontAwesomeIcon
                icon={faStarSolid}
                size="xl"
                className="apparts__owner__rating__stars"
              />
              <FontAwesomeIcon
                icon={faStarSolid}
                size="xl"
                className="apparts__owner__rating__stars"
              />
              <FontAwesomeIcon
                icon={faStarSolid}
                size="xl"
                className="apparts__owner__rating__stars"
              />
              <FontAwesomeIcon
                icon={faStarSolid}
                size="xl"
                className="apparts__owner__rating__stars__grey"
              />
              <FontAwesomeIcon
                icon={faStarSolid}
                size="xl"
                className="apparts__owner__rating__stars__grey"
              />
            </div>
          </div>
        </div>
        <div className="apparts__owner__tag">
          <div className="cosy">Cosy</div>
          <div className="canal">Canal</div>
          <div className="paris10">Paris 10</div>
        </div>
        <div className="apparts__accordion">
          {data.map((item) => (
            <Accordion defaultActiveKey={0}>
              <Accordion.Item className="accordion-item">
                <Accordion.Header className="apparts__accordion__header">
                  {item.apparts__accordion__title}
                </Accordion.Header>
              </Accordion.Item>
              <Accordion.Item className="about__accordion__content">
                <Accordion.Body>
                  {item.apparts__accordion__content}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

const data = [
  {
    apparts__accordion__title: "Description",
    apparts__accordion__content: `Vous serez à 50m du canal Saint-Martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au coeur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à 1 station de la gare de l'Est (7 minutes à pieds).`,
  },
  {
    apparts__accordion__title: "Equipements",
    apparts__accordion__content: [
      "Climatisation",
      "Wi-Fi",
      "Cuisine",
      "Espace de travail",
      "Fer à repasser",
      "Sèche-cheveux",
      "Cintres",
    ],
  },
];

export default Apparts;
