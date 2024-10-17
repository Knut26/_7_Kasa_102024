import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img
          className="navbar__logo-kasa"
          src="src/images/Logo Kasa.png"
          alt="Logo Kasa"
        />
      </div>
      <div className="navbar__access">
        <div>Accueil</div>
        <div>A propos</div>
      </div>
    </nav>
  );
}

export default Navbar;
