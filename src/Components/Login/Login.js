import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeappBar from "../Navbar/Homenavbar";
import axios from "axios";
import { API_BASE_URL } from "../../config";
import { useDispatch } from "react-redux";
import { getUserData } from "../Reducers/User";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("please enter email and password");
    } else {
      axios
        .get(API_BASE_URL + "userlogin/", {
          params: {
            email: email,
            password: password
          }
        })
        .then(res => {
          console.log(res);
          try {
            if (res.data.status == 200) {
              console.log(res.data.result);
              dispatch(
                getUserData({
                  id: res.data.result[0]._id,
                  user_name: res.data.result[0].user_name,
                  user_image: res.data.result[0].user_image,
                  user_age: res.data.result[0].user_age,
                  user_mobileNo: res.data.result[0].user_mobileNo,
                  user_email: res.data.result[0].user_email,
                  user_password: res.data.result[0].user_password
                })
              );
              navigate("/home");
            } else {
              alert("invalid email or password");
            }
          } catch (error) {
            alert(error);
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
            USER LOGIN
          </Typography>
          <TextField
            fullWidth
            label="Email"
            id="fullWidth"
            value={email}
            onChange={e => setemail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            id="fullWidth"
            value={password}
            onChange={e => setpassword(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{ background: "black", ":hover": { background: "darkgreen" } }}
          >
            Login
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Login;
