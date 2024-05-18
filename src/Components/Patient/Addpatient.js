import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminappBar from "../Navbar/Navbar";
import { API_BASE_URL } from "../../config";
import axios from "axios";

const Addpatient = () => {
  const [patient_id, setpatient_id] = useState("");
  const [patient_name, setpatient_name] = useState("");
  const [patient_age, setpatient_age] = useState("");
  const [patient_address, setpatient_address] = useState("");
  const [patient_mobileNo, setpatient_mobileNo] = useState("");
  const [patient_disease, setpatient_disease] = useState("");
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    if (
      patient_id === "" ||
      patient_name === "" ||
      patient_age === "" ||
      patient_address === "" ||
      patient_mobileNo === "" ||
      patient_disease === ""
    ) {
      alert("please fill all fields");
    } else {
      axios
        .post(API_BASE_URL + "add-patient", {
          patient_id: patient_id,
          patient_name: patient_name,
          patient_age: patient_age,
          patient_address: patient_address,
          patient_mobileNo: patient_mobileNo,
          patient_disease: patient_disease
        })
        .then(res => {
          console.log(res);
          if (res.status == 201) {
            alert(res.data.message);
            navigate("/viewpatient");
          }
        });
    }
  };
  return (
    <Box>
      <AdminappBar />
      <Container
        sx={{
          width: { lg: "50%", md: "50%", sm: "80%", xs: "auto" },
          background: "whitesmoke",
          paddingBlock: "30px",
          mt: 5
        }}
      >
        <Stack spacing={4}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            ADD PATIENT
          </Typography>
          <TextField
            fullWidth
            label="Patient Id"
            id="fullWidth"
            value={patient_id}
            onChange={e => setpatient_id(e.target.value)}
          />
          <TextField
            fullWidth
            label="Patient Name"
            id="fullWidth"
            value={patient_name}
            onChange={e => setpatient_name(e.target.value)}
          />

          <TextField
            fullWidth
            label="Patient Age"
            id="fullWidth"
            value={patient_age}
            onChange={e => setpatient_age(e.target.value)}
          />
          <TextField
            fullWidth
            label="Patient Address"
            id="fullWidth"
            value={patient_address}
            onChange={e => setpatient_address(e.target.value)}
          />
          <TextField
            fullWidth
            label="Patient Mobile"
            id="fullWidth"
            value={patient_mobileNo}
            onChange={e => setpatient_mobileNo(e.target.value)}
          />
          <TextField
            fullWidth
            label="Patient Disease"
            id="fullWidth"
            value={patient_disease}
            onChange={e => setpatient_disease(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{ background: "black", ":hover": { background: "darkgreen" } }}
          >
            Save
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Addpatient;
