import React from "react";
import { Grid } from "@mui/material";
import NavBar from "../../../Components/Navbar/Navbar";
import Box from "@mui/material/Box";
import Footer from "../../../Components/Footer/Footer";
import TopPanels from "../../../Components/Header/TopPanel";
import { ButtonGroups, CardContainer, CardPanel, Links } from "../../../Styled/MUI/TransactionStyle";
import { Heading, Title } from "../../../Styled/ComponentUI/Styles";

function InputData() {
  return (
    <>
      <NavBar />
      <TopPanels />
      <Box sx={{ flexGrow: 1, justifyContent: "center" }}>
        <Grid container spacing={2} sx={{ flexGrow: 1, justifyContent: "center" }}>
          <Grid item xs={9}>
            <Grid>
              <CardContainer variant="outlined">
                <Heading> History Orders</Heading>
                <ButtonGroups variant="outlined" aria-label="outlined primary button group">
                  <Links to="/orders">
                    <Title size="small">My Order</Title>
                  </Links>
                  <Links to="/history">
                    <Title size="small">History</Title>
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

export default InputData;
