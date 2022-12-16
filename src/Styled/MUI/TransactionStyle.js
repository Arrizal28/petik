import { styled } from "@mui/material/styles";
import { Button, ButtonGroup, Card } from "@mui/material";
import { Link } from "react-router-dom";

export const CardContainer = styled(Card)({
  height: 100,
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  marginTop: 25,
});

export const CardTab = styled(Card)({
  height: 80,
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  marginTop: 5,
});

export const CardPanel = styled(Card)({
  height: 500,
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  marginTop: 30,
  display: "flex",
  marginBottom: 30,
});

export const ButtonGroups = styled(ButtonGroup)({
  flexGrow: 1,
  justifyContent: "center",
  display: "flex",
  marginTop: 10,
});

export const ButtonOrder = styled(Button)({
  flexGrow: 1,
  justifyContent: "center",
  display: "flex",
  height: 25,
});

export const Links = styled(Link)({
  textDecoration: "none",
});
