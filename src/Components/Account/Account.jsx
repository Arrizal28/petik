import React from "react";
import { Avatar, Box, Fab, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "../../Redux/Actions/authaction";
import { useDispatch } from "react-redux";

function Account() {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div>
      <Box sx={{ m: 1, marginLeft: "auto" }}>
        <Link to="/searchflight" style={{ textDecoration: "none" }}>
          <Tooltip title="Search Flight">
            <Fab color="primary" aria-label="add" size="small" sx={{ m: 1 }}>
              <LocationSearchingIcon />
            </Fab>
          </Tooltip>
        </Link>
        <Link to="/transaction" style={{ textDecoration: "none" }}>
          <Tooltip title="Transaction">
            <Fab color="primary" aria-label="add" size="small" sx={{ m: 1 }}>
              <AirplaneTicketIcon />
            </Fab>
          </Tooltip>
        </Link>
        <Link to="/notification" style={{ textDecoration: "none" }}>
          <Tooltip title="Notification">
            <Fab color="primary" aria-label="add" size="small" sx={{ m: 1 }}>
              <NotificationsActiveIcon />
            </Fab>
          </Tooltip>
        </Link>
        <Link to="/account" style={{ textDecoration: "none" }}>
          <Tooltip title="Account">
            <Fab color="primary" aria-label="add" size="small" sx={{ m: 1 }}>
              <Avatar alt="Remy Sharp" />
            </Fab>
          </Tooltip>
        </Link>
        <Tooltip title="Log Out">
          <Fab
            color="primary"
            aria-label="add"
            size="small"
            sx={{ m: 1 }}
            onClick={handleLogout}
          >
            <LogoutIcon />
          </Fab>
        </Tooltip>
      </Box>
    </div>
  );
}

export default Account;
