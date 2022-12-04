import { styled } from "@mui/material/styles";
import { Button, Card, TextField, Divider, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import { Box, List } from "@mui/material";

export const BoxHome = styled(Box)({
  marginTop: 10,
});

export const BoxPage = styled(Box)({
  margin: "auto",
  flexGrow: 1,
  maxWidth: 1024,
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

export const CardMenu = styled(Card)({
  height: 100,
  justifyContent: "center",
  textAlign: "left",
  alignItems: "center",
  marginTop: 5,
});

export const CardBox = styled(Card)({
  height: 630,
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  marginTop: 20,
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

export const TextFields = styled(TextField)({
  width: 360,
  marginTop: 15,
  borderRadius: 20,
  display: "flex",
  marginLeft: 15,
  textAlign: "left",
});

export const Buttons = styled(Button)({
  width: 360,
  marginTop: 20,
  borderRadius: 10,
  display: "flex",
  justifyContent: "center",
  marginLeft: 15,
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
