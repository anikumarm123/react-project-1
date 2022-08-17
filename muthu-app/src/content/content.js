import React from "react";

const Content = (props) => {
  return (
    <div className="img-sty">
      <img src={props.picture}/>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
      </select>
      <button style={{ marginLeft: "50px" }}>Order To Click</button>
    </div>
  
  );
};

export default Content;
