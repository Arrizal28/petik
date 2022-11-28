import React, { useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Stack } from "@mui/material";

export default function MenuNav() {
  const [state, setState] = useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon onClick={toggleDrawer(anchor, true)} />
          <SwipeableDrawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} onOpen={toggleDrawer(anchor, true)}>
            <Stack spacing={3} direction="row" style={{ marginTop: 10, margin: "auto" }}>
              <Button variant="outlined" style={{ margin: 20 }}>
                Sign In
              </Button>
              <Button variant="contained" style={{ margin: 20 }}>
                Sign Up
              </Button>
            </Stack>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
