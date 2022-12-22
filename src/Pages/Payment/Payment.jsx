import React from "react";
import { Grid } from "@mui/material";
import NavBar from "../../Components/Navbar/Navbar";
import Box from "@mui/material/Box";
import Footer from "../../Components/Footer/Footer";
import TopPanels from "../../Components/Header/TopPanel";
import { FontPay, Title } from "../../Styled/ComponentUI/Styles";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import SelectSeat from "./SelectSeat";
import { CardPay, CardPayment } from "../../Styled/MUI/PaymentStyle";
import MetPayment from "./MethodePayment";
import StepperPay from "./Stepper";

function Payment({ totals, setTotals }) {
  return (
    <>
      <NavBar />
      <TopPanels />
      <Box sx={{ flexGrow: 1, justifyContent: "center", maxWidth: 1024, margin: "auto" }}>
        <Grid container spacing={2} sx={{ flexGrow: 1, justifyContent: "center", display: "flex" }}>
          <Grid item xs={9}>
            <Grid>
              <CardPayment variant="outlined">
                <FontPay>PAYMENT</FontPay>
                <StepperPay />
              </CardPayment>
            </Grid>
            <Grid>
              <CardPay variant="outlined">
                <Grid2 item xs={9}>
                  <Grid>
                    <Box
                      sx={{
                        width: 800,
                        maxWidth: "100%",
                      }}
                    >
                      <Title>Select Seat</Title>
                      <SelectSeat />
                    </Box>
                  </Grid>
                </Grid2>
              </CardPay>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <MetPayment />
      <Footer />
    </>
  );
}

export default Payment;
