import { Box } from "@mui/system";
import React from "react";
import Mysociety from "../Pages/Mysociety/Mysociety";
import { Sidebar } from "./Sidebar";

export default function Layout() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: "250px",
          position: "absolute",
        }}
      >
        <Sidebar />
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          width: "calc(100% - 250px)",
          float: "right",
          height: "100%",
        }}
      >
        <Mysociety />
      </Box>
    </Box>
  );
}
