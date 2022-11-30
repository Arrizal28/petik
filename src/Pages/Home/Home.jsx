import React from "react";
import Header from "../../Components/Header/Header";
import Panel from "../../Components/Panel/Panel";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import NavBottom from "../../Components/Navbar/NavBottom";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <NavBottom />
      <Header />
      <Panel />
      <Footer />
    </div>
  );
}

export default Home;
