import React from "react";
import "./app.scss";
import Banner from "./assets/components/banner.jsx";
import Navbar from "./assets/components/navbar.jsx";
import "./assets/components/navbar.scss";
import Cards from "./assets/components/cards.jsx";
import "./assets/components/cards.scss";
import Footer from "./assets/components/footer.jsx";
import "./assets/components/footer.scss";

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
