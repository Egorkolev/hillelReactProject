import { Box, Button } from "@mui/material";
import React from "react";

class Header extends React.Component {
  render() {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "20px 0",
          alignItems: "center",
          gap: "2rem",
          boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
        }}
      >
        <Button variant="contained">Home</Button>
        <Button variant="contained">Content</Button>
        <Button variant="contained">About</Button>
      </Box>
    );
  }
}

export default Header;
