import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

function About() {
  return (
    <div>
      <Navbar />
      <div className="about__banner"></div>
      <div className="about__collapse1__and__2">
        <div className="about__collapse1">
          <div className="about__collapse1__contentBox">
            <div className="about__collapse1__label">Fiabilité</div>
            <div className="about__collapse1__content">
              <p>
                Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont coformes aux logements, et toutes les
                informations sont régulièrement vérifiées par nos équipes.
              </p>
            </div>
          </div>
        </div>
        <div className="about__collapse2">
          <div className="about__collapse2__contentBox">
            <div className="about__collapse2__label">Respect</div>
            <div className="about__collapse2__content">
              <p>
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme.
              </p>
            </div>
          </div>
        </div>
        <div className="about__collapse3">
          <div className="about__collapse3__contentBox">
            <div className="about__collapse3__label">Service</div>
            <div className="about__collapse3__content">
              <p>
                La qualité du service est au coeur de notre engagement chez
                Kasa. Nous veillons à ce que chaque interaction, que ce soit
                avec nos hôtes ou nos locataires, soit empreinte de respect et
                de bienveillance.
              </p>
            </div>
          </div>
        </div>
        <div className="about__collapse4">
          <div className="about__collapse4__contentBox">
            <div className="about__collapse4__label">Sécurité</div>
            <div className="about__collapse4__content">
              <p>
                La sécurité est la priorité chez Kasa. Aussi bien pour nos hôtes
                que pour les voyageurs, chaque logement correspond aux critères
                de sécurité établis par nos services. En laissant une note aussi
                bien à l'hôte qu'au locataire, cela permet à nos équipes de
                vérifier que les standards sont bien respectés. Nous organisons
                également des ateliers sur la sécurité domestique pour nos
                hôtes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about__footer">
        <Footer />
      </div>
    </div>
  );
}

export default About;
