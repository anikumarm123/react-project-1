import React from "react";

const sty = { paddingLeft: "20px", fontSize: "30px" };
const Navbar = () => {
  return (
    
    <div className ='nav'>
      <div className="logo">
        <img src={require("../images/hotel.jpg")}  />        
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
    
  );
};

export default Navbar;
