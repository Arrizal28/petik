import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import logo from "../../assets/images/petik.png";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FontTicket, Heading, TextName } from "../../Styled/ComponentUI/Styles";
import { Col, Row } from "react-bootstrap";
import { Divider } from "@mui/material";
import {
  CardTic,
  CardTick,
  CardTicket,
  QRCard,
} from "../../Styled/MUI/TransactionStyle";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getticket } from "../../Redux/Actions/bookingAction";

import TableContainer from "@mui/material/TableContainer";

export default function Ticket() {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      dispatch(getticket(params.id));
    }
  }, [params.id, dispatch]);

  const { ticket } = useSelector((state) => state.booking);
  return (
    <>
      {ticket?.data?.map((item) => {
        return (
          <Row
            style={{
              marginTop: 20,
              margin: "auto",
              justifyContent: "center",
              textAlign: "center",
            }}
            key={item.id}
          >
            <CardTic variant="outlined">
              <Row
                style={{
                  marginTop: 10,
                  maxWidth: 1024,
                  justifyContent: "center",
                  textAlign: "between",
                  display: "flex",
                }}
              >
                <Col>
                  <Heading>E-TICKET</Heading>
                </Col>
                <Col>
                  <img
                    className="App-log"
                    src={logo}
                    alt="logo"
                    width="120px"
                  />
                </Col>
              </Row>
            </CardTic>
            <CardTick variant="outlined">
              <Row
                style={{
                  margin: "auto",
                  maxWidth: 800,
                  textAlign: "center",
                  display: "flex",
                }}
              >
                <Heading>DETIL BOOKING</Heading>
                <Divider />
                <Row
                  style={{
                    marginTop: 20,
                    maxWidth: 800,
                    textAlign: "center",
                    display: "flex",
                  }}
                >
                  <Col>
                    <FontTicket>Airlines</FontTicket>
                  </Col>
                  <Col>
                    <FontTicket>Booking Code</FontTicket>
                  </Col>
                  <Col>
                    <FontTicket>QR CODE</FontTicket>
                  </Col>
                </Row>
                <Row
                  style={{
                    maxWidth: 800,
                    textAlign: "center",
                    display: "flex",
                  }}
                >
                  <Col>
                    <TextName>
                      {" "}
                      <img
                        width="100px"
                        alt=""
                        src="https://hangnadim.bpbatam.go.id/wp-content/uploads/2021/05/Lion-Air-1.png"
                      />
                    </TextName>
                  </Col>
                  <Col>
                    <TextName>{item.booking_id}</TextName>
                  </Col>
                  <Col>
                    <TextName>
                      <QRCard>{item.qr_code}</QRCard>
                    </TextName>
                  </Col>
                </Row>
                <Row
                  style={{
                    margin: "auto",
                    maxWidth: 800,
                    textAlign: "center",
                    display: "flex",
                  }}
                >
                  <TableContainer component={Paper}>
                    <Table
                      sx={{ minWidth: 400 }}
                      size="small"
                      aria-label="a dense table"
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell>ID Flight</TableCell>
                          <TableCell>Ticket Class</TableCell>
                          <TableCell>Departure</TableCell>
                          <TableCell>From</TableCell>
                          <TableCell>To</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {item.id}
                          </TableCell>
                          <TableCell>{item.class}</TableCell>
                          <TableCell>{item.date}</TableCell>
                          <TableCell>{item.from}</TableCell>
                          <TableCell>{item.to}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Row>
              </Row>
            </CardTick>
            <CardTicket variant="outlined">
              <Row
                style={{
                  margin: "auto",
                  maxWidth: 700,
                  textAlign: "center",
                  display: "flex",
                }}
              >
                <Heading>DETIL PENUMPANG</Heading>
                <TableContainer component={Paper}>
                  <Table
                    sx={{ minWidth: 500 }}
                    size="small"
                    aria-label="a dense table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell>No.</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Nama Penumpang</TableCell>
                        <TableCell>Jenis Tiket</TableCell>
                        <TableCell>Seat Number</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          1
                        </TableCell>
                        <TableCell>Tuan</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>Dewasa</TableCell>
                        <TableCell>{item.seatNumber}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Row>
            </CardTicket>
          </Row>
        );
      })}
    </>
  );
}
