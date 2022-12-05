import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/Actions/authAction";
import { Title } from "../../Styled/ComponentUI/Styles";
import { ListItems } from "../../Styled/MUI/AccountStyle.js";

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
        <ListItems button>
          <LogoutIcon fontSize="medium" onClick={handleLogout} />{" "}
          <Title>Log Out</Title>
        </ListItems>
        <Divider />
      </List>
    </div>
  );
}
