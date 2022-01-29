import { Typography, Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  auth,
  logout,
  signIn,
  signInWithGoogle,
  whoIsIn,
} from "../../../auth/firebase";
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
      {/* <Typography>Login Page</Typography> */}
    </Box>

    // <div className="login">
    //   <div className="login__container">
    //     <input
    //       type="text"
    //       className="login__textBox"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       placeholder="E-mail Address"
    //     />
    //     <input
    //       type="password"
    //       className="login__textBox"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       placeholder="Password"
    //     />
    //     <button className="login__btn" onClick={() => signIn(email, password)}>
    //       Login
    //     </button>
    //     <button className="login__btn" onClick={() => signInWithGoogle()}>
    //       Login Google
    //     </button>
    //     <button className="login__btn" onClick={() => whoIsIn()}>
    //       Curernt User
    //     </button>
    //     <button className="login__btn" onClick={() => logout()}>
    //       Logout
    //     </button>
    //   </div>
    // </div>
  );
}
