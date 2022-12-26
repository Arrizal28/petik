import React from "react";
import { Divider, Grid } from "@mui/material";
import NavBar from "../../Components/Navbar/Navbar";
import Box from "@mui/material/Box";
import Footer from "../../Components/Footer/Footer";
import TopPanels from "../../Components/Header/TopPanel";
import { AirlinesCard, ButtonGroups, CardContainer, CardOrder, CardPanel, Links, QRCard } from "../../Styled/MUI/TransactionStyle";
import { FontBlue, FontP, Heading, TextName, Title } from "../../Styled/ComponentUI/Styles";
import { Col, Row } from "react-bootstrap";
import { CardMet, CardPay } from "../../Styled/MUI/PaymentStyle";

import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import BCA from "../../assets/images/payment/bca.png";
import Mandiri from "../../assets/images/payment/mandiri.png";
import BNI from "../../assets/images/payment/bni.png";
import Briva from "../../assets/images/payment/briva.png";

function Orders() {
  return (
    // <>
    //   <Box
    //     sx={{
    //       flexGrow: 1,
    //       justifyContent: "center",
    //       maxWidth: 1024,
    //       margin: "auto",
    //     }}
    //   >
    //     <Grid container spacing={2} sx={{ flexGrow: 1, justifyContent: "center", display: "flex" }}>
    //       <Grid item xs={9}>
    //         <>
    //           <Grid>
    //             <Grid>
    //               <CardPay>
    //                 <Box
    //                   sx={{
    //                     width: 800,
    //                     maxWidth: "100%",
    //                   }}
    //                 >
    //                   <Title>Petik Wallet</Title>
    //                   <Divider />
    //                   <Row style={{ display: "flex", minWidht: 360 }}>
    //                     <Col>
    //                       <FontP>Indar Jaya</FontP>
    //                     </Col>
    //                     <Col style={{ textAlign: "right", marginRight: 15 }}>
    //                       <FontP>
    //                         <MonetizationOnIcon style={{ color: "orange", marginRight: 2 }} />
    //                         Rp.99.999.999,00
    //                       </FontP>
    //                     </Col>
    //                     <Col
    //                       style={{
    //                         textAlign: "right",
    //                         marginRight: 15,
    //                         cursor: "pointer",
    //                       }}
    //                     >
    //                       <Title>digunakan</Title>
    //                     </Col>
    //                   </Row>
    //                 </Box>
    //               </CardPay>
    //             </Grid>
    //           </Grid>
    //         </>

    //         <>
    //           <Grid>
    //             <CardPay>
    //               <Box
    //                 sx={{
    //                   width: 800,
    //                   maxWidth: "100%",
    //                 }}
    //               >
    //                 <Title>Virtual Account</Title>
    //                 <Divider />
    //                 <Row style={{ display: "flex", minWidht: 360 }}>
    //                   <Col>
    //                     <FontP>Virtual Account</FontP>
    //                   </Col>
    //                   <Col
    //                     style={{
    //                       textAlign: "right",
    //                       marginRight: 15,
    //                       cursor: "pointer",
    //                     }}
    //                   >
    //                     <Title>digunakan</Title>
    //                   </Col>
    //                   <Divider />
    //                 </Row>
    //               </Box>
    //             </CardPay>
    //           </Grid>
    //         </>

    //         <>
    //           <Grid>
    //             <Grid>
    //               <CardPay>
    //                 <Box
    //                   sx={{
    //                     width: 800,
    //                     maxWidth: "100%",
    //                   }}
    //                 >
    //                   <Title>Petik Wallet</Title>
    //                   <Divider />
    //                   <Row style={{ display: "flex", minWidht: 360 }}>
    //                     <Col>
    //                       <FontP>Indar Jaya</FontP>
    //                     </Col>
    //                     <Col style={{ textAlign: "right", marginRight: 15 }}>
    //                       <FontP>
    //                         <MonetizationOnIcon style={{ color: "orange", marginRight: 2 }} />
    //                         Rp.99.999.999,00
    //                       </FontP>
    //                     </Col>
    //                     <Col
    //                       style={{
    //                         textAlign: "right",
    //                         marginRight: 15,
    //                         cursor: "pointer",
    //                       }}
    //                     >
    //                       <Title>Gunakan</Title>
    //                     </Col>
    //                   </Row>
    //                 </Box>
    //               </CardPay>
    //             </Grid>
    //           </Grid>
    //           <Grid>
    //             <CardPay>
    //               <Box
    //                 sx={{
    //                   width: 800,
    //                   maxWidth: "100%",
    //                 }}
    //               >
    //                 <Title>Virtual Account</Title>
    //                 <Divider />
    //                 <Row style={{ display: "flex", minWidht: 360 }}>
    //                   <Col>
    //                     <FontP>BCA Virtual Account</FontP>
    //                   </Col>
    //                   <Col style={{ textAlign: "right", marginRight: 15 }}>
    //                     <img src={BCA} alt="BCA" width="50px" />
    //                   </Col>
    //                   <Col
    //                     style={{
    //                       textAlign: "right",
    //                       marginRight: 15,
    //                       cursor: "pointer",
    //                     }}
    //                   >
    //                     <Title>Gunakan</Title>
    //                   </Col>
    //                   <Divider />
    //                 </Row>
    //                 <Row style={{ display: "flex", minWidht: 360 }}>
    //                   <Col>
    //                     <FontP>Mandiri Virtual Account</FontP>
    //                   </Col>
    //                   <Col style={{ textAlign: "right", marginRight: 15 }}>
    //                     <img src={Mandiri} alt="mandiri" width="50px" />
    //                   </Col>
    //                   <Col
    //                     style={{
    //                       textAlign: "right",
    //                       marginRight: 15,
    //                       cursor: "pointer",
    //                     }}
    //                   >
    //                     <Title>Gunakan</Title>
    //                   </Col>
    //                   <Divider />
    //                 </Row>
    //                 <Row style={{ display: "flex", minWidht: 360 }}>
    //                   <Col>
    //                     <FontP>BNI Virtual Account</FontP>
    //                   </Col>
    //                   <Col style={{ textAlign: "right", marginRight: 15 }}>
    //                     <img src={BNI} alt="bni" width="50px" />
    //                   </Col>
    //                   <Col
    //                     style={{
    //                       textAlign: "right",
    //                       marginRight: 15,
    //                       cursor: "pointer",
    //                     }}
    //                   >
    //                     <Title>Gunakan</Title>
    //                   </Col>
    //                   <Divider />
    //                 </Row>
    //                 <Row style={{ display: "flex", minWidht: 360 }}>
    //                   <Col>
    //                     <FontP>Briva</FontP>
    //                   </Col>
    //                   <Col style={{ textAlign: "right", marginRight: 15 }}>
    //                     <img src={Briva} alt="briva" width="50px" />
    //                   </Col>
    //                   <Col
    //                     style={{
    //                       textAlign: "right",
    //                       marginRight: 15,
    //                       cursor: "pointer",
    //                     }}
    //                   >
    //                     <Title>Gunakan</Title>
    //                   </Col>
    //                 </Row>
    //               </Box>
    //             </CardPay>
    //           </Grid>
    //         </>
    //       </Grid>
    //     </Grid>
    //   </Box>
    // </>
    <>
      <Box sx={{ flexGrow: 1, justifyContent: "center", maxWidth: 1024, margin: "auto" }}>
        <CardOrder variant="outlined">
          <Row>
            <Col xs={3}>
              <FontP>Ticket</FontP>
            </Col>
            <Col xs={2}>
              <FontP>Pesawat</FontP>
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <FontP>ID Order</FontP>
            </Col>
            <Col xs={2}>
              <FontP>255416</FontP>
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <TextName>
                <AirlinesCard elevation={1}>
                  <img minWidth="50px" width="150px" alt="" src="https://hangnadim.bpbatam.go.id/wp-content/uploads/2021/05/Lion-Air-1.png" />
                </AirlinesCard>
              </TextName>
            </Col>
            <Col xs={2}>
              <FontP>255416</FontP>
            </Col>
          </Row>
        </CardOrder>
      </Box>
    </>
  );
}

export default Orders;
