import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      style={{
        background: "linear-gradient(to right,#141E61, #787A91)",
        // backgroundColor: "rgb(15, 4, 76)",
      }}
    >
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Live Score</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
