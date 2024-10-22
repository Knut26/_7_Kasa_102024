import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";

import Navbar from "./navbar";
import Footer from "./footer";

function Apparts() {
  return (
    <div>
      <Navbar />
      <div className="apparts__main">
        <div className="apparts__image__container">
          <img
            className="apparts__image"
            src="src/images/landscape.png"
            alt="Logo Kasa"
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
        <div className="collapse1__and__2">
          <div className="collapse1">
            <div className="collapse1__contentBox">
              <div className="collapse1__label">Description</div>
              <div className="collapse1__content">
                <p>
                  Vous serez à 50m du canal Saint-Martin où vous pourrez
                  pique-niquer l'été et à côté de nombreux bars et restaurants.
                  Au coeur de Paris avec 5 lignes de métro et de nombreux bus.
                  Logement parfait pour les voyageurs en solo et les voyageurs
                  d'affaires. Vous êtes à 1 station de la gare de l'Est (7
                  minutes à pieds).
                </p>
              </div>
            </div>
          </div>
          <div className="collapse2">
            <div className="collapse2__contentBox">
              <div className="collapse2__label">Equipements</div>
              <div className="collapse2__content">
                <p>
                  <ul>
                    <li>Climatisation</li>
                    <li>Wi-Fi</li>
                    <li>Cuisine</li>
                    <li>Espace de travail</li>
                    <li>Fer à repasser</li>
                    <li>Sèche-cheveux</li>
                    <li>Cintres</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const collapse1 = document.getElementByClassName("collapse1__contentBox");

for (let i = 0; i < collapse1.length; i++) {
  collapse1[i].addEventListener("click", () => {
    this.classList.toggle("active");
  });
}
const collapse2 = document.getElementByClassName("collapse2__contentBox");

for (let i = 0; i < collapse2.length; i++) {
  collapse2[i].addEventListener("click", () => {
    this.classList.toggle("active");
  });
}

export default Apparts;
