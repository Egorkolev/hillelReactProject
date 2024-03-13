import { Box, Button } from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import React from "react";

const SideBar = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  const handleOpenSideBar = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <Box
      sx={{
        padding: "20px 0",
        position: "fixed",
        zIndex: 1,
      }}
    >
      <MenuOpenIcon onClick={handleOpenSideBar} />
      {openMenu && (
        <Box
          sx={{
            display: "grid",
            gap: "20px",
            padding: "20px",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            width: "fit-content",
            backgroundColor: "white",
          }}
        >
          <Button variant="contained">Home</Button>
          <Button variant="contained">Enymals</Button>
          <Button variant="contained">Fishes</Button>
          <Button variant="contained">Birds</Button>
          <Button variant="contained">Ants</Button>
          <Button variant="contained">About</Button>
        </Box>
      )}
    </Box>
  );
};

export default SideBar;
