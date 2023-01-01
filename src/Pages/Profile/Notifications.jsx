import React, { useEffect } from "react";
import { Badge, Grid, Stack } from "@mui/material";
import NavBar from "../../Components/Navbar/Navbar";
import Box from "@mui/material/Box";
import Footer from "../../Components/Footer/Footer";
import TopPanels from "../../Components/Header/TopPanel";
import { CardNotif } from "../../Styled/MUI/TransactionStyle";
import { FontBlue } from "../../Styled/ComponentUI/Styles";
import { io } from "socket.io-client";
import { useSelector, useDispatch } from "react-redux";
import CampaignIcon from "@mui/icons-material/Campaign";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import { notifikasi } from "../../Redux/Actions/userAction";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";

const socket = io(process.env.REACT_APP_SOCKET_API);

function Notifications() {
  const dispatch = useDispatch();
  const { wai } = useSelector((state) => state.auth);
  const { notif } = useSelector((state) => state.user);

  useEffect(() => {
    if (wai?.data?.id) {
      socket.on("connect", () => {});
      socket.emit("LOAD_NOTIFICATIONS", wai?.data?.id);
      socket.on(`NOTIFICATIONS-${wai?.data?.id}`, (data) => {
        dispatch(notifikasi(data));
      });
    }
  }, [dispatch, wai?.data?.id]);

  return (
    <>
      <NavBar socket={socket} wai={wai} />
      <TopPanels />
      <Box
        sx={{
          flexGrow: 1,
          justifyContent: "center",
          maxWidth: 1024,
          margin: "auto",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{ flexGrow: 1, justifyContent: "center" }}
        >
          <Grid item xs={9}>
            <Grid>
              <CardNotif variant="outlined">
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="baseline"
                  style={{ margin: 15 }}
                >
                  <FontBlue>Notifications</FontBlue>
                  <FontBlue
                    style={{ margin: 10, cursor: "pointer" }}
                    onClick={(e) => {
                      e.preventDefault();
                      socket.emit("READ_ALL", wai?.data?.id);
                      socket.on(`NOTIFICATIONS-${wai?.data?.id}`, (data) => {
                        dispatch(notifikasi(data));
                      });
                    }}
                  >
                    Mark All Read
                  </FontBlue>
                </Stack>
              </CardNotif>
            </Grid>
            <List
              sx={{
                width: "100%",
                minWidth: 360,
                bgcolor: "background.paper",
                marginBottom: 15,
              }}
            >
              {notif?.map((item) => {
                return (
                  <>
                    <ListItem alignItems="flex-start" key={item.id}>
                      {item.isRead === false ? (
                        <ListItemAvatar>
                          <Badge color="red" variant="dot">
                            <CampaignIcon color="gray" />
                          </Badge>
                        </ListItemAvatar>
                      ) : (
                        <ListItemAvatar>
                          <CampaignIcon color="gray" />
                        </ListItemAvatar>
                      )}
                      <ListItemText>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {item.message}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </>
                );
              })}
            </List>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default Notifications;
