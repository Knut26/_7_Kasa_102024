import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

function Apparts() {
  return (
    <div>
      <Navbar />
      <div className="apparts__main">
        <img
          className="navbar__logo__kasa"
          src="src/images/landscape.png"
          alt="Logo Kasa"
        />
        <h1 className="apparts__title">Cozy loft on Canal Saint-Martin</h1>
        <h3 className="apparts__subtitle">Paris, Île-de-France</h3>
        <h4 className="apparts__owner">Alexandre Dumas</h4>
        <div className="apparts__owner__picture"></div>
        <div className="apparts__owner__rating">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Apparts;
