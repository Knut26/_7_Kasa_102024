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
          <div className="apparts__title__subtitle">
            <h1 className="apparts__title">Cozy loft on Canal Saint-Martin</h1>
            <p className="apparts__subtitle">Paris, Île-de-France</p>
          </div>
          <div className="apparts__owner__rating">
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
        </div>
        <div className="apparts__owner__tag">
          <div className="cosy">Cosy</div>
          <div className="canal">Canal</div>
          <div className="paris10">Paris 10</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Apparts;
