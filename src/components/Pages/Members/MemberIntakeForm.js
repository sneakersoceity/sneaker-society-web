import { Grid, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import formInitalValues from "./FormModel/formInitalValues";
import IntakeForm from "./Forms/IntakeForm";
import intakeFormModel from "./FormModel/intakeFormModel";
import validationSchema from "./FormModel/validationSchema";
import ShowIntakeForm from "./Forms/ShoeIntakeForm";
import PhotoUploadForm from "./Forms/PhotoUploadForm";
import axios from "axios";
import { useParams } from "react-router-dom";
import { MEMBER_BY_ID } from "./graphql/MemberInfo";
import { useMutation, useQuery } from "@apollo/client";
import CircularProgress from "@mui/material/CircularProgress";
import { CREATE_CONTRACT } from "./graphql/CreateContract";

const steps = ["Step 1", "Step 2", "Photos", "Submit"];

const { formId, formField } = intakeFormModel;
export default function MemberIntakeForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [formInital, setFormInital] = useState(formInitalValues);
  const currentValidationSchema = validationSchema[activeStep];

  let { memberId } = useParams();

  const { loading, error, data } = useQuery(MEMBER_BY_ID, {
    variables: { id: memberId },
  });

  const [
    createContract,
    { data: contractData, loading: contractLoading, error: contractError },
  ] = useMutation(CREATE_CONTRACT);

  useEffect(() => {
    let authToken = sessionStorage.getItem("token");
    console.log(authToken);
    if (!loading) {
      // console.log(data?.memberById.id);
      formInital.memberId = data?.memberById.id;
    }

    if (error) {
      console.log(error);
    }
    // console.log(loading);
  }, [loading]);

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

    if (values.file) {
      const formData = new FormData();

      const { file } = values;
      // console.log(typeof file);
      const fileArr = Object.keys(file).map((key) => file[key]);
      // console.log(fileArr);
      // console.log(typeof fileArr);
      fileArr.forEach((imageFile) => {
        formData.append("files", imageFile);
      });

      // for (const value of dorm.values()) {
      //   // console.log(value);
      // }

      const res = await axios.post(
        // "https://morning-tor-15921.herokuapp.com/upload",
        "http://localhost:4000/upload",
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
          onUploadProgress: (data) => {
            // console.log(data);
            setProgress(Math.round((100 * data.loaded) / data.total));
          },
        }
      );

      const locations = res.data;
      console.log({
        client: "628a02bfd8ca0133314938da",
        memberId: memberId,
        eta: "",
        stage: "",
        photos: locations,
        price: "",
        reported: false,
        notes: "",
      });

      await createContract({
        variables: {
          data: {
            client: "628a02bfd8ca0133314938da",
            memberId: memberId,
            eta: "",
            stage: "",
            photos: locations,
            price: "",
            reported: false,
            notes: "",
          },
        },
      });
    }
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

  const renderStepContent = (step, setFieldValue) => {
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
            <PhotoUploadForm
              formField={formField}
              setFieldValue={setFieldValue}
            />
          </div>
        );
      case 3:
        return (
          <div>
            <Typography variant="h1" align="center">
              Submit
            </Typography>
          </div>
        );

      default:
        return <div>Not Found</div>;
    }
  };

  if (loading) {
    return (
      <Container
        container
        sx={{
          bgcolor: "#cfe8fc",
          height: "100vh",
          width: "100%",
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          height="100%"
          alignItems="center"
        >
          <CircularProgress size={200} />
        </Stack>
      </Container>
    );
  }

  return (
    <>
      <Container
        container
        sx={{ bgcolor: "#cfe8fc", height: "100vh", width: "100%" }}
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
          <Box>
            <Typography variant="h1" align="center">
              Thank you for Submitting
            </Typography>
            <Button color="secondary" variant="contained" onClick={handleReset}>
              Reset
            </Button>
          </Box>
        ) : (
          <Formik
            initialValues={formInital}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubbmitting, setFieldValue }) => (
              <Form id={formId}>
                {renderStepContent(activeStep, setFieldValue)}
                <Stack direction="row" justifyContent="space-between" pt={3}>
                  {activeStep !== 0 && (
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={handleBackStep}
                    >
                      Back
                    </Button>
                  )}
                  <Button
                    color="secondary"
                    variant="contained"
                    disabled={isSubbmitting}
                    type="submit"
                  >
                    {isLastStep ? "Submit" : "Next"}
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        )}
        <Typography>Progress: {progress}%</Typography>
      </Container>
    </>
  );
}
