import { styled } from "@mui/material/styles";
import { Box, Card, Container } from "@mui/material";
import imgHeader from "../../assets/images/imgheader.jpg";
import imgHead from "../../assets/images/panel.webp";

export const TopPanel = styled(Card)({
  height: 200,
  justifyContent: "center",
  width: "100%",
});

export const BoxHome = styled(Box)({
  marginTop: 100,
});

export const PanelHead = styled(Box)({
  justifyContent: "center",
  maxWidth: 1500,
  margin: "auto",
  display: "flex",
});

export const PanelBox = styled(Box)({
  justifyContent: "center",
  maxWidth: 1300,
  margin: "auto",
  display: "flex",
});

export const BoxPanel = styled(Box)({
  justifyContent: "center",
  maxWidth: 1300,
  margin: "auto",
  display: "flex",
  backgroundColor: "white",
});

export const BoxHeader = styled(Box)({
  backgroundImage: `url(${imgHeader})`,
  backgroundSize: "cover",
  color: "white",
  display: "flex",
  justifyContent: "center",
  position: "relative",
  width: "100%",
  height: 500,
  margin: "auto",
  borderBottomLeftRadius: 30,
  borderBottomRightRadius: 30,
});

export const BoxCont = styled(Box)({
  justifyContent: "center",
  width: "100%",
  margin: "auto",
  display: "flex",
  backgroundColor: "white",
  borderRadius: 10,
});

export const BoxHead = styled(Box)({
  backgroundImage: `url(${imgHead})`,
  backgroundSize: "cover",
  color: "white",
  display: "flex",
  justifyContent: "center",
  position: "relative",
  width: "100%",
  height: 500,
  margin: "auto",
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
});

export const BoxContainer = styled(Container)({
  maxWidth: 1024,
  // margin: "20px 0px 100px 0px",
  // display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // boxSizing: "border-box",
});
