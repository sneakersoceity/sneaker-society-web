import { Box, Typography, Grid, Stack } from "@mui/material";
import { Container, fontWeight, height } from "@mui/system";
import { Sidebar } from "../../../Layout/Sidebar";
import React from "react";

const StatusCard = ({ title, amount }) => (
  <Box
    bgcolor="white"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "260px",
    }}
  >
    <Typography
      style={{
        fontSize: "40px",
        fontWeight: "bold",
      }}
      color="black"
    >
      {title}
    </Typography>
    <Typography
      style={{
        fontSize: "100px",
        fontWeight: "bold",
      }}
      color="black"
    >
      {amount}
    </Typography>
  </Box>
);

const TestBox400 = () => (
  <Box bgcolor="green">
    <Typography variant="h4" color="white" height="400px">
      New
    </Typography>
  </Box>
);

const Percent = ({ amount }) => (
  <Box bgcolor={amount > 0 ? "#7AFF64" : "#FF8D8D"} px={3} borderRadius="50px">
    <Typography
      style={{
        fontSize: "40px",
        fontWeight: "bold",
      }}
      color={amount > 0 ? "#117C00" : "#840F09"}
    >
      {amount > 0 ? `+ ${amount}` : amount}%
    </Typography>
  </Box>
);

const CardWithPercent = ({ title, amount, percent }) => (
  <Box
    bgcolor="white"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly",
      height: "400px",
    }}
  >
    <Typography
      style={{
        fontSize: "40px",
        fontWeight: "bold",
      }}
      color="black"
    >
      {title}
    </Typography>
    <Typography
      style={{
        fontSize: "100px",
        fontWeight: "bold",
      }}
      color="black"
    >
      {amount}
    </Typography>
    <Percent amount={percent} />
  </Box>
);

const Profit = () => (
  <Box
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "185px",
    }}
    bgcolor="white"
  >
    <Typography
      style={{
        fontSize: "40px",
        fontWeight: "bold",
      }}
      color="black"
    >
      Profit
    </Typography>
    <Typography
      style={{
        fontSize: "64px",
        fontWeight: "bold",
      }}
      color="black"
    >
      $111.33
    </Typography>
  </Box>
);

const AVGTime = () => (
  <Box
    mt={2}
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "185px",
    }}
    bgcolor="white"
  >
    <Typography
      style={{
        fontSize: "40px",
        fontWeight: "bold",
      }}
      color="black"
    >
      AVG Time
    </Typography>
    <Typography
      style={{
        fontSize: "40px",
        fontWeight: "bold",
      }}
      color="black"
    >
      5 Days
    </Typography>
  </Box>
);

const MemberDashboard = () => {

  return (
    <>
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
        <Container>
          {/* <Typography variant="h1" color="white">
            Member Dashboard
          </Typography> */}
          <Stack
            direction="column"
            justifyContent="space-between"
            height="100%"
            alignItems="center"
          >
            <Grid container spacing={3} pt={4}>
              <Grid item xs={12} md={4}>
                <StatusCard title="Not Started" amount={5} />
              </Grid>
              <Grid item xs={12} md={4}>
                <StatusCard title="Started" amount={12} />
              </Grid>
              <Grid item xs={12} md={4}>
                <StatusCard title="Finished" amount={23} />
              </Grid>
            </Grid>

            <Grid container spacing={3} pt={4}>
              <Grid item xs={12} md={4}>
                <Stack
                  direction="column"
                  justifyContent="space-between"
                  height="100%"
                >
                  <Profit />
                  <AVGTime />
                </Stack>
              </Grid>
              <Grid item xs={12} md={4}>
                <CardWithPercent
                  title="New Clients"
                  amount={23}
                  percent={2.7}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <CardWithPercent title="Requests" amount={4} percent={-6} />
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default MemberDashboard;
