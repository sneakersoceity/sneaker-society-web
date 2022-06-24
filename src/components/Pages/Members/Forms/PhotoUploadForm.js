import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { useFormikContext } from "formik";
import { Box } from "@mui/system";

const Input = styled("input")({
  display: "none",
});

export default function PhotoUploadForm(props) {
  const formikProps = useFormikContext();
  const [photos, setPhotos] = useState([]);
  return (
    <Stack>
      <h1>Photo Intake Form</h1>
      <label htmlFor="contained-button-file">
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
          onChange={(e) => {
            formikProps.setFieldValue("file", e.target.files);
          }}
        />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
      {/* <Button
        onClick={() => {
          console.log(formikProps.values);
        }}
      >
        Log Values
      </Button> */}
      <Typography variant="p" pt={3}>
        Uploaded Files: {formikProps.values.file?.length ? formikProps.values.file.length : 0}
      </Typography>
    </Stack>
  );
}
