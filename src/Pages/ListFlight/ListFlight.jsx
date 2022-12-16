import React from "react";
import FlightItem from "../../Components/FlightItem/FlightItem";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./listflight.css";

function ListFlight() {
  return (
    <div>
      <Navbar />
      <div className="listflight">
        <h1 className="tgreen">Choose your derparture flight</h1>
        <FlightItem />
      </div>
      <Footer />
    </div>
  );
}

export default ListFlight;
