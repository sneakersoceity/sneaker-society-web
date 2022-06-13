import { Grid, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { Form, Formik } from "formik";
import formInitalValues from "./FormModel/formInitalValues";
import IntakeForm from "./Forms/IntakeForm";
import intakeFormModel from "./FormModel/intakeFormModel";
import validationSchema from "./FormModel/validationSchema";
import ShowIntakeForm from "./Forms/ShoeIntakeForm";

const steps = ["Step 1", "Step 2", "Step3", "Submit"];

const { formId, formField } = intakeFormModel;
export default function MemberIntakeForm() {
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];

  const isLastStep = activeStep === steps.length - 1;

  const handleBackStep = () => {
    if (activeStep !== 0) {
      setActiveStep(activeStep - 1);
    }
  };

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  const _handleSubmit = (values, actions) => {
    if (isLastStep) {
      _submitForm(values, actions);
    }
    setActiveStep(activeStep + 1);
  };
  const handleReset = () => setActiveStep(0);

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <IntakeForm formField={formField} />;
      case 1:
        return (
          <div>
            <ShowIntakeForm formField={formField} />
          </div>
        );
      case 2:
        return (
          <div>
            <h1>Step 3</h1>
          </div>
        );
      case 3:
        return (
          <div>
            <h1>Step 4</h1>
          </div>
        );

      default:
        return <div>Not Found</div>;
    }
  };

  return (
    <>
      <Container
        container
        sx={{ bgcolor: "#cfe8fc", height: "100vh", widt: "100%" }}
      >
        <Typography variant="h1" align="center">
          Member form
        </Typography>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === steps.length ? (
          <>
            <Typography variant="h3" align="center">
              Last Page Yo
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </>
        ) : (
          <Formik
            initialValues={formInitalValues}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubbmitting }) => (
              <Form id={formId}>
                {renderStepContent(activeStep)}
                <Stack direction="row" justifyContent="space-between">
                  {activeStep !== 0 && (
                    <Button onClick={handleBackStep}>Back</Button>
                  )}
                  <Button disabled={isSubbmitting} type="submit">
                    {isLastStep ? "Submit" : "Next"}
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        )}
      </Container>
    </>
  );
}
