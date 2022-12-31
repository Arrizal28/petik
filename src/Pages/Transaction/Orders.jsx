import React from "react";
import { Divider } from "@mui/material";
import { CardOrder } from "../../Styled/MUI/TransactionStyle";
import { FontBlue, FontP } from "../../Styled/ComponentUI/Styles";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { cancelBooking } from "../../Redux/Actions/bookingAction";
import { useDispatch } from "react-redux";
import moment from "moment";

function Orders({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      booking_id: item.id,
    };
    dispatch(cancelBooking(data));
    navigate("/");
  };

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
              {moment(item.date).format("YYYY-MM-DD HH:mm:ss")}
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
            {item?.status === "paid" && (
              <FontBlue
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/ticket/print-ticket/${item.id}`);
                }}
              >
                Detail
              </FontBlue>
            )}
            {item?.status === "pending" && (
              <FontBlue onClick={handleSubmit}>Cancel</FontBlue>
            )}
          </Col>
        </Row>
      </CardOrder>
    </>
  );
}

export default Orders;
