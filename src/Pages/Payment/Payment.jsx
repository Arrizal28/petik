import React, { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import Confirmation from "./ConfirmationPayment";

function Payment({ totals, setTotals }) {
  const [totalSeat, setTotalSeat] = useState(3);
  // const [requestData, setRequestData] = useState({
  //   booking_id: cbooking?.data?.booking?.id,
  //   paymentMethod: "business",
  //   grandTotal: cbooking?.data?.grandTotal,
  //   seatNumber: [],
  //   ticketClass: flightclass,
  // });

  const [requestData, setRequestData] = useState({
    booking_id: 2342,
    paymentMethod: "business",
    grandTotal: 4000,
    seatNumber: [],
    ticketClass: "business",
  });

  let totalSeatNumber = [];

  const { tseat, cbooking, flightclass } = useSelector((state) => state.booking);

  useEffect(() => {
    console.log(requestData);
  }, [requestData]);

  return (
    <>
      <NavBar />
      <TopPanels />
      <Box
        sx={{
          flexGrow: 1,
          justifyContent: "center",
          maxWidth: 1024,
          margin: "auto",
        }}
      >
        <Grid container spacing={2} sx={{ flexGrow: 1, justifyContent: "center", display: "flex" }}>
          <Grid item xs={9}>
            <Grid>
              <CardPayment variant="outlined">
                <FontPay>PAYMENT</FontPay>
                <StepperPay />
              </CardPayment>
            </Grid>
            {totalSeat > 0 &&
              Array.from(Array(totalSeat).keys()).map((item, i) => {
                return (
                  <>
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
                              <Title>Select Seat {item + 1}</Title>
                              <SelectSeat totalSeatNumber={totalSeatNumber} requestData={requestData} setRequestData={setRequestData} seatNumber={requestData.seatNumber} i={i} />
                            </Box>
                          </Grid>
                        </Grid2>
                      </CardPay>
                    </Grid>
                  </>
                );
              })}
          </Grid>
        </Grid>
      </Box>
      <MetPayment paymentMethod={requestData.paymentMethod} requestData={requestData} setRequestData={setRequestData} />
      <Confirmation />
      <Footer />
    </>
  );
}

export default Payment;
