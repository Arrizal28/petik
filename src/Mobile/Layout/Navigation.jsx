import React, { useState } from "react";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PersonIcon from "@mui/icons-material/Person";
import { BottomNavigations, Links } from "../Styles/MobileStyled";

export default function Navigation() {
  const [value, setValue] = useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigations value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Home"
        value="recents"
        icon={
          <Links to="/">
            <HomeIcon />
          </Links>
        }
      />

      <BottomNavigationAction
        label="Orders"
        value="favorites"
        icon={
          <Links to="/m/orders">
            <AirplaneTicketIcon />
          </Links>
        }
      />

      <BottomNavigationAction
        label="Notifications"
        value="nearby"
        icon={
          <Links to="/m/notification">
            <NotificationsActiveIcon />
          </Links>
        }
      />

      <BottomNavigationAction
        label="Account"
        value="folder"
        icon={
          <Links to="/m/account">
            <PersonIcon />
          </Links>
        }
      />
    </BottomNavigations>
  );
}
