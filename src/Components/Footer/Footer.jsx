import React from "react";
import logo from "../../assets/images/air.png";

function Footer() {
  return (
    <>
      <div style={{ marginTop: 300, color: "gray", height: 50, borderTop: "solid 1px gray" }}>
        <p style={{ marginTop: 10, textAlign: "center", margin: 10 }}>
          PETIK
          <img src={logo} className="App-logo" alt="logo" />
          COM
        </p>
        <p style={{ marginTop: 10, textAlign: "center", margin: 2 }}>Tempat Pesan Tiket Pesawat Mudah dan Murah </p>
      </div>
      <div style={{ margin: 50, color: "gray", height: 20 }}></div>
    </>
  );
}

export default Footer;
