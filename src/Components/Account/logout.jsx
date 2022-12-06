import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/Actions/authaction";
import { Title } from "../../Styled/ComponentUI/Styles";
import { Buttonx } from "../../Styled/MUI/AuthStyles";
// import { Butt, ListItems } from "../../Styled/MUI/BuyerStyle.js.js";

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
        <Buttonx variant="outlined" onClick={handleLogout}>
          <LogoutIcon fontSize="medium" /> <Title>Log Out</Title>
        </Buttonx>
        <Divider />
      </List>
    </div>
  );
}
