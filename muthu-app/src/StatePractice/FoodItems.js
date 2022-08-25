import React, { Component } from "react";

export class FoodItems extends Component {
    orderItem = () =>{
       
       //console.log(this.props.foods);
       this.props.foodItem(this.props.foods)
    }
  render() {
    return (
      <div className="items-flx" >
        <div className="food" >
          <h1>{this.props.foods.name}</h1>
          <img src={this.props.foods.image} style={{ width: "200px", height: "100px" }} />
          <br />
          <button  onClick={this.orderItem}>
            Order To Click
          </button>
        </div>
      </div>
    );
  }
}

export default FoodItems;
