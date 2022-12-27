import { Box, Stack, styled, keyframes } from '@mui/system'
import React from 'react'
import { ReactComponent as Logo } from "../../../assets/SS Logo.svg";
import img1 from "../../../assets/Email Confirmation.png"

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

function ConfirmationPage() {
  return (
        <Box
      width="100%"
      height="100vh"
      bgcolor="black"
    //   display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      paddingTop="1rem"
    >
      <Stack alignItems="center" spacing={2} pb={7}>
        <MyComp>
          {/* <Logo height="100%" width="100%" /> */}
          <img src={img1} alt="confirmation"             
          style={{
              height: "100%",
              width: "100%",
            }}></img>
            <div>
                <h2
                style={{
                    color: "white",
                    fontSize: "6vh"
                }}>
                    Thank You!
                </h2>
                <h3
                    style={{
                    color: "white",
                    fontSize: "3.5vh",
                }}>
                    We've sent a link to your inbox
                </h3>
                <button
                    style={{
                    background: "yellow",
                    fontSize: "1.5rem",
                    height: "4rem",
                    border: "none",
                    borderRadius: "5px",
                }}
                >
                     ← Back Home
                </button>
            </div>
        </MyComp>
      </Stack>

      <MyCompSecond>
      </MyCompSecond>
    </Box>
  )
}

export default ConfirmationPage