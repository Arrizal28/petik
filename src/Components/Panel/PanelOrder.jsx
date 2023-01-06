import React from "react";
import { Divider, Stack } from "@mui/material";
import { CardOrder } from "../../Styled/MUI/TransactionStyle";
import { FontP, Heading } from "../../Styled/ComponentUI/Styles";
import { IconOrder } from "../../Styled/MUI/IconStyled";

function PanelOrder() {
  return (
    <>
      <CardOrder variant="outlined">
        <Stack direction="row" justifyContent="center">
          <Heading>No Orders</Heading>
        </Stack>
        <Divider />
        <Stack direction="row" justifyContent="center">
          <FontP>
            <IconOrder />
          </FontP>
        </Stack>
      </CardOrder>
    </>
  );
}

export default PanelOrder;
