import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Content from "./Content";
import MediaPromo from "../Media/MediaPromo";
import MediaTag from "../Media/MediaTag";
import MediaPartner from "../Media/MediaPartner";

function Home() {
  return (
    <>
      <Navbar />
      <Content />
      <MediaPromo />
      <MediaTag />
      <MediaPartner />
      <Footer />
    </>
  );
}

export default Home;
