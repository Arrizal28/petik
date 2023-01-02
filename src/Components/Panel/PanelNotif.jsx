import React from "react";
import { Divider, Stack } from "@mui/material";
import { CardOrder } from "../../Styled/MUI/TransactionStyle";
import { FontP, Heading } from "../../Styled/ComponentUI/Styles";
import { IconMess } from "../../Styled/MUI/IconStyled";

function PanelNotif() {
  return (
    <>
      <CardOrder variant="outlined">
        <Stack direction="row" justifyContent="center">
          <Heading>Belum Ada Notifikasi</Heading>
        </Stack>
        <Divider />
        <Stack direction="row" justifyContent="center">
          <FontP>
            <IconMess />
          </FontP>
        </Stack>
      </CardOrder>
    </>
  );
}

export default PanelNotif;
