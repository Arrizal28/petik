import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["Booking", "Payment", "Finish"];

export default function StepperPay() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper size="small" activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel size="small">{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
