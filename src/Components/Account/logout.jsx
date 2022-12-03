import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Logout() {
  return (
    <div>
      <List component="nav" aria-label="mailbox folders">
        <Divider />
        <ListItem button style={{ margin: 5 }}>
          <LogoutIcon style={{ margin: 5, color: "gray" }} /> <p style={{ fontSize: 20, margin: 5, color: "gray" }}>Log Out</p>
        </ListItem>
        <Divider />
      </List>
    </div>
  );
}
