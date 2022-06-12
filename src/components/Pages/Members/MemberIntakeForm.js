import { Grid, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import React, { useState } from "react";

const steps = ["Step 1", "Step 2", "Step3"];

export default function MemberIntakeForm() {
  const [activeStep, setActiveStep] = useState(0);

  const isLastStep = activeStep === steps.length - 1;

  const handleNextStep = () => setActiveStep(activeStep + 1);

  const handleBackStep = () => {
    if (activeStep !== 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleReset = () => setActiveStep(0);

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div>
            <h1>Step 1</h1>
          </div>
        );
      case 1:
        return (
          <div>
            <h1>Step 2</h1>
          </div>
        );
      case 2:
        return (
          <div>
            <h1>Step 3</h1>
          </div>
        );

      default:
        return <div>Not Found</div>;
    }
  };

  return (
    <div>
      <Container
        container
        sx={{ bgcolor: "#cfe8fc", height: "100vh", widt: "100%" }}
      >
        <h1>Member form</h1>
        {renderStepContent(activeStep)}

        <Stack direction="row" justifyContent="space-between">
          <Button disabled={activeStep === 0} onClick={handleBackStep}>
            Back
          </Button>
          <Button disabled={isLastStep} onClick={handleNextStep}>
            Next
          </Button>
        </Stack>

        {activeStep}
      </Container>
    </div>
  );
}
