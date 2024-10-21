import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <div className="footer__logo__itself">
          <img
            className="footer__logo__kasa"
            src="src/images/Footer Logo Kasa.png"
            alt="Logo Kasa"
          />
        </div>
        <div className="footer__logo__text__itself">
          <p className="footer__logo__text">© 2020 Kasa. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
