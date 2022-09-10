import { Box, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { Highlights } from "./_components/Highlights/Highlights";
import { LoginForm } from "./_components/LoginForm/LoginForm";
export default function LoginPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Button variant="contained" color="secondary">
        Login
      </Button>
      {/* <Grid container height="100vh">
        <Grid md={6}>
          <Box width="100%" height="100%">
            <LoginForm />
          </Box>
        </Grid>
        <Grid md={6}>
          <Box width="100%" height="100%">
            <Highlights />
          </Box>
        </Grid>
      </Grid> */}
    </Box>
  );
}
