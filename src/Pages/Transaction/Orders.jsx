import React from "react";
import { Divider } from "@mui/material";
import { CardOrder } from "../../Styled/MUI/TransactionStyle";
import { FontBlue, FontP } from "../../Styled/ComponentUI/Styles";
import { Col, Row } from "react-bootstrap";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function Orders({ item }) {
  return (
    <>
      <CardOrder variant="outlined">
        <Row>
          <Col xs={3}>
            <FontP>ID Order</FontP>
          </Col>
          <Col>
            <FontP>{item.id}</FontP>
          </Col>
          <Col>
            <FontP>
              <CalendarMonthIcon style={{ margin: 2 }} />
              {item.date}
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
            <FontP>{item.status}</FontP>
          </Col>
          <Col
            xs={2}
            style={{ cursor: "pointer", textAlign: "right", marginRight: 15 }}
          >
            {item?.status === "paid" && <FontBlue>Detail</FontBlue>}
          </Col>
        </Row>
      </CardOrder>
    </>
  );
}

export default Orders;
