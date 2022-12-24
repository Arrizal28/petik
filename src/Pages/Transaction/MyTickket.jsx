import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import NavBar from "../../Components/Navbar/Navbar";
import Box from "@mui/material/Box";
import Footer from "../../Components/Footer/Footer";
import TopPanels from "../../Components/Header/TopPanel";
import {
  ButtonGroups,
  CardContainer,
  CardPanel,
  Links,
} from "../../Styled/MUI/TransactionStyle";
import { FontBlue, Heading, Title } from "../../Styled/ComponentUI/Styles";
import Ticket from "./Ticket";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getticket } from "../../Redux/Actions/bookingAction";

function MyTicket() {
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
        <Grid
          container
          spacing={2}
          sx={{ flexGrow: 1, justifyContent: "center" }}
        >
          <Grid item xs={9}>
            <Grid>
              <CardContainer variant="outlined">
                <Heading>Transaction</Heading>
                <ButtonGroups
                  variant="outlined"
                  aria-label="outlined primary button group"
                >
                  <Links to="/ticket">
                    <FontBlue size="small">MyTicket</FontBlue>
                  </Links>
                  <Links to="/transaction">
                    <Title size="small">MyOrder</Title>
                  </Links>
                  <Links to="/history">
                    <Title size="small">MyHistory</Title>
                  </Links>
                </ButtonGroups>
              </CardContainer>
            </Grid>
            <Grid>
              {ticket?.data?.map((item) => {
                return (
                  <>
                    <CardPanel variant="outlined">
                      <Ticket item={item} />
                    </CardPanel>
                  </>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default MyTicket;
