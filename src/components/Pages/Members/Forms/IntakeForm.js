import { Grid, Typography } from "@mui/material";
import InputField from "../components/InputField";
import React from "react";

export default function IntakeForm(props) {
  const {
    formField: { firstName, lastName, email },
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
      </Grid>
    </>
  );
}
