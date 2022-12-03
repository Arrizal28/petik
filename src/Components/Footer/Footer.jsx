import { Col, Row } from "antd";
import React from "react";
import logo from "../../assets/images/petik.png";

function Footer() {
  return (
    <div style={{ marginTop: 300, color: "gray", height: 100, borderTop: "solid 1px gray", justifyContent: "center" }}>
      <div style={{ margin: 50, color: "gray" }}>
        <Row>
          <Col>
            <img src={logo} className="App-logo" alt="logo" />
            <p> Whats</p>
          </Col>
        </Row>
      </div>
      <div>
        <Row style={{ marginTop: 10, textAlign: "center", justifyContent: "center" }}>
          <img src={logo} className="App-logo" alt="logo" />
          <h6 style={{ marginTop: 20, textAlign: "center", marginBottom: 100 }}>Tempat Pesan Tiket Pesawat Mudah dan Murah</h6>
        </Row>
      </div>
    </div>
  );
}

export default Footer;
