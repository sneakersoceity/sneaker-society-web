import { Typography, Stack, Alert, AlertTitle } from "@mui/material";
import { ReactComponent as Logo } from "../../../assets/SS Logo.svg";
import { Box, styled, keyframes } from "@mui/system";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_EMAIL } from "../../../graphql/addEmail";

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
  const [form, setForm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [createEmail] = useMutation(CREATE_EMAIL);

  // will update the name and value of the email
  const updateField = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  // async function createNewEmail() {
  //   const res = await createEmail({
  //     variables: {
  //       data: {
  //         email: "",
  //       },
  //     },
  //   });
  //   return res;
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    // setIsLoading(true);
    setError("");
    setSuccess("");
    fetch(createEmail, {
      variables: {
        data: {
          email: "",
        },
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        if (data.error) {
          setError(data.error);
        } else {
          setSuccess("Email Successfully Entered");
        }
      });
  };

  // how we will submit to the backend
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

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
          <Logo height="100%" width="100%" />

          {/* <Typography variant="h5" fontWeight="bold" color="white">
            Welcome to the best online sneaker community!
          </Typography> */}
        </MyComp>
      </Stack>

      <MyCompSecond>
        {/* <GiConverseShoe color="white" fontSize={150} /> */}
        {/* <Typography
          variant="h3"
          fontWeight={500}
          bgcolor="white"
          px={4}
          py={2}
          borderRadius="24px"
          boxShadow="0px 6px 20px rgba(248, 235, 235, 0.25)"
        > */}
        {/* <form onSubmit={handleSubmit}>
            {error && (
              <Alert severity="error">
                <AlertTitle /> {error}
              </Alert>
            )}
            {success && (
              <Alert status="success">
                <AlertTitle /> {success}
              </Alert>
            )}
            <div
              style={{
                position: "absolute",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "500px",
                textAlign: "center",
                padding: "40px",
              }}
            >
              <input
                style={{
                  fontSize: "18px",
                  width: "60%",
                  border: "none",
                  borderRadius: "5px",
                  padding: "15px 20px",
                  marginRight: "10px",
                  outline: "none",
                  background: "white",
                }}
                type="email"
                placeholder="Enter your email address"
                required
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
              ></input>
              {/* <p className="text-danger p-2 m-2">{error}</p> */}
        {/* <button
                style={{
                  color: "black",
                  fontSize: "18px",
                  border: "none",
                  borderRadius: "5px",
                  padding: "15px 25px",
                  background: "yellow",
                }}
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form> */}
        {/* </Typography> */}
        <div style={{ display: "flex", height: "3rem" }}>
          <input
            style={{
              border: "none",
              borderRadius: "4px",
              width: "17rem",
              fontSize: "1.4rem",
            }}
            placeholder="Enter your email address"
            required
          ></input>
          <button
            style={{
              background: "yellow",
              border: "none",
              borderRadius: "4px",
              marginLeft: "0.5rem",
              fontSize: "1.1rem",
            }}
          >
            Sign Up
          </button>
        </div>
      </MyCompSecond>
    </Box>
  );
};
