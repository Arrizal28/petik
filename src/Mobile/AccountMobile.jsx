import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ReceiptIcon from "@mui/icons-material/Receipt";
import Divider from "@mui/material/Divider";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Avatar, Card } from "@mui/material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import QuizIcon from "@mui/icons-material/Quiz";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import LogoutIcon from "@mui/icons-material/Logout";
import StarsIcon from "@mui/icons-material/Stars";
import "./mobile.css";

const style = {
  maxWidth: 425,
  bgcolor: "background.paper",
  marginTop: 5,
  fontFamily: "sans-serif",
  justifyContent: "center",
  textAlign: "center",
  margin: 3,
};

export default function AccountMobile() {
  return (
    <div className="accountmobile">
      <Card style={{ margin: "10", justifyContent: "center" }}>
        <div className="cardaccounts">
          <h3 style={{ color: "white" }}>Account</h3>
        </div>
        <Card style={{ backgroundColor: "primary", justifyContent: "center", textAlign: "center" }}>
          <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem button style={{ margin: 5 }}>
              <Avatar />
              <h2 style={{ margin: 5, color: "#3596e7" }}>User Name</h2>
            </ListItem>
            <Divider />
            <ListItem button style={{ margin: 5 }}>
              <PersonOutlineIcon style={{ margin: 5, color: "gray" }} /> Profil
            </ListItem>
            <Divider />
            <ListItem button style={{ margin: 5 }}>
              <ReceiptIcon style={{ margin: 5, color: "gray" }} /> My Orders
            </ListItem>
            <Divider />
            <ListItem button style={{ margin: 5 }}>
              <CurrencyExchangeIcon style={{ margin: 5, color: "gray" }} /> Refunds
            </ListItem>
            <Divider />
            <ListItem button style={{ margin: 5 }}>
              <ForwardToInboxIcon style={{ margin: 5, color: "gray" }} /> Inbox
            </ListItem>
            <Divider />
            <ListItem button style={{ margin: 5 }}>
              <StarsIcon style={{ margin: 5, color: "gray" }} /> Rewards
            </ListItem>
            <Divider />
            <ListItem button style={{ margin: 5 }}>
              <QuizIcon style={{ margin: 5, color: "gray" }} /> Help Center
            </ListItem>
            <Divider />
            <ListItem button style={{ margin: 5 }}>
              <SettingsApplicationsIcon style={{ margin: 5, color: "gray" }} /> Settings
            </ListItem>
            <Divider />
            <ListItem button style={{ margin: 5 }}>
              <LogoutIcon style={{ margin: 5, color: "gray" }} /> Log Out
            </ListItem>
            <Divider />
          </List>
        </Card>
      </Card>
    </div>
  );
}
