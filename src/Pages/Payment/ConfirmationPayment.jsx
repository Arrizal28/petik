import React from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { FontP } from "../../Styled/ComponentUI/Styles";
import { ButtonPay, CardConf } from "../../Styled/MUI/PaymentStyle";
import { Col, Row } from "react-bootstrap";

function Confirmation({ handleSubmit, cbooking }) {
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
            <CardConf>
              <Box
                sx={{
                  width: 800,
                  maxWidth: "100%",
                }}
              >
                <Row style={{ display: "flex", minWidht: 360 }}>
                  <Col style={{ marginTop: 30 }}>
                    <FontP>Total Price</FontP>
                  </Col>
                  <Col
                    style={{
                      textAlign: "right",
                      marginRight: 15,
                      marginTop: 30,
                    }}
                  >
                    <FontP>{cbooking?.data?.grandTotal}</FontP>
                  </Col>
                  <Col
                    style={{
                      textAlign: "right",
                      marginRight: 15,
                      cursor: "pointer",
                    }}
                  >
                    <ButtonPay variant="contained" onClick={handleSubmit}>
                      Bayar
                    </ButtonPay>
                  </Col>
                </Row>
              </Box>
            </CardConf>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Confirmation;
