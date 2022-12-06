import { styled } from "@mui/material/styles";
import { Box, Card, Divider } from "@mui/material";
import { Link } from "react-router-dom";

export const BoxMobile = styled(Box)({
  justifyContent: "center",
  margin: "auto",
  maxWidth: 1300,
  border: "1px solid #3596e7",
});

export const CardAccountMobile = styled(Card)({
  backgroundColor: "#3596e7",
  justifyContent: "center",
  textAlign: "center",
  height: 60,
  margin: "auto",
});

export const CardAccount = styled(Card)({
  justifyContent: "center",
  textAlign: "center",
  height: 60,
  maxwidth: 425,
});

export const CardList = styled(Card)({
  margin: 10,
  textAlign: "left",
  height: 80,
  justifyContent: "center",
});

export const CardMenu = styled(Card)({
  margin: 10,
  textAlign: "center",
  minHeight: 150,
  justifyContent: "center",
  minWidth: 300,
  cursor: "pointer",
  border: "1px solid #3596e7",
  borderRadius: 20,
  elevation: 3,
});

export const Links = styled(Link)({
  textDecoration: "none",
  color: "gray",
});

export const Dividers = styled(Divider)({
  margin: 20,
});
