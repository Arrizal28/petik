import React from "react";
import { Grid } from "@mui/material";
import NavBar from "../../Components/Navbar/Navbar";
import Box from "@mui/material/Box";
import Footer from "../../Components/Footer/Footer";
import TopPanels from "../../Components/Header/TopPanel";
import { CardContainer } from "../../Styled/MUI/TransactionStyle";
import { FontNotif } from "../../Styled/ComponentUI/Styles";
import Orders from "./Orders";

function Transaction() {
  return (
    <>
      <NavBar />
      <TopPanels />
      <Box sx={{ flexGrow: 1, justifyContent: "center", maxWidth: 1024, margin: "auto" }}>
        <Grid container spacing={2} sx={{ flexGrow: 1, justifyContent: "center" }}>
          <Grid item xs={10}>
            <CardContainer variant="outlined">
              <FontNotif>Transaction</FontNotif>
            </CardContainer>
            <Orders />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default Transaction;
