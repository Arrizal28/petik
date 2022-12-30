import React from "react";
import { Divider, Stack } from "@mui/material";
import { CardOrder } from "../../Styled/MUI/TransactionStyle";
import { FontP, Heading } from "../../Styled/ComponentUI/Styles";

function ItemNotFound() {
  return (
    <>
      <CardOrder variant="outlined">
        <Stack direction="row" justifyContent="center">
          <Heading>Flight Result</Heading>
        </Stack>
        <Divider />
        <Stack direction="row" justifyContent="center">
          <FontP>The flight schedule you are looking for was not found.</FontP>
        </Stack>
      </CardOrder>
    </>
  );
}

export default ItemNotFound;
