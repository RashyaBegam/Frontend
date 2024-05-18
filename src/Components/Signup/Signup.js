import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../config";
import axios from "axios";
import HomeappBar from "../Navbar/Homenavbar";

const Signup = () => {
  const [user_name, setuser_name] = useState("");
  const [user_image, setuser_image] = useState("");
  const [user_age, setuser_age] = useState("");
  const [user_mobileNo, setuser_mobileNo] = useState("");
  const [user_email, setuser_email] = useState("");
  const [user_password, setuser_password] = useState("");
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    if (
      user_name === "" ||
      user_image === "" ||
      user_age === "" ||
      user_mobileNo === "" ||
      user_email === "" ||
      user_password === ""
    ) {
      alert("please fill all fields");
    } else {
      axios
        .post(API_BASE_URL + "create-account", {
          user_name: user_name,
          user_image: user_image,
          user_age: user_age,
          user_mobileNo: user_mobileNo,
          user_email: user_email,
          user_password: user_password
        })
        .then(res => {
          console.log(res);
          if (res.status == 201) {
            alert(res.data.message);
            navigate("/login");
          }
        });
    }
  };
  return (
    <Box>
      <HomeappBar />
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
            CREATE ACCOUNT
          </Typography>
          <TextField
            fullWidth
            label="Username"
            id="fullWidth"
            value={user_name}
            onChange={e => setuser_name(e.target.value)}
          />
          <TextField
            fullWidth
            label="Profile Url"
            id="fullWidth"
            value={user_image}
            onChange={e => setuser_image(e.target.value)}
          />

          <TextField
            fullWidth
            label="User Age"
            id="fullWidth"
            value={user_age}
            onChange={e => setuser_age(e.target.value)}
          />
          <TextField
            fullWidth
            label="User Mobile"
            id="fullWidth"
            value={user_mobileNo}
            onChange={e => setuser_mobileNo(e.target.value)}
          />
          <TextField
            fullWidth
            label="Email"
            id="fullWidth"
            value={user_email}
            onChange={e => setuser_email(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            id="fullWidth"
            value={user_password}
            onChange={e => setuser_password(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{ background: "black", ":hover": { background: "darkgreen" } }}
          >
            Create Account
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Signup;
