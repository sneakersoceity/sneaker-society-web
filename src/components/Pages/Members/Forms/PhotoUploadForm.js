import { Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useFormikContext } from "formik";
import { useDropzone } from "react-dropzone";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const dropzoneStyle = {
  width: "100%",
  height: "200px",
  cursor: "pointer",
  border: "1px solid black",
};

export default function PhotoUploadForm(props) {
  const formikProps = useFormikContext();
  useEffect(() => {
    if (formikProps.values.file?.length > 0) {
      setFiles(
        formikProps.values.file.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    }
  }, []);
  const [files, setFiles] = useState([]);

  const remove = (file) => {
    const newFiles = [...files];
    newFiles.splice(newFiles.indexOf(file), 1);
    formikProps.setFieldValue("file", newFiles);
    setFiles(
      newFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };
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

  const thumbs = files.map((file, index) => (
    <ImageListItem key={index}>
      <img
        src={file.preview}
        style={img}
        // Revoke data uri after image is loaded
        onLoad={() => {
          URL.revokeObjectURL(file.preview);
        }}
        onClick={() => {
          remove(file);
        }}
      />
    </ImageListItem>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <>
      <Stack height="100%" pt={3}>
        {/* <Typography variant="h1" align="center" pt={4}>
          Photo Uploads
        </Typography> */}
        <div {...getRootProps({ className: "dropzone", style: dropzoneStyle })}>
          <input {...getInputProps()} />
          <Typography variant="h6" textAlign="center" justifyContent="center">
            Drag 'n' drop some files here, or click to select files
          </Typography>
        </div>
        {/* <ImageList cols={3} rowHeight={164}> */}
        <Stack maxHeight={200} overflow="scroll">
          {thumbs}
        </Stack>
        {/* </ImageList> */}

        <Typography variant="h6" pt={3}>
          Uploaded Files:{" "}
          {formikProps.values.file?.length ? formikProps.values.file.length : 0}
        </Typography>
      </Stack>
    </>
  );
}
