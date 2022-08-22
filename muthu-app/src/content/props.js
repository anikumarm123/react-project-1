import React from "react";
import Content from "./content";
import images_1 from "../images/item-1.jpg";
import images_2 from "../images/item-2.jpg";
import images_3 from "../images/item-3.jpg";
import images_4 from "../images/item-4.webp";
import images_5 from "../images/item-5.jpg";
import images_6 from "../images/item-6.jpg";
import Menu from "./menu";
import Order from "./order";

var image = [
  { photo: images_1 },
  { photo: images_2 },
  { photo: images_3 },
  { photo: images_4 },
  { photo: images_5 },
  { photo: images_6 },
];
const Props = () => {
  return (
    <div className="main">
      <div className="menu">
        <Menu />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", background: "#d0c962" }}>
        {image.map((data,index) => (
          <Content picture={data.photo} key ={index} />
        ))}
      </div>
      <div className="order">
        <Order />
      </div>
    </div>
  );
};

export default Props;
