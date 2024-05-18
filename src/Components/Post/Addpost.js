import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../config";
import axios from "axios";
import { useSelector } from "react-redux";
import UserappBar from "../Navbar/Usernavbar";

const Addpost = () => {
  const user = useSelector(state => state.user.value);
  let today = new Date().toLocaleString();
  const [post_text, setpost_text] = useState("");
  const [post_url, setpost_url] = useState("");
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    if (post_text === "" || post_url === "") {
      alert("please fill all fields");
    } else {
      axios
        .post(API_BASE_URL + "add-post", {
          user_id: user.id,
          post_text: post_text,
          post_url: post_url,
          post_addedTime: today,
          likes_count: "0"
        })
        .then(res => {
          console.log(res);
          if (res.status == 201) {
            alert(res.data.message);
            navigate("/home");
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
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            UPLOAD POST
          </Typography>
          <TextField
            fullWidth
            label="Post Text"
            id="fullWidth"
            value={post_text}
            onChange={e => setpost_text(e.target.value)}
          />
          <TextField
            fullWidth
            label="Post Url"
            id="fullWidth"
            value={post_url}
            onChange={e => setpost_url(e.target.value)}
          />

          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{ background: "black", ":hover": { background: "darkgreen" } }}
          >
            Upload
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Addpost;
