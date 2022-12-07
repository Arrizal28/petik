import * as React from "react";
import {
  BoxMobile,
  CardAccountMobile,
  CardMenu,
  Links,
} from "../../../Styled/MUI/AccountStyle";
import { Col, Row } from "antd";
import { Heading } from "../../../Mobile/Styles/StylesMobile";
import {
  IconHelp,
  IconProfile,
  IconRefunds,
  IconRewards,
  IconSettings,
  IconWallet,
} from "../../../Styled/MUI/IconStyled";
import NavBar from "../../../Components/Navbar/Navbar";
import TopPanels from "../../../Components/Header/TopPanel";
import Footer from "../../../Components/Footer/Footer";

export default function Account() {
  return (
    <>
      <NavBar />
      <TopPanels />
      <BoxMobile>
        <CardAccountMobile>
          <h1 style={{ marginTop: 10, color: "whitesmoke" }}>ACCOUNT</h1>
        </CardAccountMobile>
        <Row
          style={{ justifyContent: "center", margin: 20, marginBottom: 100 }}
        >
          <Col>
            <Links to="/account/profile">
              <CardMenu elevation={2}>
                <IconProfile />
                <Heading>PROFILE</Heading>
              </CardMenu>
            </Links>
          </Col>
          <Col>
            <Links>
              <CardMenu elevation={2}>
                <IconRefunds />
                <Heading>REFUNDS</Heading>
              </CardMenu>
            </Links>
          </Col>
          <Col>
            <Links>
              <CardMenu elevation={2}>
                <IconRewards />
                <Heading>REWARDS</Heading>
              </CardMenu>
            </Links>
          </Col>
          <Col>
            <Links>
              <CardMenu elevation={2}>
                <IconWallet />
                <Heading>WALLET</Heading>
              </CardMenu>
            </Links>
          </Col>
          <Links>
            <CardMenu elevation={2}>
              <IconHelp />
              <Heading>HELP CENTER</Heading>
            </CardMenu>
          </Links>
          <Col>
            <Links to="/account/settings">
              <CardMenu elevation={2}>
                <IconSettings />
                <Heading>SETTINGS</Heading>
              </CardMenu>
            </Links>
          </Col>
        </Row>
      </BoxMobile>
      <Footer />
    </>
  );
}
