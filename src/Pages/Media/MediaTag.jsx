import * as React from "react";
import { BoxPanel } from "../../Styled/MUI/HeaderStyle";
import { Row, Col } from "react-bootstrap";
import { FontPromo, HeadPromo } from "../../Styled/ComponentUI/Styles";

export default function MediaTag() {
  return (
    <>
      <BoxPanel style={{ marginBottom: 15, marginTop: 10 }}>
        <Row style={{ justifyContent: "center", textAlign: "center", display: "flex" }}>
          <Col style={{ justifyContent: "center", textAlign: "justify", marginTop: 10, marginRight: 10 }}>
            <HeadPromo>Get Cheap Flights Prices to Your Favorite Destinations with Our Airlines Partners</HeadPromo>
            <FontPromo>
              Want to book cheap airline tickets? Now with just one touch of a finger, you can immediately order cheap flight tickets at petik.com. petik.com is a pioneer of online travel agents (OTA) in Indonesia which always provides
              reliable innovations to make it easier for you when ordering flight tickets online. Search for flight tickets online at petik.com to thousands of domestic and international flight destinations around the world. You can check
              flight ticket prices online at petik.com, as well as compare flight schedules directly via online. Buying tickets online at tiket.com also provides more benefits. Every time you make a transaction, you can get ticket Points
              which, once collected, can be exchanged for gifts or special discounts from petik.com
            </FontPromo>
          </Col>
        </Row>
      </BoxPanel>
    </>
  );
}
