import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PersonIcon from "@mui/icons-material/Person";

export default function Navigation() {
  const [value, setValue] = useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 900, display: "flex" }} value={value} onChange={handleChange}>
      <BottomNavigationAction label="Home" value="recents" icon={<HomeIcon />} />
      <BottomNavigationAction label="Orders" value="favorites" icon={<AirplaneTicketIcon />} />
      <BottomNavigationAction label="Notifications" value="nearby" icon={<NotificationsActiveIcon />} />
      <BottomNavigationAction label="Account" value="folder" icon={<PersonIcon />} />
    </BottomNavigation>
  );
}
