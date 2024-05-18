import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Userhome from "./Components/User/Home";
import Profile from "./Components/Profile/Editprofile";
import Posts from "./Components/Post/Posts";
import Addpost from "./Components/Post/Addpost";

function App() {
  return (
    <Box>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/homepage" element={<Userhome />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/home" element={<Posts />} />
        <Route exact path="/addpost" element={<Addpost />} />
      </Routes>
    </Box>
  );
}

export default App;
