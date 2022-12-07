import { styled } from "@mui/material/styles";
import { Button, Card, TextField, Divider, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import { Box, List } from "@mui/material";

export const BoxHome = styled(Box)({
  marginTop: 10,
});

export const BoxPage = styled(Box)({
  flexGrow: 1,
  maxWidth: 1024,
  margin: "auto",
});

export const BoxMenu = styled(Box)({
  margin: 20,
  marginLeft: 30,
});

export const BoxTitle = styled(Box)({
  marginTop: 50,
});

export const CardPage = styled(Card)({
  height: 750,
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  marginTop: 20,
  maxWidth: 360,
  margin: 20,
});

export const CardProfile = styled(Card)({
  height: 100,
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  marginTop: 5,
  maxWidth: 770,
  margin: "auto",
});

export const CardAccount = styled(Card)({
  height: 100,
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  marginTop: 10,
  minWidth: 360,
  margin: 10,
  display: "flex",
});

export const CardMenu = styled(Card)({
  height: 50,
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  marginTop: 10,
  minWidth: 360,
  margin: 10,
  display: "flex",
});

export const CardUser = styled(Card)({
  height: 500,
  justifyContent: "left",
  textAlign: "left",
  alignItems: "left",
  marginTop: 10,
  minWidth: 360,
  margin: 10,
  display: "flex",
});

export const CardBox = styled(Card)({
  height: 700,
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  marginTop: 20,
  maxWidth: 770,
  margin: "auto",
  display: "flex",
  // marginLeft: 10,
});

export const ListPage = styled(List)({
  width: 360,
  maxWidth: 360,
  bgcolor: "background.paper",
  marginTop: 5,
  fontFamily: "sans-serif",
});

export const ListItems = styled(ListItem)({
  margin: 5,
});

export const CardEdit = styled(Card)({
  maxwidth: 425,
  height: 600,
  justifyContent: "center",
  // margin: "auto",
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  borderRadius: 20,
  border: "1px solid #3596e7",
});

export const Cardo = styled(Card)({
  maxWidth: 400,
  height: 620,
  justifyContent: "center",
  margin: 10,
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#3596e7",
  borderRadius: 20,
  marginTop: 50,
  // backgroundImage: `url(${imgbg})`,
});

export const TextFields = styled(TextField)({
  width: 360,
  marginTop: 20,
  borderRadius: 20,
  marginBottom: 20,
  display: "flex",
  margin: 10,
  textAlign: "left",
});
export const Buttons = styled(Button)({
  wdth: 360,
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
  color: "gray",
});

export const Dividers = styled(Divider)({
  margin: 20,
});
