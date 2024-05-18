import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AdminappBar from "../Navbar/Navbar";
import { API_BASE_URL } from "../../config";
import axios from "axios";

const Editprofile = () => {
  const location = useLocation();
  const {
    id,
    patient_id,
    patient_name,
    patient_age,
    patient_address,
    patient_mobileNo,
    patient_disease
  } = location.state;

  const [patientid, setpatient_id] = useState(patient_id);
  const [patientname, setpatient_name] = useState(patient_name);
  const [patientage, setpatient_age] = useState(patient_age);
  const [patientaddress, setpatient_address] = useState(patient_address);
  const [patientmobileNo, setpatient_mobileNo] = useState(patient_mobileNo);
  const [patientdisease, setpatient_disease] = useState(patient_disease);
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    if (
      patientid === "" ||
      patientname === "" ||
      patientage === "" ||
      patientaddress === "" ||
      patientmobileNo === "" ||
      patientdisease === ""
    ) {
      alert("please fill all fields");
    } else {
      axios
        .put(API_BASE_URL + "edit-patient", {
          id: id,
          patient_id: patientid,
          patient_name: patientname,
          patient_age: patientage,
          patient_address: patientaddress,
          patient_mobileNo: patientmobileNo,
          patient_disease: patientdisease
        })
        .then(res => {
          console.log(res);
          if (res.data.status == 200) {
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
            EDIT PATIENT
          </Typography>
          <TextField
            fullWidth
            label="Patient Id"
            id="fullWidth"
            value={patientid}
            onChange={e => setpatient_id(e.target.value)}
          />
          <TextField
            fullWidth
            label="Patient Name"
            id="fullWidth"
            value={patientname}
            onChange={e => setpatient_name(e.target.value)}
          />

          <TextField
            fullWidth
            label="Patient Age"
            id="fullWidth"
            value={patientage}
            onChange={e => setpatient_age(e.target.value)}
          />
          <TextField
            fullWidth
            label="Patient Address"
            id="fullWidth"
            value={patientaddress}
            onChange={e => setpatient_address(e.target.value)}
          />
          <TextField
            fullWidth
            label="Patient Mobile"
            id="fullWidth"
            value={patientmobileNo}
            onChange={e => setpatient_mobileNo(e.target.value)}
          />
          <TextField
            fullWidth
            label="Patient Disease"
            id="fullWidth"
            value={patientdisease}
            onChange={e => setpatient_disease(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{ background: "black", ":hover": { background: "darkgreen" } }}
          >
            Update
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Editprofile;
