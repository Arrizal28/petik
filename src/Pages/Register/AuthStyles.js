import { styled } from "@mui/material/styles";
import { Button, Card, TextField, Divider } from "@mui/material";
import { Link } from "react-router-dom";

export const Cardss = styled(Card)({
  width: 390,
  height: 540,
  justifyContent: "center",
  margin: "auto",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  borderRadius: 20,
});

export const Cards = styled(Card)({
  width: 400,
  height: 550,
  justifyContent: "center",
  margin: "auto",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#3596e7",
  borderRadius: 20,
});

export const TextFields = styled(TextField)({
  width: 360,
  marginTop: 20,
  borderRadius: 20,
  marginBottom: 20,
  display: "flex",
});

export const Buttons = styled(Button)({
  width: 300,
  marginTop: 20,
  borderRadius: 10,
  display: "flex",
  justifyContent: "center",
  margin: "auto",
});

export const Buttonx = styled(Button)({
  width: 200,
  marginTop: 20,
  borderRadius: 10,
  display: "flex",
  justifyContent: "center",
  margin: "auto",
});

export const Buttonz = styled(Button)({
  width: 150,
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
  margin: 20,
});
