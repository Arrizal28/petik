import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, TextField } from "@mui/material";

const sAccordian = {
  heigth: 200,
  marginTop: 20,
};

const sText = {
  heigth: 200,
  margin: 10,
};

const sTextfield = {
  width: 425,
  marginTop: 20,
  borderRadius: 20,
  display: "flex",
  marginLeft: 10,
};

const sButton = {
  width: 425,
  marginTop: 20,
  borderRadius: 20,
  display: "flex",
  marginLeft: 10,
};

export default function PaneSettings() {
  return (
    <div>
      <Accordion style={sAccordian}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <h5 style={sText}>Language</h5>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={sAccordian}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <h5 style={sText}>Notification Settings</h5>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={sAccordian}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <h5 style={sText}>Mobile Number and Email</h5>
        </AccordionSummary>
        <AccordionDetails>
          <TextField style={sTextfield} id="outlined-basic" label="Email" variant="outlined" size="medium" helperText="Please enter your last new email" />
          <TextField style={sTextfield} id="outlined-basic" label="Phone Number" variant="outlined" size="medium" helperText="Please enter your new mobile number" />
          <Button style={sButton} id="outlined-basic" label="Button" variant="contained" size="medium">
            Save Change
          </Button>
        </AccordionDetails>
      </Accordion>
      <Accordion style={sAccordian}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <h5 style={sText}>Change Password</h5>
        </AccordionSummary>
        <AccordionDetails>
          <TextField style={sTextfield} id="outlined-basic" label="Current Password" variant="outlined" size="medium" helperText="Please enter your current password" />
          <TextField style={sTextfield} id="outlined-basic" label="New Password" variant="outlined" size="medium" helperText="Please enter your new password" />
          <Button style={sButton} id="outlined-basic" label="Button" variant="contained" size="medium">
            Save Change
          </Button>
        </AccordionDetails>
      </Accordion>
      <Accordion style={sAccordian}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <h5 style={sText}>Security Settings</h5>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
