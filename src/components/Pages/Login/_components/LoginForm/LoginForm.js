import { Typography, Box, Stack, Button, IconButton } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Divider from "@mui/material/Divider";
import { ReactComponent as Logo } from "../../../../../assets/SS Logo.svg";
import styled from "@emotion/styled";
import { height } from "@mui/system";

const CustomIconButton = styled(IconButton)({
  fontSize: 22,
});
export const LoginForm = () => {
  return (
    <Stack height="100%" bgcolor="black" alignItems="center" spacing={1}>
      <Stack alignItems="center" spacing={2} pt={6}>
        

        <Logo height="80%"  />
          {/* </Box> */}

        <Typography variant="h7" fontWeight="bold" color="white">
          Welcome to the best online sneaker community!
        </Typography>
      </Stack>

      <Box>
        <Typography variant="h6" fontWeight={500} color="white" gutterBottom>
          Sign in with
        </Typography>
        <Stack direction="row" spacing={5} pb={4}>
          <Box
            bgcolor="white"
            justifyContent="center"
            alignItems="center"
            display="flex"
            p={1}
          >
            <CustomIconButton>
              <GoogleIcon fontSize="inherit" />
            </CustomIconButton>
          </Box>
          <Box
            bgcolor="white"
            justifyContent="center"
            alignItems="center"
            display="flex"
            p={1}
          >
            <CustomIconButton>
              <FacebookIcon fontSize="inherit" />
            </CustomIconButton>
          </Box>
          <Box
            bgcolor="white"
            justifyContent="center"
            alignItems="center"
            display="flex"
            p={1}
          >
            <CustomIconButton>
              <TwitterIcon fontSize="inherit" />
            </CustomIconButton>
          </Box>
        </Stack>
      </Box>



      <Divider style={{ width: "80%", background: "white", height: ".1rem"}} />

    </Stack>
  );
};
