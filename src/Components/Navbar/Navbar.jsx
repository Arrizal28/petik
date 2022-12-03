import React, { useState } from "react";
import { AppBar, Box, Paper } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
import MenuNav from "./MenuNav";
import logo from "../../assets/images/petik.png";
import Account from "../Account/Account";
import Create from "../Account/Create";

function NavBar() {
  const [setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const sPaper = {
    justifyContent: "center",
    margin: "3%",
  };

  const sNavbar = {
    maxHeight: 100,
    justifyContent: "center",
    bagroundColor: "secondary",
  };

  return (
    <div>
      <AppBar elevation={0} color="transparent" position="fixed" style={sNavbar}>
        <Paper maxWidth="1024px" style={sPaper}>
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                m: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "primary",
                textDecoration: "none",
              }}
            >
              <img src={logo} className="App-logo" alt="logo" />
            </Typography>

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                m: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "primary",
                textDecoration: "none",
              }}
            >
              <img src={logo} className="Applogo" alt="logo" />
            </Typography>
            <Box sx={{ justifyContent: "right", marginLeft: "auto", flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <Create />
              <Account />
            </Box>

            <Box sx={{ textAlign: "right", flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="primary">
                <MenuNav />
              </IconButton>
            </Box>
          </Toolbar>
        </Paper>
      </AppBar>
    </div>
  );
}
export default NavBar;
