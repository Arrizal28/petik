import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import NavBar from "../../Components/Navbar/Navbar";
import Box from "@mui/material/Box";
import Footer from "../../Components/Footer/Footer";
import TopPanels from "../../Components/Header/TopPanel";
import { ButtonGroups, CardContainer, Links } from "../../Styled/MUI/TransactionStyle";
import { FontBlue, Heading, Title } from "../../Styled/ComponentUI/Styles";
import { getListBooking } from "../../Redux/Actions/bookingAction";
import { useDispatch, useSelector } from "react-redux";
import Orders from "./Orders";

function Transaction() {
  const dispatch = useDispatch();

  const { listbooking } = useSelector((state) => state.booking);

  useEffect(() => {
    dispatch(getListBooking());
  }, [dispatch]);

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
        <Grid container spacing={2} sx={{ flexGrow: 1, justifyContent: "center" }}>
          <Grid item xs={10}>
            <CardContainer variant="outlined">
              <Heading>Transaction</Heading>
              <ButtonGroups variant="outlined" aria-label="outlined primary button group">
                <Title size="small">MyTicket</Title>
                <Links to="/transaction">
                  <FontBlue size="small">MyOrder</FontBlue>
                </Links>
              </ButtonGroups>
            </CardContainer>
            {listbooking?.data?.map((item) => {
              return (
                <>
                  <Orders item={item} key={item.id} />
                </>
              );
            })}
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </>
  );
}

export default Transaction;
