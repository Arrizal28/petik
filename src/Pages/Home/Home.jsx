import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Content from "./Content";
// import TopPanels from "../../Components/Header/TopPanel";

function Home() {
  return (
    <>
      {/* <TopPanels /> */}
      <Navbar />
      <Content />
      <Footer />
    </>
  );
}

export default Home;
