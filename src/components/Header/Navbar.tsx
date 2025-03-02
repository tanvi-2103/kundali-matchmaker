import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: "white" }}>
          <img src="/logo.jpg" style={{borderRadius:"100%", height:"20px", width:"20px"}}/>
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/login" sx={{ border: "1px solid white", borderRadius: "5px", marginLeft: "10px" }}>
            Login
          </Button>
          <Button color="inherit" component={Link} to="/signup" sx={{ border: "1px solid white", borderRadius: "5px", marginLeft: "10px" }}>
            SignUp
          </Button>
          {/* <Button color="inherit" component={Link} to="/contact"> */}
            {/* Contact */}
          {/* </Button> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;