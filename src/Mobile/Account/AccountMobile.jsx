import * as React from "react";
import "../../Mobile/Styles/mobile.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import QuizIcon from "@mui/icons-material/Quiz";
import LogoutIcon from "@mui/icons-material/Logout";
import { CardAccountMobile, CardList, HeadText, Title } from "../Styles/MobileStyled";
import { Col, Row } from "antd";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Links } from "../../Styled/MUI/AuthStyles";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

export default function AccountMobile() {
  return (
    <div className="Mobile">
      <CardAccountMobile>
        <HeadText>Account</HeadText>
      </CardAccountMobile>
      <CardList>
        <Row style={{ justifyContent: "left", marginTop: 20 }}>
          <Col xs={2} style={{ justifyContent: "center", margin: 5 }}>
            <PersonOutlineIcon fontSize="large" color="primary" />
          </Col>
          <Col xs={17} style={{ justifyContent: "center", margin: 5 }}>
            <Title>Profil</Title>
          </Col>
          <Col xs={2} style={{ justifyContent: "center", margin: 5 }}>
            <Links to="profile">
              <KeyboardDoubleArrowRightIcon fontSize="large" />
            </Links>
          </Col>
        </Row>
      </CardList>
      <CardList>
        <Row style={{ justifyContent: "left", marginTop: 20 }}>
          <Col xs={2} style={{ justifyContent: "center", margin: 5 }}>
            <CurrencyExchangeIcon fontSize="large" color="primary" />
          </Col>
          <Col xs={17} style={{ justifyContent: "center", margin: 5 }}>
            <Title>Refunds</Title>
          </Col>
          <Col xs={2} style={{ justifyContent: "center", margin: 5 }}>
            <KeyboardDoubleArrowRightIcon fontSize="large" />
          </Col>
        </Row>
      </CardList>
      <CardList>
        <Row style={{ justifyContent: "left", marginTop: 20 }}>
          <Col xs={2} style={{ justifyContent: "center", margin: 5 }}>
            <MilitaryTechIcon fontSize="large" color="primary" />
          </Col>
          <Col xs={17} style={{ justifyContent: "center", margin: 5 }}>
            <Title>Rewards</Title>
          </Col>
          <Col xs={2} style={{ justifyContent: "center", margin: 5 }}>
            <KeyboardDoubleArrowRightIcon fontSize="large" />
          </Col>
        </Row>
      </CardList>
      <CardList>
        <Row style={{ justifyContent: "left", marginTop: 20 }}>
          <Col xs={2} style={{ justifyContent: "center", margin: 5 }}>
            <QuizIcon fontSize="large" color="primary" />
          </Col>
          <Col xs={17} style={{ justifyContent: "center", margin: 5 }}>
            <Title>Help Center</Title>
          </Col>
          <Col xs={2} style={{ justifyContent: "center", margin: 5 }}>
            <KeyboardDoubleArrowRightIcon fontSize="large" />
          </Col>
        </Row>
      </CardList>
      <CardList>
        <Row style={{ justifyContent: "left", marginTop: 20 }}>
          <Col xs={2} style={{ justifyContent: "center", margin: 5 }}>
            <SettingsSuggestIcon fontSize="large" color="primary" />
          </Col>
          <Col xs={17} style={{ justifyContent: "center", margin: 5 }}>
            <Title>Settings</Title>
          </Col>
          <Col xs={2} style={{ justifyContent: "center", margin: 5 }}>
            <Links to="settings">
              <KeyboardDoubleArrowRightIcon fontSize="large" />
            </Links>
          </Col>
        </Row>
      </CardList>
      <CardList>
        <Row style={{ justifyContent: "left", marginTop: 20 }}>
          <Col xs={2} style={{ justifyContent: "center", margin: 5 }}>
            <DirectionsRunIcon fontSize="large" color="primary" />
          </Col>
          <Col xs={17} style={{ justifyContent: "center", margin: 5 }}>
            <Title>Log Out</Title>
          </Col>
          <Col xs={2} style={{ justifyContent: "center", margin: 5 }}>
            <LogoutIcon fontSize="large" />
          </Col>
        </Row>
      </CardList>
    </div>
  );
}
