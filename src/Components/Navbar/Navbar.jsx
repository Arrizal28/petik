import React, { useState } from "react";
import { Box, Tooltip } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuNav from "./MenuNav";
import logo from "../../assets/images/petik.png";
import Account from "../Account/Account";
import Create from "../Account/Create";
import { AppBars, AppBox, AppPaper } from "../../Styled/MUI/NavbarStyle";
import { useSelector } from "react-redux";
import { IconNotif } from "../../Styled/MUI/IconStyled";
import { Links } from "../../Styled/MUI/AuthStyles";
import Badge from "@mui/material/Badge";

function NavBar() {
  const [setAnchorElNav] = useState(null);
  const [count, setCount] = useState(1);
  const { token } = useSelector((state) => state.auth);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleChange = (event) => {
    setCount(event.currentTarget);
  };

  return (
    <div>
      <AppBars elevation={0} color="transparent" position="fixed">
        <AppBox>
          <AppPaper elevation={0}>
            <Toolbar disableGutters>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{ margin: 2, display: { xs: "flex", md: "none" }, flexGrow: 1, fontFamily: "monospace", fontWeight: 700, letterSpacing: ".2rem", color: "primary", textDecoration: "none" }}
              >
                <img src={logo} className="App-logo" alt="logo" />
              </Typography>
              <Typography variant="h6" noWrap component="a" href="/" sx={{ margin: 2, display: { xs: "none", md: "flex" }, fontFamily: "monospace", fontWeight: 700, letterSpacing: ".1rem", color: "primary", textDecoration: "none" }}>
                <img src={logo} className="Applogo" alt="logo" />
              </Typography>
              <Box sx={{ justifyContent: "right", marginLeft: "auto", flexGrow: 0, display: { xs: "none", md: "flex" } }}>{!token ? <Create /> : <Account />}</Box>
              <Box sx={{ textAlign: "right", flexGrow: 0, display: { xs: "flex", md: "none" } }}>
                {!token ? (
                  <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="primary">
                    <MenuNav />
                  </IconButton>
                ) : (
                  <Tooltip title="Notification">
                    <Links to="/notification">
                      <Badge badgeContent={count} color="primary">
                        <IconNotif color="action" onChange={handleChange} />
                      </Badge>
                    </Links>
                  </Tooltip>
                )}
              </Box>
            </Toolbar>
          </AppPaper>
        </AppBox>
      </AppBars>
    </div>
  );
}
export default NavBar;
