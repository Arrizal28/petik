import React from "react";
import { Divider } from "@mui/material";
import { CardOrder } from "../../Styled/MUI/TransactionStyle";
import { FontBlue, FontP, TextName } from "../../Styled/ComponentUI/Styles";
import { Col, Row } from "react-bootstrap";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ScheduleIcon from "@mui/icons-material/Schedule";

function ItemSearch() {
  return (
    <>
      <CardOrder variant="outlined">
        <Row>
          <Col xs={3}>
            <FontP>ID Order</FontP>
          </Col>
          <Col>
            <FontP>255416</FontP>
          </Col>

          <Divider />
        </Row>
        <Row>
          <Col xs={3} style={{ justifyContent: "center", textAlign: "center" }}>
            <TextName>
              <img maxWidth="150px" width="100%" alt="" src="https://hangnadim.bpbatam.go.id/wp-content/uploads/2021/05/Lion-Air-1.png" />
            </TextName>
          </Col>

          <Col>
            <FontP>
              <FlightTakeoffIcon style={{ margin: 2 }} />
              Jakarta
            </FontP>
            <FontP>
              <CalendarMonthIcon style={{ margin: 2 }} />
              16 Desember 2022
            </FontP>
          </Col>
          <Col>
            <FontP>
              <FlightLandIcon style={{ margin: 2 }} /> Surabaya
            </FontP>
            <FontP>
              <ScheduleIcon style={{ margin: 2 }} /> 19.30
            </FontP>
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col xs={3}>
            <FontP>Status</FontP>
          </Col>
          <Col>
            <FontP>Pending</FontP>
          </Col>
          <Col xs={2} style={{ cursor: "pointer", textAlign: "right", marginRight: 15 }}>
            <FontBlue>Detail</FontBlue>
          </Col>
        </Row>
      </CardOrder>
    </>
  );
}

export default ItemSearch;
