import React from "react";
import { Divider } from "@mui/material";
import { CardOrder } from "../../Styled/MUI/TransactionStyle";
import { FontBlue, FontP } from "../../Styled/ComponentUI/Styles";
import { Col, Row } from "react-bootstrap";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function Orders() {
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
          <Col>
            <FontP>
              <CalendarMonthIcon style={{ margin: 2 }} />
              16 Desember 2022
            </FontP>
          </Col>
          <Divider />
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

export default Orders;
