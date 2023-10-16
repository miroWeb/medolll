import React from "react";
import "../css/nav.css";
import "../css/reset.css";
import "../css/header.css";
import "../css/main.css";
import "../css/mainThre.css";
import "../css/mainFour.css";
import "../css/mainFive.css";
import "../css/mainShest.css";
import "../css/mainSev.css";
import "../css/footer.css";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Main from "../components/Main";
import MainTwo from "../components/MainTwo";
import MainThre from "../components/MainThre";
import MainFour from "../components/MainFour";
import MainFive from "../components/MainFive";
import MainShest from "../components/MainShest";
import MainSev from "../components/MainSev";
import Footer from "../components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
      <MainTwo />
      <MainThre />
      <MainFour />
      <MainFive />
      <MainShest />
      <MainSev />
      <Footer />
    </div>
  );
}

export default App;
