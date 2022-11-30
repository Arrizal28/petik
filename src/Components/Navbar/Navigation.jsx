import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [value, setValue] = useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 900, display: "flex" }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Home"
        value="recents"
        icon={
          <Link to="/" tstyle={{ textDecoration: "none" }}>
            <HomeIcon />{" "}
          </Link>
        }
      />

      <BottomNavigationAction
        label="Orders"
        value="favorites"
        icon={
          <Link to="/orders" tstyle={{ textDecoration: "none" }}>
            <AirplaneTicketIcon />{" "}
          </Link>
        }
      />

      <BottomNavigationAction
        label="Notifications"
        value="nearby"
        icon={
          <Link to="/notification" tstyle={{ textDecoration: "none" }}>
            <NotificationsActiveIcon />{" "}
          </Link>
        }
      />

      <BottomNavigationAction
        label="Account"
        value="folder"
        icon={
          <Link to="/account" tstyle={{ textDecoration: "none" }}>
            <PersonIcon />{" "}
          </Link>
        }
      />
    </BottomNavigation>
  );
}
