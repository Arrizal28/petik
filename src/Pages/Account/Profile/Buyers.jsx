import React, { useState } from "react";
import { CardContent, Grid } from "@mui/material";
import NavBar from "../../../Components/Navbar/Navbar";
import MenuItem from "@mui/material/MenuItem";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import QuizIcon from "@mui/icons-material/Quiz";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import StarsIcon from "@mui/icons-material/Stars";
import ReceiptIcon from "@mui/icons-material/Receipt";
import Divider from "@mui/material/Divider";
import Logout from "../../../Components/Account/logout";
import Footer from "../../../Components/Footer/Footer";
import { BoxHome, BoxMenu, BoxPage, BoxTitle, Buttons, TextFields } from "../../../Styled/MUI/AccountStyle.js";
import { CardMenu, CardBox, CardPage } from "../../../Styled/MUI/AccountStyle.js";
import { Links, ListItems, ListPage } from "../../../Styled/MUI/AccountStyle.js";
import { Heading, Title } from "../../../Styled/ComponentUI/Styles";
import TopPanels from "../../../Components/Header/TopPanel";

function Buyers() {
  const [gender, setGender] = useState("Gender");
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

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <>
      <TopPanels />
      <NavBar />
      <BoxHome>
        <BoxPage>
          <Grid container spacing={2}>
            <Grid xs={3}>
              <CardPage variant="outlined">
                <BoxTitle>
                  <Heading> User Name</Heading>
                  <Title>Verified</Title>
                </BoxTitle>
                <ListPage component="nav" aria-label="mailbox folders">
                  <Divider />
                  <Links to="/profile">
                    <ListItems button>
                      <PersonOutlineIcon fontSize="large" color="primary" si /> <Heading> Profile </Heading>
                    </ListItems>
                  </Links>
                  <Divider />
                  <Links to="/orders">
                    <ListItems button>
                      <ReceiptIcon fontSize="medium" />
                      <Title> My Orders </Title>
                    </ListItems>
                  </Links>
                  <Divider />
                  <Links to="/refunds">
                    <ListItems button>
                      <CurrencyExchangeIcon fontSize="medium" />
                      <Title>Refunds</Title>
                    </ListItems>
                  </Links>
                  <Divider />
                  <Links to="/notification">
                    <ListItems button>
                      <ForwardToInboxIcon fontSize="medium" />
                      <Title> Inbox </Title>
                    </ListItems>
                  </Links>
                  <Divider />
                  <Links to="/rewards">
                    <ListItems button>
                      <StarsIcon fontSize="medium" />
                      <Title>Rewards</Title>
                    </ListItems>
                  </Links>
                  <Divider />
                  <Links to="/helpcenter">
                    <ListItems button>
                      <QuizIcon fontSize="medium" />
                      <Title>Help Center</Title>
                    </ListItems>
                  </Links>
                  <Divider />
                  <Links to="/settings">
                    <ListItems button>
                      <SettingsApplicationsIcon fontSize="medium" />
                      <Title>Settings</Title>
                    </ListItems>
                  </Links>
                  <Divider />
                  <Logout />
                </ListPage>
              </CardPage>
            </Grid>
            <Grid item xs={9}>
              <Grid>
                <Grid>
                  <CardMenu variant="outlined">
                    <BoxMenu>
                      <Heading>Detail Akun</Heading>
                      <Title>Di sini anda bisa mengubah profil akunmu.</Title>
                    </BoxMenu>
                  </CardMenu>
                </Grid>
                <CardBox variant="outlined">
                  <CardContent>
                    <TextFields id="outlined-basic" label="First Name" variant="outlined" size="small" helperText="Please enter your first name" />
                    <TextFields id="outlined-basic" label="Last Name" variant="outlined" size="small" helperText="Please enter your last name" />
                    <TextFields id="outlined-basic" variant="outlined" size="small" select label="Select" value={gender} onChange={handleChange} helperText="Please select your gender">
                      {titles.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextFields>
                    <TextFields id="outlined-basic" label="Phone Number" variant="outlined" size="small" helperText="Please enter your Phone number" />
                    <TextFields id="outlined-basic" label="Address" variant="outlined" size="small" helperText="Please enter your address" />
                    <TextFields id="outlined-basic" label="Nationality" variant="outlined" size="small" helperText="Please enter your Nationality" />
                    <Buttons id="outlined-basic" label="button" variant="contained" size="small">
                      Save
                    </Buttons>
                  </CardContent>
                </CardBox>
              </Grid>
            </Grid>
          </Grid>
        </BoxPage>
      </BoxHome>
      <Footer />
    </>
  );
}

export default Buyers;
