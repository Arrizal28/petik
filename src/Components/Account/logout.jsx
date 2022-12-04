import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import LogoutIcon from "@mui/icons-material/Logout";
import { Title } from "../../Styled/Styles";
import { ListItems } from "../../Styled/Material";

export default function Logout() {
  return (
    <div>
      <List component="nav" aria-label="mailbox folders">
        <Divider />
        <ListItems button>
          <LogoutIcon fontSize="medium" /> <Title>Log Out</Title>
        </ListItems>
        <Divider />
      </List>
    </div>
  );
}
