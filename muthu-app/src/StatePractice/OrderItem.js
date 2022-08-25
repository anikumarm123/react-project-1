import React, { Component } from "react";

export class OrderItem extends Component {
   
removeFun=()=>{
this.props.removeItem(this.props.foods)   

}
  render() {
    return (
      <div>
        <h1>{this.props.foods.name}</h1>
        <img
          src={this.props.foods.image}
          style={{ width: "200px", height: "100px" }}
        />
        <p> Quandity : {this.props.foods.qty}</p>
        <button onClick={this.removeFun} className="remove-btn" >Remove Item</button>
      </div>
    );
  }
}

export default OrderItem;
