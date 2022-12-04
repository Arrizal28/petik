import React, { useState } from "react";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import NavBar from "../../../Components/Navbar/Navbar";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
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
import Footer from "../../../Components/Footer/Footer";

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
  textAlign: "left",
  alignItems: "center",
  marginTop: 5,
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
  marginTop: 20,
};

const sTextfield = {
  width: 360,
  marginTop: 15,
  borderRadius: 20,
  display: "flex",
  marginLeft: 35,
};

function Buyers() {
  const titles = [
    {
      value: "Male",
      label: "Male",
    },
    {
      value: "Female",
      label: "Female",
    },
  ];

  const [gender, setGender] = useState("Gender");

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <>
      <NavBar />
      <div style={{ marginTop: 100 }}>
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
                      <PersonOutlineIcon style={{ margin: 5, color: "gray" }} /> <p style={{ fontSize: 20, margin: 5, color: "#3596e7" }}> Profile </p>
                    </ListItem>
                  </Link>
                  <Divider />
                  <Link to="/orders" style={{ textDecoration: "none", color: "gray" }}>
                    <ListItem button style={{ margin: 5 }}>
                      <ReceiptIcon style={{ margin: 5, color: "gray" }} />
                      <p style={{ fontSize: 20, margin: 5 }}> My Orders </p>
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
                <Grid>
                  <Card variant="outlined" style={stlCard}>
                    <div style={{ marginLeft: 50, margin: 15 }}>
                      <h3>Detail Akun</h3>
                      <p>Di sini anda bisa mengubah profil akunmu.</p>
                    </div>
                  </Card>
                </Grid>
                <Card variant="outlined" style={stCard}>
                  <CardContent>
                    <TextField style={sTextfield} id="outlined-basic" variant="outlined" size="small" select label="Select" value={gender} onChange={handleChange} helperText="Please select your gender">
                      {titles.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField style={sTextfield} id="outlined-basic" label="First Name" variant="outlined" size="medium" helperText="Please enter your first name" />
                    <TextField style={sTextfield} id="outlined-basic" label="Last Name" variant="outlined" size="medium" helperText="Please enter your last name" />
                    <TextField style={sTextfield} id="outlined-basic" label="ID Number" variant="outlined" size="medium" helperText="Please enter your ID card number" />
                    <Button style={sTextfield} id="outlined-basic" label="button" variant="contained" size="medium">
                      Save
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
      <Footer />
    </>
  );
}

export default Buyers;
