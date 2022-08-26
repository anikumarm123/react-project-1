import React, { Component } from "react";

export class OrderItem extends Component {
   
removeFun=()=>{
this.props.removeItem(this.props.foods)   

}
addFun=()=>{
  this.props.plus(this.props.foods)
}
minusRemove=()=>{
   this.props.minus(this.props.foods)
}
  render() {
    return (
      <div className="order-item">
        <h1>{this.props.foods.name}</h1>
        <img
          src={this.props.foods.image}
          style={{ width: "200px", height: "100px" }}
        />
        <p> Quandity : {this.props.foods.qty}</p>
      
        <div className="btn">
        <button onClick={this.addFun}>+</button>
        <button onClick={this.removeFun} className="remove-btn" >Remove Item</button>
        <button onClick={this.minusRemove}>-</button>
        </div>
      </div>
    );
  }
}

export default OrderItem;
