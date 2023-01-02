import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import MediaPromo from "../Media/MediaPromo";
import MediaTag from "../Media/MediaTag";
import MediaPartner from "../Media/MediaPartner";
import { useSelector } from "react-redux";
import Header from "../../Components/Header/Header";
import PanelSearch from "../../Components/Panel/PanelSearch";
import Content from "./Content";

function Home() {
  const { token } = useSelector((state) => state.auth);
  return (
    <>
      <Navbar />
      {!token ? (
        <>
          <Header />
          <PanelSearch />
        </>
      ) : (
        <>
          <Content />
          <MediaPromo />
          <MediaTag />
          <MediaPartner />
          <Footer />
        </>
      )}
    </>
  );
}

export default Home;
