import { styled } from "@mui/material/styles";
import { Button, Card, TextField, Divider, Box } from "@mui/material";
import { Link } from "react-router-dom";
import imgbg from "../../assets/images/bg.png";

export const BoxAuth = styled(Box)({
  justifyContent: "center",
  margin: "auto",
  maxWidth: 1024,
});

export const BoxAut = styled(Box)({
  justifyContent: "center",
  margin: "auto",
  maxWidth: 800,
});

export const Cardss = styled(Card)({
  width: 800,
  height: 540,
  justifyContent: "center",
  margin: 10,
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  borderRadius: 20,
  border: "1px solid #3596e7",
});

export const Cards = styled(Card)({
  maxwidth: 400,
  height: 560,
  justifyContent: "center",
  margin: "auto",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#3596e7",
  borderRadius: 20,
  marginTop: 50,
  backgroundImage: `url(${imgbg})`,
});

export const TextFields = styled(TextField)({
  maxWidth: 600,
  marginTop: 20,
  borderRadius: 20,
  marginBottom: 20,
  display: "flex",
  margin: 25,
});

export const Buttons = styled(Button)({
  width: 360,
  marginTop: 20,
  borderRadius: 10,
  display: "flex",
  justifyContent: "center",
  margin: 25,
});

export const Buttonx = styled(Button)({
  width: 360,
  marginTop: 20,
  borderRadius: 10,
  display: "flex",
  justifyContent: "center",
  margin: 25,
});

export const Buttonz = styled(Button)({
  width: 360,
  marginTop: 20,
  borderRadius: 10,
  display: "flex",
  justifyContent: "center",
  margin: "auto",
});

export const Links = styled(Link)({
  textDecoration: "none",
});

export const Dividers = styled(Divider)({
  margin: 10,
});
