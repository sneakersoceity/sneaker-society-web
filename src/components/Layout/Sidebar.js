import { Box, Link, Stack, Typography } from "@mui/material";
import { ReactComponent as Logo } from "../../assets/white_logo.svg";
import { IoIosHome } from "react-icons/io";

const SidebarLink = ({ text, Icon }) => {
  return (
    <Box
      sx={{
        width: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box pr={3}>
        <Icon size={40} />
      </Box>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "1.7rem",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "250px",
        height: "100vh",
        backgroundColor: "white",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35));",
        overflow: 'hidden',
      }}
    >
      <Stack justifyContent="center" alignItems="center" width="100%" spacing={3}>
        <Logo width="60%" />

        <SidebarLink text="Home" Icon={IoIosHome} />
      </Stack>
    </Box>
  );
};
