import React from "react";
import { Avatar, Grid } from "@mui/material";
import NavBar from "../../../Components/Navbar/Navbar";
import Box from "@mui/material/Box";
import Footer from "../../../Components/Footer/Footer";
import TopPanels from "../../../Components/Header/TopPanel";
import { CardContainer, CardPanel } from "../../../Styled/MUI/TransactionStyle";
import { FontNotif } from "../../../Styled/ComponentUI/Styles";

function Notifications() {
  return (
    <>
      <NavBar />
      <TopPanels />
      <Box sx={{ flexGrow: 1, justifyContent: "center" }}>
        <Grid container spacing={2} sx={{ flexGrow: 1, justifyContent: "center" }}>
          <Grid item xs={9}>
            <Grid>
              <CardContainer variant="outlined">
                <FontNotif>Notifications</FontNotif>
              </CardContainer>
            </Grid>
            <Grid>
              <CardPanel variant="outlined">
                <Avatar />
                <p>isi text notif</p>
              </CardPanel>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default Notifications;
