import React, { useState } from "react";
import { AppBar, Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import MenuNav from "./MenuNav";

function NavBar() {
  const [setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="1024px">
        <Toolbar disableGutters>
          <LocalAirportIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
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
            PETIK.COM
          </Typography>

          <LocalAirportIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
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
            PETIK.COM
          </Typography>
          <Box sx={{ justifyContent: "right", marginLeft: "auto", flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <Button sx={{ my: 2, color: "white", display: "block", fontSize: 15, fontWeigh: "20px" }}>Notification</Button>
            <Button sx={{ my: 2, color: "white", display: "block", fontSize: 15, fontWeigh: "20px" }}>Sign In</Button>
            <Button sx={{ my: 2, color: "white", display: "block", fontSize: 15, fontWeigh: "20px" }}>Sign Up</Button>
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
