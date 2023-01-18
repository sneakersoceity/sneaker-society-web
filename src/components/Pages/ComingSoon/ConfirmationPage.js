import { Box, Stack, styled, keyframes } from "@mui/system";
import React from "react";
import { ReactComponent as Logo } from "../../../assets/SS Logo.svg";
// import img1 from "../../../assets/Email Confirmation.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareTwitter,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../../stylesheets/ConfirmationPage.module.css";

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
      paddingTop="4rem"
    >
      <Stack alignItems="center" spacing={2} pb={7}>
        <MyComp>
          <Logo height="50%" width="50%" />
          {/* <img src={img1} alt="confirmation" 
          className={styles.img1}>
          </img> */}
          <div>
            <h2 className={styles.header}>Thank You!</h2>
            <h3 className={styles.text}>
              We've added you to our list, be sure to check your inbox.
            </h3>
            <div className={styles.socialMediaLogo}>
              <div className={styles.designLogo}>
                <a href="">
                  <FontAwesomeIcon
                    icon={faSquareFacebook}
                    inverse
                    className={styles.logo}
                  />
                </a>
                <a href="">
                  <FontAwesomeIcon
                    icon={faSquareTwitter}
                    inverse
                    className={styles.logo}
                  />
                </a>
                <a href="">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    inverse
                    className={styles.logo}
                  />
                </a>
                <a href="">
                  <FontAwesomeIcon
                    icon={faTiktok}
                    inverse
                    className={styles.logo}
                  />
                </a>
              </div>
            </div>
          </div>
        </MyComp>
      </Stack>

      <MyCompSecond></MyCompSecond>
    </Box>
  );
}

export default ConfirmationPage;
