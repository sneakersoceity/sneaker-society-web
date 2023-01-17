import { Typography, Stack } from "@mui/material";
import { ReactComponent as Logo } from "../../../assets/SS Logo.svg";
import {
  Box,
  styled,
  keyframes,
} from "@mui/system";

const fadeInFirst = keyframes`
0% {
//   transform: rotate(-22deg);
opacity: 0;
}
100% {
    // transform: rotate(40deg);
opacity: 1;
}
`;

const fadeInSecond = keyframes`

0%,50% {
//   transform: rotate(-22deg);
opacity: 0;
}
100% {
    // transform: rotate(40deg);
opacity: 1;
}
`;

const MyComp = styled("div")({
    animation: `${fadeInFirst} 1.5s ease-in`,
  });
  const MyCompSecond = styled("div")({
    animation: `${fadeInSecond} 2s ease-in-out`,
  });
export const ComingSoon = () => {
  return (
    <Box
      width="100%"
      height="100vh"
      bgcolor="black"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Stack alignItems="center" spacing={2} pb={7}>
          <MyComp>

        <Logo height="100%" width="500px"/>

        <Typography variant="h5" fontWeight="bold" color="white">
          Welcome to the best online sneaker community!
        </Typography>
          </MyComp>
      </Stack>

      <MyCompSecond>
        {/* <GiConverseShoe color="white" fontSize={150} /> */}
        <Typography
          variant="h3"
          fontWeight={500}
          bgcolor="white"
          px={4}
          py={2}
          borderRadius="24px"
          boxShadow="0px 6px 20px rgba(248, 235, 235, 0.25)"
        >
          Coming Soon... Hello
        </Typography>
      </MyCompSecond>
    </Box>
  );
};
