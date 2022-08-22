import React, { Component } from "react";

export class State extends React.Component {
  constructor() {
    super();
    this.state = {
      // comment: "Order Booked",
      product: [
        { name: "Dhosai", image: require("./images/item-1.jpg"), qty: 0 },
        { name: "Poori",image: require("./images/item-2.jpg") ,qty: 0 },
        { name: "chicken",image: require("./images/item-6.jpg") ,qty: 0 },
        { name: "Mutton",image: require("./images/item-4.webp") ,qty: 0 },
        { name: "Itly",image: require("./images/item-3.jpg") ,qty: 0 },
        { name: "Purotta",image: require("./images/item-5.jpg") ,qty: 0 },
      ],
      cart: [],
    };
  }
  // clickFun = ()=>{
  //    this.setState({comment:"Order Cancel"})
  // }
  render() {
    return (
      <div className="state-flx">
        {/* <h1>{this.state.comment}</h1>
        <button onClick={()=>this.clickFun()}>click</button>
        <Second name={this.state.comment}/> */}
        {this.state.product.map((data, index) => (
          <Product item={data.name} key={index} img={data.image} />
        ))}
      </div>
    );
  }
}

export default State;

// export class Second extends Component {
//   render() {
//     return (
//       <h1> {this.props.name}</h1>
//     )
//   }
// }

export class Product extends Component {
 
cartItem(){
  
}
  render() {
    return (
      <div className="state-item">
        <h1>{this.props.item}</h1>
        <img src={this.props.img} style={{ width: "200px",height:'100px' }} />
        <br />
        <button className="state-btn" onClick={()=>this.cartItem()}>Order To Click</button>
      </div>
    );
  }
}
