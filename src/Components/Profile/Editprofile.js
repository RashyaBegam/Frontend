import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../config";
import axios from "axios";
import UserappBar from "../Navbar/Usernavbar";
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";

const Profile = () => {
  const user = useSelector(state => state.user.value);
  const [id, setid] = useState(user.id);
  const [user_name, setuser_name] = useState(user.user_name);
  const [user_image, setuser_image] = useState(user.user_image);
  const [user_age, setuser_age] = useState(user.user_age);
  const [user_mobileNo, setuser_mobileNo] = useState(user.user_mobileNo);
  const [user_email, setuser_email] = useState(user.user_email);
  const [user_password, setuser_password] = useState(user.user_password);
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
        .put(API_BASE_URL + "edit-profile", {
          id: id,
          user_name: user_name,
          user_image: user_image,
          user_age: user_age,
          user_mobileNo: user_mobileNo,
          user_email: user_email,
          user_password: user_password
        })
        .then(res => {
          console.log(res);
          if (res.data.status == 200) {
            alert(res.data.message);
          }
        });
    }
  };
  return (
    <Box>
      <UserappBar />
      <Container
        sx={{
          width: { lg: "50%", md: "50%", sm: "80%", xs: "auto" },
          background: "whitesmoke",
          paddingBlock: "30px",
          mt: 5
        }}
      >
        <Stack spacing={4}>
          <div>
            <Avatar
              alt="Profile Image"
              src={user_image}
              sx={{ width: 85, height: 85, margin: "auto" }}
            />
          </div>
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
            Update
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Profile;
