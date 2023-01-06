import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import NavBar from "../../Components/Navbar/Navbar";
import Box from "@mui/material/Box";
import Footer from "../../Components/Footer/Footer";
import TopPanels from "../../Components/Header/TopPanel";
import { FontNotif } from "../../Styled/ComponentUI/Styles";
import { CardFlight } from "../../Styled/MUI/FlightStyle";
import ItemSearch from "../../Components/FlightItem/ItemSearch";
import ItemNotFound from "../../Components/FlightItem/ItemNotFound";
import PanelSearch from "../../Components/Panel/PanelSearch";
import NavbarBottom from "../../Mobile/Layout/NavbarMobile";
import { showUserBio } from "../../Redux/Actions/userAction";
import { useDispatch, useSelector } from "react-redux";

function SearchFlight() {
  const { listflight } = useSelector((state) => state.airport);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(showUserBio());
    }
  }, [dispatch, token]);

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
          marginBottom: 10,
        }}
      >
        <Grid container spacing={2} sx={{ flexGrow: 1, justifyContent: "center" }}>
          <Grid item xs={12}>
            <CardFlight variant="outlined">
              <FontNotif>Search Your Ticket Flight</FontNotif>
            </CardFlight>
            <PanelSearch />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          justifyContent: "center",
          maxWidth: 800,
          margin: "auto",
          marginBottom: 10,
        }}
      >
        {listflight?.data ? <ItemSearch /> : <ItemNotFound />}
      </Box>
      <NavbarBottom />
      <Footer />
    </>
  );
}

export default SearchFlight;
