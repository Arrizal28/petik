import React from "react";
import Header from "../../Components/Header/Header";
import Panel from "../../Components/Panel/Panel";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import NavBottom from "../../Components/Navbar/NavBottom";
import { logout } from "../../Redux/Actions/authaction";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import "./home.css";

function Home() {
  return (
    <>
      <Navbar />
      <NavBottom />
      <Header />
      <Panel />
      <Footer />
    </>
  );
}

export default Home;
