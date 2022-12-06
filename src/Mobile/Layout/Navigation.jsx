import React, { useState } from "react";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import PersonIcon from "@mui/icons-material/Person";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
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
        value="home"
        icon={
          <Links to="/">
            <HomeIcon />
          </Links>
        }
      />
      <BottomNavigationAction
        label="Orders"
        value="order"
        icon={
          <Links to="/orders">
            <AirplaneTicketIcon />
          </Links>
        }
      />
      <BottomNavigationAction
        label="Search"
        value="search"
        icon={
          <Links to="/searchflight">
            <LocationSearchingIcon />
          </Links>
        }
      />

      <BottomNavigationAction
        label="Account"
        value="account"
        icon={
          <Links to="/account">
            <PersonIcon />
          </Links>
        }
      />
    </BottomNavigations>
  );
}
