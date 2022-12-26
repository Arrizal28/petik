import React from "react";
import { Avatar, Grid } from "@mui/material";
import NavBar from "../../Components/Navbar/Navbar";
import Box from "@mui/material/Box";
import Footer from "../../Components/Footer/Footer";
import TopPanels from "../../Components/Header/TopPanel";
import { CardContainer, CardNotif } from "../../Styled/MUI/TransactionStyle";
import { FontBlue, FontNotif, FontP } from "../../Styled/ComponentUI/Styles";
import { Col, Row } from "react-bootstrap";

function Notifications() {
  return (
    <>
      <NavBar />
      <TopPanels />
      <Box sx={{ flexGrow: 1, justifyContent: "center", maxWidth: 1024, margin: "auto" }}>
        <Grid container spacing={2} sx={{ flexGrow: 1, justifyContent: "center" }}>
          <Grid item xs={9}>
            <Grid>
              <CardContainer variant="outlined">
                <FontNotif>Notifications</FontNotif>
              </CardContainer>
            </Grid>
            <Grid>
              <CardNotif elevation={1}>
                <Row style={{ justifyContent: "center", textAlign: "left", alignItems: "center", marginTop: 25 }}>
                  <Col xs={1} style={{ justifyContent: "center", textAlign: "left", marginLeft: 20 }}>
                    <Avatar fontSize="small" />
                  </Col>
                  <Col>
                    <FontP>Lorem ipsum</FontP>
                  </Col>
                  <Col xs={2} style={{ justifyContent: "center", textAlign: "right", marginLeft: 20 }}>
                    <FontBlue>Mark Read</FontBlue>
                  </Col>
                </Row>
              </CardNotif>
            </Grid>
            <Grid>
              <CardNotif elevation={1}>
                <Row style={{ justifyContent: "center", display: "flex", textAlign: "left", alignItems: "center", marginTop: 25, cursor: "pointer" }}>
                  <Col xs={1} style={{ justifyContent: "center", textAlign: "left", marginLeft: 20 }}>
                    <Avatar fontSize="small" />
                  </Col>
                  <Col style={{ justifyContent: "center", textAlign: "left" }}>
                    <FontP>Lorem ipsum</FontP>
                  </Col>
                  <Col xs={2} style={{ justifyContent: "center", textAlign: "right", marginLeft: 20, cursor: "pointer" }}>
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
