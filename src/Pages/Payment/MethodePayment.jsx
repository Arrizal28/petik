import React, { useState } from "react";
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

function MetPayment({
  totals,
  setTotals,
  paymentMethod,
  requestData,
  setRequestData,
}) {
  const [ewallet, setEwallet] = useState(false);
  const [va, setVa] = useState(false);

  const handleEwallet = () => {
    setEwallet(true);
    setRequestData({
      ...requestData,
      paymentMethod: "E-Wallet",
    });
  };

  const handleVa = () => {
    setVa(true);
    setRequestData({
      ...requestData,
      paymentMethod: "VirtualAccount",
    });
  };

  return (
    <>
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
          sx={{ flexGrow: 1, justifyContent: "center", display: "flex" }}
        >
          <Grid item xs={9}>
            <Grid>
              <CardMet variant="outlined">
                <Title>Payment Methode</Title>
                <FontP>
                  Nikmati benefit ekstra dengan metode pembayaran rekomendasi
                  petik.com{" "}
                </FontP>
              </CardMet>
            </Grid>
            {ewallet ? (
              <>
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
                              <MonetizationOnIcon
                                style={{ color: "orange", marginRight: 2 }}
                              />
                              Rp.99.999.999,00
                            </FontP>
                          </Col>
                          <Col
                            style={{
                              textAlign: "right",
                              marginRight: 15,
                              cursor: "pointer",
                            }}
                          >
                            <Title>digunakan</Title>
                          </Col>
                        </Row>
                      </Box>
                    </CardPay>
                  </Grid>
                </Grid>
              </>
            ) : va ? (
              <>
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
                          <FontP>Virtual Account</FontP>
                        </Col>
                        <Col
                          style={{
                            textAlign: "right",
                            marginRight: 15,
                            cursor: "pointer",
                          }}
                        >
                          <Title>digunakan</Title>
                        </Col>
                        <Divider />
                      </Row>
                    </Box>
                  </CardPay>
                </Grid>
              </>
            ) : (
              <>
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
                              <MonetizationOnIcon
                                style={{ color: "orange", marginRight: 2 }}
                              />
                              Rp.99.999.999,00
                            </FontP>
                          </Col>
                          <Col
                            style={{
                              textAlign: "right",
                              marginRight: 15,
                              cursor: "pointer",
                            }}
                          >
                            <Title onClick={handleEwallet}>Gunakan</Title>
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
                        <Col
                          style={{
                            textAlign: "right",
                            marginRight: 15,
                            cursor: "pointer",
                          }}
                        >
                          <Title onClick={handleVa}>Gunakan</Title>
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
                        <Col
                          style={{
                            textAlign: "right",
                            marginRight: 15,
                            cursor: "pointer",
                          }}
                        >
                          <Title onClick={handleVa}>Gunakan</Title>
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
                        <Col
                          style={{
                            textAlign: "right",
                            marginRight: 15,
                            cursor: "pointer",
                          }}
                        >
                          <Title onClick={handleVa}>Gunakan</Title>
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
                        <Col
                          style={{
                            textAlign: "right",
                            marginRight: 15,
                            cursor: "pointer",
                          }}
                        >
                          <Title onClick={handleVa}>Gunakan</Title>
                        </Col>
                      </Row>
                    </Box>
                  </CardPay>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default MetPayment;
