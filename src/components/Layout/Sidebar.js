import { Badge, Box, Link, Stack, Typography } from "@mui/material";
import { ReactComponent as SSLogo } from "../../assets/white_logo.svg";
import { GiConverseShoe } from "react-icons/gi";
import { GrGroup } from "react-icons/gr";
import { BsSafe2 } from "react-icons/bs";
import { AiOutlineCompass } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { MdOutlineMessage } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const SidebarLink = ({ text, Icon, notificationNumber, onClick }) => {
  return (
    <Box
      sx={{
        width: "70%",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <Box pr={2}>
        {Icon ? (
          <Badge badgeContent={notificationNumber} color="secondary" max={20}>
            <Icon size={30} />
          </Badge>
        ) : null}
      </Box>
      <Typography
        sx={{
          fontWeight: "500",
          fontSize: "1.5rem",
          transition: "box-shadow 200ms",
          ":hover": {
            boxShadow: "inset 0 -3px 0 0  #FDE400",
          },
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export const Sidebar = () => {
  let navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        sessionStorage.removeItem("token");
      })
      .catch((e) => {
        console.log(e);
      });
    navigate("/login");
  };

  return (
    <Box
      sx={{
        width: "250px",
        height: "100vh",
        backgroundColor: "white",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35));",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack
        justifyContent="flex-start"
        alignItems="center"
        width="100%"
        height="100%"
        spacing={3}
        pt={2}
      >
        <SSLogo width="60%" />

        <SidebarLink text="My Society" Icon={GiConverseShoe} />
        <SidebarLink text="Explore" Icon={AiOutlineCompass} />
        <SidebarLink text="Groups" notificationNumber={2} Icon={GrGroup} />
        <SidebarLink text="The Vault" Icon={BsSafe2} />
        <SidebarLink
          text="Messages"
          notificationNumber={17}
          Icon={MdOutlineMessage}
        />
      </Stack>

      <Stack
        sx={{
          justifyContent: "center",
          alignContent: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pb: 2,
          }}
        >
          <SidebarLink
            text="Settings"
            Icon={FiSettings}
            onClick={handleLogout}
          />
        </Box>
      </Stack>
    </Box>
  );
};
