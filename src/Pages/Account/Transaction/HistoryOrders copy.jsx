import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import gambar1 from "../../../assets/images/tidakada.svg";
import { CardPanel, CardTab } from "../../../Styled/MUI/TransactionStyle";

export default function PanelItem() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <CardTab variant="outlined">
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="My Order" value="1" />
              <Tab label="History Orders" value="2" />
            </TabList>
          </CardTab>
        </Box>
        <CardPanel variant="outlined" s>
          <TabPanel value="1">
            <img src={gambar1} alt="gambar1" maxWidth="500px" />
            <p>Anda Belum Melakukan Pembelian Tiket</p>
          </TabPanel>
          <TabPanel value="2">
            <img src={gambar1} alt="gambar1" maxWidth="500px" />
            <p>Belum ada history pembelian</p>
          </TabPanel>
        </CardPanel>
      </TabContext>
    </Box>
  );
}
