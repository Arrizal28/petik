import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Card } from "@mui/material";
import gambar1 from "../../../assets/images/tidakada.svg";
import MailIcon from "@mui/icons-material/Mail";
import DraftsIcon from "@mui/icons-material/Drafts";

const stCard = {
  height: 500,
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  marginTop: 30,
};

const stlCard = {
  height: 80,
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  marginTop: 2,
};

export default function PanelNotif() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Card variant="outlined" style={stlCard}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Read Message" value="1" icon={<DraftsIcon />} />
              <Tab label="Unread Message" value="2" icon={<MailIcon />} />
            </TabList>
          </Card>
        </Box>

        <Card variant="outlined" style={stCard}>
          <TabPanel value="1">
            <img src={gambar1} alt="gambar1" width="500px" />
            <p>Anda Belum Melakukan Pembelian Tiket</p>
          </TabPanel>
          <TabPanel value="2">
            <img src={gambar1} alt="gambar1" width="500px" />
            <p>Belum ada history pembelian</p>
          </TabPanel>
        </Card>
      </TabContext>
    </Box>
  );
}
