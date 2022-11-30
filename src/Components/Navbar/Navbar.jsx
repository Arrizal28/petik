import React, { useState } from "react";
import { AppBar, Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuNav from "./MenuNav";
import { Link } from "react-router-dom";
import logo from "../../assets/images/air.png";

function NavBar() {
  const [setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <AppBar position="fixed">
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
              color: "inherit",
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
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            PETIK
            <img src={logo} className="Applogo" alt="logo" />
            COM
          </Typography>
          <Box sx={{ justifyContent: "right", marginLeft: "auto", flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <Link to="/notification" style={{ textDecoration: "none" }}>
              <Button sx={{ my: 2, color: "white", display: "block", fontSize: 15, fontWeigh: "20px" }}>Notification</Button>
            </Link>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button sx={{ my: 2, color: "white", display: "block", fontSize: 15, fontWeigh: "20px" }}>Sign In</Button>
            </Link>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <Button sx={{ my: 2, color: "white", display: "block", fontSize: 15, fontWeigh: "20px" }}>Sign Up</Button>
            </Link>
          </Box>

          <Box sx={{ textAlign: "right", flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
              <MenuNav />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
