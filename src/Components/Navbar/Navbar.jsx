import React, { useState } from "react";
import { AppBar, Box, Fab, Tooltip } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuNav from "./MenuNav";
import { Link } from "react-router-dom";
import logo from "../../assets/images/air.png";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";

function NavBar() {
  const [setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <AppBar position="fixed" color="secondary">
      <Container maxWidth="1024px">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "primary",
              textDecoration: "none",
            }}
          >
            PETIK
            <img src={logo} className="App-logo" alt="logo" />
            COM
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
            PETIK
            <img src={logo} className="Applogo" alt="logo" />
            COM
          </Typography>
          <Box sx={{ justifyContent: "right", marginLeft: "auto", flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <Box sx={{ m: 1, marginLeft: "auto" }}>
              <Link to="/orders" style={{ textDecoration: "none" }}>
                <Fab color="primary" aria-label="add" size="small" sx={{ m: 1 }}>
                  <Tooltip title="My Orders">
                    <AirplaneTicketIcon />
                  </Tooltip>
                </Fab>
              </Link>

              <Link to="/notification" style={{ textDecoration: "none" }}>
                <Fab color="primary" aria-label="add" size="small" sx={{ m: 1 }}>
                  <Tooltip title="Notification">
                    <NotificationsActiveIcon />
                  </Tooltip>
                </Fab>
              </Link>

              <Link to="/login" style={{ textDecoration: "none" }}>
                <Tooltip title="Sign In">
                  <Fab color="primary" variant="extended" size="medium" sx={{ mr: 1 }}>
                    Log in
                  </Fab>
                </Tooltip>
              </Link>

              <Link to="/register" style={{ textDecoration: "none" }}>
                <Tooltip title="Sign Up">
                  <Fab color="primary" variant="extended" size="medium" sx={{ mr: 1 }}>
                    Register
                  </Fab>
                </Tooltip>
              </Link>
            </Box>
          </Box>

          <Box sx={{ textAlign: "right", flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="primary">
              <MenuNav />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
