import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import axios from "axios";
import { API_BASE_URL } from "../../config";
import AdminappBar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0
  }
}));

export default function Updatepatient() {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  function getData() {
    axios.get(API_BASE_URL + "all-patients/").then(res => {
      setdata(res.data);
    });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      <AdminappBar />

      <Container sx={{ mt: 5 }}>
        <Typography variant="h6">Patient List :</Typography>
        <br />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="right">Id</StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Age</StyledTableCell>
                <StyledTableCell align="right">Address</StyledTableCell>
                <StyledTableCell align="right">Mobile</StyledTableCell>
                <StyledTableCell align="right">Disease</StyledTableCell>
                <StyledTableCell align="right">Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((e, index) =>
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row" align="right">
                    {e.patient_id}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {e.patient_name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {e.patient_age}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {e.patient_address}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {e.patient_mobileNo}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {e.patient_disease}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                      variant="contained"
                      sx={{ background: "green" }}
                      onClick={() => {
                        navigate("/editpatient", {
                          state: {
                            id: e._id,
                            patient_id: e.patient_id,
                            patient_name: e.patient_name,
                            patient_age: e.patient_age,
                            patient_address: e.patient_address,
                            patient_mobileNo: e.patient_mobileNo,
                            patient_disease: e.patient_disease
                          }
                        });
                      }}
                    >
                      Update
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
