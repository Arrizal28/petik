import React from "react";
import { Grid } from "@mui/material";
import NavBar from "../../Components/Navbar/Navbar";
import Box from "@mui/material/Box";
import Footer from "../../Components/Footer/Footer";
import TopPanels from "../../Components/Header/TopPanel";
import { ButtonGroups, CardContainer, CardPanel, Links } from "../../Styled/MUI/TransactionStyle";
import { Heading, Title, FontBlue } from "../../Styled/ComponentUI/Styles";

function MyOrders() {
  return (
    <>
      <NavBar />
      <TopPanels />
      <Box sx={{ flexGrow: 1, justifyContent: "center", maxWidth: 1024, margin: "auto" }}>
        <Grid container spacing={2} sx={{ flexGrow: 1, justifyContent: "center" }}>
          <Grid item xs={9}>
            <Grid>
              <CardContainer variant="outlined">
                <Heading>Transaction</Heading>
                <ButtonGroups variant="outlined" aria-label="outlined primary button group">
                  <Links to="/ticket">
                    <Title size="small">MyTicket</Title>
                  </Links>
                  <Links to="/transaction">
                    <FontBlue size="small">MyOrder</FontBlue>
                  </Links>
                  <Links to="/history">
                    <Title size="small">MyHistory</Title>
                  </Links>
                </ButtonGroups>
              </CardContainer>
            </Grid>
            <Grid>
              <CardPanel variant="outlined"></CardPanel>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default MyOrders;
