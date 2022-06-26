import { Grid, Typography } from "@mui/material";
import InputField from "../components/InputField";
import React from "react";
import PhoneInput from "../components/PhoneInput";
import { useFormikContext } from "formik";
export default function IntakeForm(props) {
  const formikProps = useFormikContext();

  const {
    formField: { firstName, lastName, email, phoneNumber },
  } = props;
  return (
    <>
      <Typography variant="h5" align="center">
        IntakeForm
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputField name={firstName.name} label={firstName.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={lastName.name} label={lastName.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={email.name} label={email.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <PhoneInput
            label={phoneNumber.label}
            name={phoneNumber.name}
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  );
}
