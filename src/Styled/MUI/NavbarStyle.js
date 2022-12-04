import { styled } from "@mui/material/styles";
import { AppBar, Paper } from "@mui/material";
import { Box } from "@mui/material";

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
