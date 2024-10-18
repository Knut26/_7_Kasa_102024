import React from "react";
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
      <Navbar />
      <Banner />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;