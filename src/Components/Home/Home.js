import { Box, Button, Typography } from "@mui/material";
import React from "react";
import background from "../../images/background.jpg";
import { useNavigate } from "react-router-dom";
import HomeappBar from "../Navbar/Homenavbar";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <HomeappBar />
      <Box
        component="img"
        src="https://c0.wallpaperflare.com/preview/263/921/102/business-communication-computer-concept.jpg"
        sx={{ width: "100%", height: "100vh" }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "60px",
          left: "0px",
          background: "whitesmoke",
          pt: 2,
          pb: 2,
          width: "100%"
        }}
      >
        <br />
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          SOCIAL MEDIA APPLICATION
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "center", mt: 1 }}>
          Enjoy Our Services
        </Typography>
        <br />
        <div style={{ margin: "auto", width: "fit-content" }}>
          <Button
            variant="contained"
            onClick={() => navigate("/login")}
            sx={{ background: "green" }}
          >
            Login Now
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default Home;
