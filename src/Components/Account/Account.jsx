import React from "react";
import { Avatar, Box, Fab, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";

function Account() {
  return (
    <div>
      <Box sx={{ m: 1, marginLeft: "auto" }}>
        <Link to="/orders" style={{ textDecoration: "none" }}>
          <Fab color="primary" aria-label="add" size="small" sx={{ m: 1 }}>
            <Tooltip title="My Orders">
              <AirplaneTicketIcon />
            </Tooltip>
          </Fab>
        </Link>
        <Link to="/notification" style={{ textDecoration: "none" }}>
          <Fab color="primary" aria-label="add" size="small" sx={{ m: 1 }}>
            <Tooltip title="Notification">
              <NotificationsActiveIcon />
            </Tooltip>
          </Fab>
        </Link>
        <Link to="/account" style={{ textDecoration: "none" }}>
          <Fab color="primary" aria-label="add" size="small" sx={{ m: 1 }}>
            <Tooltip title="Account">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Tooltip>
          </Fab>
        </Link>
      </Box>
    </div>
  );
}

export default Account;
