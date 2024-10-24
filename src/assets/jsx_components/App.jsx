import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../css_components/app.scss";
import Banner from "./banner.jsx";
import Navbar from "./navbar.jsx";
import "../css_components/navbar.scss";
import Cards from "./cards.jsx";
import "../css_components/cards.scss";
import Footer from "./footer.jsx";
import "../css_components/footer.scss";

function App() {
  return (
    <div>
      <div className="body">
        <Navbar />
        <Banner />
        <Cards />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
