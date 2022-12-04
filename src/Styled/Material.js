import { styled } from "@mui/material/styles";
import { Button, Card, TextField, Divider, ListItem, AppBar, Paper, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { Box, List } from "@mui/material";
import imgHeader from "../assets/images/imgheader.jpg";

export const TopPanel = styled(Card)({
  height: 110,
  justifyContent: "center",
  width: "100%",
});

export const AppBars = styled(AppBar)({
  justifyContent: "center",
});

export const AppBox = styled(Box)({
  justifyContent: "center",
  margin: "1%",
  Width: 1024,
});

export const AppPaper = styled(Paper)({
  justifyContent: "center",
  margin: "auto",
  maxWidth: 1300,
});

export const BoxHome = styled(Box)({
  marginTop: 100,
});

export const BoxPanel = styled(Box)({
  justifyContent: "center",
  maxWidth: 1300,
  margin: "auto",
  display: "flex",
});

export const BoxHeader = styled(Box)({
  backgroundImage: `url(${imgHeader})`,
  backgroundSize: "cover",
  color: "white",
  display: "flex",
  justifyContent: "center",
  position: "relative",
  width: "100%",
  height: "400px",
  margin: "auto",
  borderBottomLeftRadius: "50px",
  borderBottomRightRadius: "50px",
});

export const BoxContainer = styled(Container)({
  width: "100%",
  margin: "20px 0px 100px 0px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxSizing: "border-box",
});

export const BoxPage = styled(Box)({
  margin: "auto",
  flexGrow: 1,
  maxWidth: 1024,
});

export const BoxMenu = styled(Box)({
  margin: 20,
  marginLeft: 50,
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
  marginLeft: 35,
});

export const Buttons = styled(Button)({
  width: 360,
  marginTop: 20,
  borderRadius: 10,
  display: "flex",
  justifyContent: "center",
  marginLeft: 35,
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
