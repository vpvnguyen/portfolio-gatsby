import React from "react";
import { Button } from "@material-ui/core";

const style = {
  sideMenu: {
    position: "fixed",
    marginLeft: "-100px",
    top: 80,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    border: "0.25px solid",
    borderRadius: "20px",
    opacity: 0.5,
  },
};

const SideBar = () => {
  return (
    <>
      <div style={style.sideMenu}>
        <h2>Menu</h2>
        <Button href="#">Item 1</Button>
        <Button href="#">Item 2</Button>
        <Button href="#">Item 3</Button>
      </div>
    </>
  );
};

export default SideBar;
