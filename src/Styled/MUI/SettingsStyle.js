import { styled } from "@mui/material/styles";
import { Button, TextField } from "@mui/material";

export const FieldSet = styled(TextField)({
  maxWidth: 425,
  marginTop: 20,
  borderRadius: 20,
  display: "flex",
  marginLeft: 10,
});

export const ButtonSet = styled(Button)({
  width: 150,
  marginTop: 20,
  borderRadius: 10,
  display: "flex",
  marginLeft: 10,
});
