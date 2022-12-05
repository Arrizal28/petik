import { styled } from "@mui/material/styles";
import { Card } from "@mui/material";
import { Box } from "@mui/material";

export const Cards = styled(Card)({
  justifyContent: "center",
  display: "flex",
  margin: "auto",
  top: "auto",
  maxWidth: 1024,
  height: 500,
  marginTop: 50,
});

export const Boxs = styled(Box)({
  justifyContent: "center",
  margin: "auto",
  maxWidth: 1300,
});

export const CardBox = styled(Box)({
  justifyContent: "center",
  margin: 20,
});
