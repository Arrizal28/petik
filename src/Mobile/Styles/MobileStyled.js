import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { AppBar, BottomNavigation, Button, Card } from "@mui/material";

export const AppBars = styled(AppBar)({
  top: "auto",
  bottom: 0,
  marginTop: 20,
});

export const AppBox = styled(Card)({
  textAlign: "center",
  flexGrow: 0,
  height: 60,
  marginTop: 10,
});

export const Links = styled(Link)({
  textDecoration: "none",
  color: "primary",
});

export const BottomNavigations = styled(BottomNavigation)({
  width: 900,
  display: "flex",
  justifyContent: "center",
});

export const CardMobile = styled(Card)({
  maxwidth: 1024,
  justifyContent: "center",
  textAlign: "center",
  margin: "auto",
  display: "flex",
});

export const SearchButton = styled(Button)({
  width: 200,
  borderRadius: 10,
  display: "flex",
  justifyContent: "center",
  marginRight: 20,
});
