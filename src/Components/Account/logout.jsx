import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/Actions/authaction";

export default function Logout() {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };
  return (
    <div>
      <List component="nav" aria-label="mailbox folders">
        <Divider />
        <ListItem button style={{ margin: 5 }}>
          <LogoutIcon style={{ margin: 5, color: "gray" }} />{" "}
          <p
            style={{ fontSize: 20, margin: 5, color: "gray" }}
            onClick={handleLogout}
          >
            Log Out
          </p>
        </ListItem>
        <Divider />
      </List>
    </div>
  );
}
