import React from "react";

const sty = { paddingLeft: "20px", fontSize: "30px" };
const Nav_bar = () => {
  return (
    <div className="content">
    <div className ='nav'>
      <div className="logo">
        <img src={require("../images/item-1.jpg")} height="70px" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "right",
          marginRight: "80px",
        }}
      >
        <a style={sty}>Home</a>
        <a style={sty}>Contact</a>
        <a style={sty}>Profile</a>
        <a style={sty}>Order</a>
      </div>
    </div>
    </div>
  );
};

export default Nav_bar;
