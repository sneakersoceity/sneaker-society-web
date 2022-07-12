import { useQuery } from "@apollo/client";
import {
  Button,
  TableContainer,
  TableCell,
  TableRow,
  TableHead,
  Table,
  TableBody,
} from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { MEMBER_CONTRACTS } from "./graphql/MemberContracts";

export default function Dashboard() {
  const [rows, setRows] = useState([]);

  const { loading, error, data } = useQuery(MEMBER_CONTRACTS, {
    variables: { id: "62ca2ef5a15134e081a969d7" },
  });

  useEffect(() => {
    if (!loading) {
      const testData = data.memberById.contracts;
      const testRows = testData.map((contract) => {
        return {
          id: contract.id,
          client: contract.client.firstName,
          date: moment(parseInt(contract.updatedAt)).format("MMMM Do YYYY"),
          //   time: moment(parseInt(contract.updatedAt)).format("h:mm:ss a"),
          time: moment(parseInt(contract.updatedAt)).startOf("min").fromNow(),
        };
      });

      setRows(testRows);
    }
  }, [loading]);

  return (
    <div>
      {/* <p>Dashboard</p> */}
      {/* <Button
        color="secondary"
        variant="contained"
        onClick={handleContractLoad}
      >
        Load Data
      </Button> */}
      <TableContainer>
        {" "}
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Created</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="center">{row.client}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">{row.time}</TableCell>
                <TableCell align="center">
                  <Button color="secondary" variant="contained">
                    View More Info
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
