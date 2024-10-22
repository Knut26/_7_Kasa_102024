import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

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
          <h1 className="apparts__title">Cozy loft on Canal Saint-Martin</h1>
          <h4 className="apparts__owner">Alexandre Dumas</h4>
          <div className="apparts__owner__picture"></div>
        </div>
        <p className="apparts__subtitle">Paris, Île-de-France</p>
        <div className="apparts__owner__tag__and__ratings">
          <div className="apparts__owner__tag">
            <div className="cosy">Cosy</div>
            <div className="canal">Canal</div>
            <div className="paris10">Paris 10</div>
          </div>
          <div className="apparts__owner__rating">
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
              icon={faStarRegular}
              size="xl"
              className="apparts__owner__rating__stars"
            />
            <FontAwesomeIcon
              icon={faStarRegular}
              size="xl"
              className="apparts__owner__rating__stars"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Apparts;
