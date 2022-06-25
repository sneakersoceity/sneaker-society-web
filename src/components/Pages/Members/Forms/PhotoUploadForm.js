import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useFormikContext } from "formik";
import { Box } from "@mui/system";
import { useDropzone } from "react-dropzone";

const Input = styled("input")({
  display: "none",
});

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

export default function PhotoUploadForm(props) {
  const [files, setFiles] = useState([]);
  const formikProps = useFormikContext();

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      formikProps.setFieldValue("file", acceptedFiles);
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <Stack>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
      {/* <h1>Photo Intake Form</h1>
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
      </label> */}
      {/* <Button
        onClick={() => {
          console.log(formikProps.values);
        }}
      >
        Log Values
      </Button> */}
      <Typography variant="p" pt={3}>
        Uploaded Files:{" "}
        {formikProps.values.file?.length ? formikProps.values.file.length : 0}
      </Typography>
    </Stack>
  );
}
