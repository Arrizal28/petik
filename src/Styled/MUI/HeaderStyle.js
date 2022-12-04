import { styled } from "@mui/material/styles";
import { Box, Card, Container } from "@mui/material";
import imgHeader from "../../assets/images/imgheader.jpg";

export const TopPanel = styled(Card)({
  height: 110,
  justifyContent: "center",
  width: "100%",
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
