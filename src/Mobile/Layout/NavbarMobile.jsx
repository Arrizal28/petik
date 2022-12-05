import React from "react";
import Navigation from "./Navigation";
import { AppBars, AppBox } from "../Styles/MobileStyled";

function NavbarBottom() {
  return (
    <AppBars elevation={0} position="fixed" color="transparent">
      <AppBox sx={{ display: { xs: "flex", md: "none" } }}>
        <Navigation />
      </AppBox>
    </AppBars>
  );
}
export default NavbarBottom;
