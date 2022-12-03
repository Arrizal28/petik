import React from "react";
import { AppBar, Box } from "@mui/material";
import Navigation from "./Navigation";

function NavbarBottom() {
  return (
    <AppBar elevation={0} position="fixed" color="transparent" sx={{ top: "auto", bottom: 0, mt: 20 }}>
      <Box sx={{ textAlign: "right", flexGrow: 0, display: { xs: "flex", md: "none", borderTop: "1px solid gray" } }}>
        <Navigation />
      </Box>
    </AppBar>
  );
}
export default NavbarBottom;
