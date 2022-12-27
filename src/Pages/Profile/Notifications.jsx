import React, { useEffect } from "react";
import { Avatar, Grid } from "@mui/material";
import NavBar from "../../Components/Navbar/Navbar";
import Box from "@mui/material/Box";
import Footer from "../../Components/Footer/Footer";
import TopPanels from "../../Components/Header/TopPanel";
import { CardContainer, CardNotif } from "../../Styled/MUI/TransactionStyle";
import { FontBlue, FontNotif, FontP } from "../../Styled/ComponentUI/Styles";
import { Col, Row } from "react-bootstrap";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { notif } from "../../Redux/Actions/userAction";
const socket = io(process.env.REACT_APP_SOCKET_API);

function Notifications() {
  const dispatch = useDispatch();
  const { wai } = useSelector((state) => state.auth);
  useEffect(() => {
    socket.on("connect", () => {});
    socket.on(`NOTIFICATIONS-${wai?.data?.id}`, (data) => {
      dispatch(notif(data));
      console.log(data);
    });
  }, [dispatch]);

  return (
    <>
      <NavBar socket={socket} wai={wai} />
      <TopPanels />
      <Box
        sx={{
          flexGrow: 1,
          justifyContent: "center",
          maxWidth: 1024,
          margin: "auto",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{ flexGrow: 1, justifyContent: "center" }}
        >
          <Grid item xs={9}>
            <Grid>
              <CardContainer variant="outlined">
                <FontNotif>Notifications</FontNotif>
              </CardContainer>
            </Grid>
            <Grid>
              <CardNotif elevation={1}>
                <Box
                  style={{
                    justifyContent: "center",
                    textAlign: "left",
                    alignItems: "center",
                    marginTop: 25,
                  }}
                >
                  {/* <Col xs={1} style={{ justifyContent: "center", textAlign: "left", marginLeft: 20 }}> */}
                  <Avatar fontSize="small" />
                  {/* </Col>
                  <Col> */}
                  <FontP>Lorem ipsum</FontP>
                  {/* </Col> */}
                  {/* <Col xs={2} style={{ justifyContent: "center", textAlign: "right", marginLeft: 20 }}> */}
                  <FontBlue>Mark Read</FontBlue>
                  {/* </Col> */}
                </Box>
              </CardNotif>
            </Grid>
            <Grid>
              <CardNotif elevation={1}>
                <Row
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    textAlign: "left",
                    alignItems: "center",
                    marginTop: 25,
                    cursor: "pointer",
                  }}
                >
                  <Col
                    xs={1}
                    style={{
                      justifyContent: "center",
                      textAlign: "left",
                      marginLeft: 20,
                    }}
                  >
                    <Avatar fontSize="small" />
                  </Col>
                  <Col
                    xs={1}
                    style={{
                      justifyContent: "center",
                      textAlign: "left",
                      display: "flex",
                    }}
                  >
                    <FontP>Lorem ipsum</FontP>
                  </Col>
                  <Col
                    xs={2}
                    style={{
                      justifyContent: "center",
                      textAlign: "right",
                      marginLeft: 20,
                      cursor: "pointer",
                    }}
                  >
                    <FontBlue>Mark Read</FontBlue>
                  </Col>
                </Row>
              </CardNotif>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default Notifications;
