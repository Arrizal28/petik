import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { ButtonSet, FieldSet } from "../../Styled/MUI/SettingsStyle";

const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
  marginBottom: 15,
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: "solid 1px dark",
    marginBottom: 15,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "1rem" }} />} {...props} />)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "rgba(255, 255, 255, .05)" : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  marginBottom: 15,
}));

export default function PanelSettings() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/changepassword");
  };

  return (
    <div>
      <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Language</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Notification Settings</Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Mobile Number and Email</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FieldSet id="outlined-basic" label="Email" variant="outlined" size="small" helperText="Please enter your last new email" />
          <FieldSet id="outlined-basic" label="Phone Number" variant="outlined" size="small" helperText="Please enter your new mobile number" />
          <ButtonSet id="outlined-basic" label="Button" variant="contained" size="small">
            Save Change
          </ButtonSet>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Change Password</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ButtonSet id="outlined-basic" label="Button" variant="contained" size="small" onClick={handleSubmit}>
            Change Password
          </ButtonSet>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel5"} onChange={handleChange("panel5")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Security settings</Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
    </div>
  );
}
