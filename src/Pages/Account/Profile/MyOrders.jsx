import React from "react";
import { Card, Grid } from "@mui/material";
import NavBar from "../../../Components/Navbar/Navbar";
import Box from "@mui/material/Box";
import PanelItem from "./TabPanel";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import QuizIcon from "@mui/icons-material/Quiz";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import StarsIcon from "@mui/icons-material/Stars";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ReceiptIcon from "@mui/icons-material/Receipt";
import Divider from "@mui/material/Divider";
import Logout from "../../../Components/Account/logout";
import { Link } from "react-router-dom";

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
  marginTop: 5,
  fontFamily: "sans-serif",
};

const stlCard = {
  height: 100,
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  marginTop: 25,
};

const sCard = {
  height: 750,
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  marginTop: 20,
  maxWidth: 360,
};

const stCard = {
  height: 630,
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
};

function MyOrders() {
  return (
    <>
      <NavBar />
      <div style={{ marginTop: 80 }}>
        <Box sx={{ flexGrow: 1, margin: 10 }}>
          <Grid container spacing={2}>
            <Grid xs={3}>
              <Card variant="outlined" style={sCard}>
                <div style={{ marginTop: 50 }}>
                  <h2> User Name</h2>
                  <h5>Verified</h5>
                </div>
                <List sx={style} component="nav" aria-label="mailbox folders">
                  <Divider />
                  <Link to="/profile" style={{ textDecoration: "none", color: "gray" }}>
                    <ListItem button style={{ margin: 5 }}>
                      <PersonOutlineIcon style={{ margin: 5, color: "gray" }} /> <p style={{ fontSize: 20, margin: 5 }}> Profile </p>
                    </ListItem>
                  </Link>
                  <Divider />
                  <Link to="/orders" style={{ textDecoration: "none", color: "gray" }}>
                    <ListItem button style={{ margin: 5 }}>
                      <ReceiptIcon style={{ margin: 5, color: "gray" }} />
                      <p style={{ fontSize: 20, margin: 5, color: "#3596e7" }}> My Orders </p>
                    </ListItem>
                  </Link>
                  <Divider />
                  <Link to="/refunds" style={{ textDecoration: "none", color: "gray" }}>
                    <ListItem button style={{ margin: 5 }}>
                      <CurrencyExchangeIcon style={{ margin: 5, color: "gray" }} /> <p style={{ fontSize: 20, margin: 5 }}>Refunds</p>
                    </ListItem>
                  </Link>
                  <Divider />
                  <Link to="/notification" style={{ textDecoration: "none", color: "gray" }}>
                    <ListItem button style={{ margin: 5 }}>
                      <ForwardToInboxIcon style={{ margin: 5, color: "gray" }} />
                      <p style={{ fontSize: 20, margin: 5 }}> Inbox </p>
                    </ListItem>
                  </Link>
                  <Divider />
                  <Link to="/rewards" style={{ textDecoration: "none", color: "gray" }}>
                    <ListItem button style={{ margin: 5 }}>
                      <StarsIcon style={{ margin: 5, color: "gray" }} /> <p style={{ fontSize: 20, margin: 5 }}>Rewards</p>
                    </ListItem>
                  </Link>
                  <Divider />
                  <Link to="/helpcenter" style={{ textDecoration: "none", color: "gray" }}>
                    <ListItem button style={{ margin: 5 }}>
                      <QuizIcon style={{ margin: 5, color: "gray" }} /> <p style={{ fontSize: 20, margin: 5 }}>Help Center</p>
                    </ListItem>
                  </Link>
                  <Divider />
                  <Link to="/settings" style={{ textDecoration: "none", color: "gray" }}>
                    <ListItem button style={{ margin: 5 }}>
                      <SettingsApplicationsIcon style={{ margin: 5, color: "gray" }} />
                      <p style={{ fontSize: 20, margin: 5 }}>Settings</p>
                    </ListItem>
                  </Link>
                  <Divider />
                  <Logout />
                </List>
              </Card>
            </Grid>
            <Grid item xs={9}>
              <Grid>
                <div variant="outlined" style={stCard}>
                  <PanelItem />
                </div>
              </Grid>

              <Grid>
                <Card variant="outlined" style={stlCard}></Card>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default MyOrders;
