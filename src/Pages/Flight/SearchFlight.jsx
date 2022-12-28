import React from "react";
import { Grid } from "@mui/material";
import NavBar from "../../Components/Navbar/Navbar";
import Box from "@mui/material/Box";
import Footer from "../../Components/Footer/Footer";
import TopPanels from "../../Components/Header/TopPanel";
import { FontNotif } from "../../Styled/ComponentUI/Styles";
import Panel from "../../Components/Panel/PanelSearch";
import { CardFlight } from "../../Styled/MUI/FlightStyle";
import ItemSearch from "../../Components/FlightItem/ItemSearch";

function SearchFlight() {
  return (
    <>
      <NavBar />
      <TopPanels />
      <Box sx={{ flexGrow: 1, justifyContent: "center", maxWidth: 1024, margin: "auto", marginBottom: 10 }}>
        <Grid container spacing={2} sx={{ flexGrow: 1, justifyContent: "center" }}>
          <Grid item xs={12}>
            <CardFlight variant="outlined">
              <FontNotif>Search Your Ticket Flight</FontNotif>
            </CardFlight>
            <Panel />
          </Grid>
        </Grid>
        <ItemSearch />
      </Box>
      <Footer />
    </>
  );
}

export default SearchFlight;
