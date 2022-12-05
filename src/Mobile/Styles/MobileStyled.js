import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { AppBar, BottomNavigation, Card, Typography } from "@mui/material";

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
});

export const BoxMobile = styled(Card)({
  maxwidth: 425,
  justifyContent: "center",
  textAlign: "center",
  margin: "auto",
  display: "flex",
});

export const CardAccountMobile = styled(Card)({
  backgroundColor: "#3596e7",
  justifyContent: "center",
  textAlign: "center",
  height: 60,
  maxwidth: 425,
  margin: "auto",
  borderRadius: 0,
});

export const CardAccount = styled(Card)({
  justifyContent: "center",
  textAlign: "center",
  height: 60,
  maxwidth: 425,
});

export const HeadText = styled(Typography)({
  fontSize: 20,
  color: "white",
  marginTop: 50,
  fontWeight: "bold",
  justifyContent: "center",
});

export const Title = styled(Typography)({
  fontSize: 25,
  color: "gray",
  marginTop: 30,
  fontWeight: "bold",
  margin: 10,
});

export const CardList = styled(Card)({
  margin: 10,
  textAlign: "left",
  height: 80,
  justifyContent: "center",
});
