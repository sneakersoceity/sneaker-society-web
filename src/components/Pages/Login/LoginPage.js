import { Box, Grid } from "@mui/material";
import React, {  useState } from "react";
import { Highlights } from "./_components/Highlights/Highlights";
import { LoginForm } from "./_components/LoginForm/LoginForm";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container height="100vh">
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
      </Grid>
    </Box>
  );
}
