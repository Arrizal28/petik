import React from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Footer from "../../Components/Footer/Footer";
import { FontP, Title } from "../../Styled/ComponentUI/Styles";
import { CardMet, CardPay } from "../../Styled/MUI/PaymentStyle";
import { Divider } from "antd";
import { Col, Row } from "react-bootstrap";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import VisaLogo from "../../assets/images/payment/visa.png";
import MasterLogo from "../../assets/images/payment/mastercard.png";
import Kredivo from "../../assets/images/payment/kredivo.png";
import Indodana from "../../assets/images/payment/indodana.png";
import BCA from "../../assets/images/payment/bca.png";
import Mandiri from "../../assets/images/payment/mandiri.png";
import BNI from "../../assets/images/payment/bni.png";
import Briva from "../../assets/images/payment/briva.png";

function MetPayment({ totals, setTotals }) {
  return (
    <>
      <Box sx={{ flexGrow: 1, justifyContent: "center", maxWidth: 1024, margin: "auto" }}>
        <Grid container spacing={2} sx={{ flexGrow: 1, justifyContent: "center", display: "flex" }}>
          <Grid item xs={9}>
            <Grid>
              <CardMet variant="outlined">
                <Title>Payment Methode</Title>
                <FontP>Nikmati benefit ekstra dengan metode pembayaran rekomendasi petik.com </FontP>
              </CardMet>
            </Grid>
            <Grid>
              <Grid>
                <CardPay>
                  <Box
                    sx={{
                      width: 800,
                      maxWidth: "100%",
                    }}
                  >
                    <Title>Petik Wallet</Title>
                    <Divider />
                    <Row style={{ display: "flex", minWidht: 360 }}>
                      <Col>
                        <FontP>Indar Jaya</FontP>
                      </Col>
                      <Col style={{ textAlign: "right", marginRight: 15 }}>
                        <FontP>
                          <MonetizationOnIcon style={{ color: "orange", marginRight: 2 }} />
                          Rp.1.500.000,00
                        </FontP>
                      </Col>
                      <Col style={{ textAlign: "right", marginRight: 15, cursor: "pointer" }}>
                        <Title>Gunakan</Title>
                      </Col>
                    </Row>
                  </Box>
                </CardPay>
              </Grid>
            </Grid>
            <Grid>
              <Grid>
                <CardPay>
                  <Box
                    sx={{
                      width: 800,
                      maxWidth: "100%",
                    }}
                  >
                    <Title>BANK Card</Title>
                    <Divider />
                    <Row style={{ display: "flex", minWidht: 360 }}>
                      <Col>
                        <FontP>Debit/Credit Card</FontP>
                      </Col>
                      <Col style={{ textAlign: "right", marginRight: 15 }}>
                        <img src={VisaLogo} alt="visa" width="50px" />
                        <img src={MasterLogo} alt="master" width="50px" />
                      </Col>
                      <Col style={{ textAlign: "right", marginRight: 15, cursor: "pointer" }}>
                        <Title>Gunakan</Title>
                      </Col>
                    </Row>
                  </Box>
                </CardPay>
              </Grid>
            </Grid>
            <Grid>
              <Grid>
                <CardPay>
                  <Box
                    sx={{
                      width: 800,
                      maxWidth: "100%",
                    }}
                  >
                    <Title>Cicilan Tanpa Kartu</Title>
                    <Divider />
                    <Row style={{ display: "flex", minWidht: 360 }}>
                      <Col>
                        <FontP>Kredivo</FontP>
                      </Col>
                      <Col style={{ textAlign: "right", marginRight: 15 }}>
                        <img src={Kredivo} alt="visa" width="50px" />
                      </Col>
                      <Col style={{ textAlign: "right", marginRight: 15, cursor: "pointer" }}>
                        <Title>Gunakan</Title>
                      </Col>
                      <Divider />
                    </Row>
                    <Row style={{ display: "flex", minWidht: 360 }}>
                      <Col>
                        <FontP>Indodana</FontP>
                      </Col>
                      <Col style={{ textAlign: "right", marginRight: 15 }}>
                        <img src={Indodana} alt="visa" width="50px" />
                      </Col>
                      <Col style={{ textAlign: "right", marginRight: 15, cursor: "pointer" }}>
                        <Title>Gunakan</Title>
                      </Col>
                    </Row>
                  </Box>
                </CardPay>
              </Grid>
            </Grid>
            <Grid>
              <CardPay>
                <Box
                  sx={{
                    width: 800,
                    maxWidth: "100%",
                  }}
                >
                  <Title>Virtual Account</Title>
                  <Divider />
                  <Row style={{ display: "flex", minWidht: 360 }}>
                    <Col>
                      <FontP>BCA Virtual Account</FontP>
                    </Col>
                    <Col style={{ textAlign: "right", marginRight: 15 }}>
                      <img src={BCA} alt="BCA" width="50px" />
                    </Col>
                    <Col style={{ textAlign: "right", marginRight: 15, cursor: "pointer" }}>
                      <Title>Gunakan</Title>
                    </Col>
                    <Divider />
                  </Row>
                  <Row style={{ display: "flex", minWidht: 360 }}>
                    <Col>
                      <FontP>Mandiri Virtual Account</FontP>
                    </Col>
                    <Col style={{ textAlign: "right", marginRight: 15 }}>
                      <img src={Mandiri} alt="mandiri" width="50px" />
                    </Col>
                    <Col style={{ textAlign: "right", marginRight: 15, cursor: "pointer" }}>
                      <Title>Gunakan</Title>
                    </Col>
                    <Divider />
                  </Row>
                  <Row style={{ display: "flex", minWidht: 360 }}>
                    <Col>
                      <FontP>BNI Virtual Account</FontP>
                    </Col>
                    <Col style={{ textAlign: "right", marginRight: 15 }}>
                      <img src={BNI} alt="bni" width="50px" />
                    </Col>
                    <Col style={{ textAlign: "right", marginRight: 15, cursor: "pointer" }}>
                      <Title>Gunakan</Title>
                    </Col>
                    <Divider />
                  </Row>
                  <Row style={{ display: "flex", minWidht: 360 }}>
                    <Col>
                      <FontP>Briva</FontP>
                    </Col>
                    <Col style={{ textAlign: "right", marginRight: 15 }}>
                      <img src={Briva} alt="briva" width="50px" />
                    </Col>
                    <Col style={{ textAlign: "right", marginRight: 15, cursor: "pointer" }}>
                      <Title>Gunakan</Title>
                    </Col>
                  </Row>
                </Box>
              </CardPay>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default MetPayment;
