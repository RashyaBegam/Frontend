import { Box, Button, Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import Postcard from "./postCard";
import UserappBar from "../Navbar/Usernavbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../config";

const Posts = () => {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(API_BASE_URL + "all-posts").then(res => {
      console.log(res);
      setdata(res.data);
    });
  }, []);

  return (
    <Box>
      <UserappBar />
      <br />

      <Container>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "13px",
            justifyContent: {
              lg: "start",
              md: "start",
              sm: "start",
              xs: "center"
            }
          }}
        >
          {data.map((e, index) => {
            return (
              <Postcard
                post_addedTime={e.post_addedTime}
                post_url={e.post_url}
                post_text={e.post_text}
                likes_count={e.likes_count}
                key={index}
              />
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Posts;
