import { Box } from "@mui/system";
import React from "react";
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
          backgroundColor: "black",
          width: "calc(100% - 250px)",
          float: "right",
          height: "100%",
        }}
      >
        hello
      </Box>
    </Box>
  );
}
