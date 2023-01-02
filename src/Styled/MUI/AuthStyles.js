import { styled } from "@mui/material/styles";
import { Button, Card, TextField, Divider, Box } from "@mui/material";
import { Link } from "react-router-dom";
import imgbg from "../../assets/images/bg.png";

export const BoxAuth = styled(Box)({
  justifyContent: "center",
  margin: "auto",
});

<<<<<<< HEAD
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
=======
export const Cardss = styled(Card)({
  maxWidth: 800,
  maxHeight: 540,
  justifyContent: "center",
  margin: "10px",
>>>>>>> e173c3088ea59053f409edc0c686dadfaa7c649e
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  borderRadius: "none",
});

export const CardLogo = styled(Card)({
  width: 360,
  maxHeight: 540,
  justifyContent: "center",
  margin: "10px",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  borderRadius: "none",
});

export const CardLogin = styled(Card)({
  width: 360,
  maxWidth: "100%",
  height: 250,
  justifyContent: "center",
  margin: "10px",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  borderRadius: "none",
});

export const Cards = styled(Card)({
  maxWidth: 1300,
  maxHeigth: 560,
  justifyContent: "center",
  margin: "auto",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  backgroundColor: "whitesmoke",
  borderRadius: 20,
  marginTop: 50,
  backgroundImage: `url(${imgbg})`,
});

export const TextFields = styled(TextField)({
<<<<<<< HEAD
  maxWidth: 600,
=======
  width: 350,
  maxWidth: "100%",
>>>>>>> e173c3088ea59053f409edc0c686dadfaa7c649e
  marginTop: 20,
  borderRadius: 20,
  marginBottom: 20,
  display: "flex",
  margin: 25,
});

export const Buttons = styled(Button)({
<<<<<<< HEAD
  width: 360,
  marginTop: 20,
=======
  width: 350,
  marginTop: 25,
  marginBottom: 20,
>>>>>>> e173c3088ea59053f409edc0c686dadfaa7c649e
  borderRadius: 10,
  display: "flex",
  justifyContent: "center",
  margin: 25,
});

export const Buttonx = styled(Button)({
<<<<<<< HEAD
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
=======
  width: 350,
  marginTop: 25,
  borderRadius: 10,
  display: "flex",
  justifyContent: "center",
  margin: "auto",
  marginBottom: 20,
});

export const Buttonz = styled(Button)({
  width: 350,
  marginTop: 25,
>>>>>>> e173c3088ea59053f409edc0c686dadfaa7c649e
  borderRadius: 10,
  display: "flex",
  justifyContent: "center",
  margin: "auto",
  marginBottom: 20,
});

export const Links = styled(Link)({
  textDecoration: "none",
});

export const Dividers = styled(Divider)({
  marginTop: 20,
  marginBottom: 17,
});
