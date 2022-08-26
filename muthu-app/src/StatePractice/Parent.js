import React, { Component } from "react";
import FoodItems from "./FoodItems";
import OrderItem from "./OrderItem";

export class Parent extends Component {
  constructor() {
    super();
    this.state = {
      cartItem: [],
      FoodItems: [
        { name: "Dhosai", image: require("../images/item-1.jpg"), qty: 1 },
        { name: "Poori", image: require("../images/item-2.jpg"), qty: 1 },
        { name: "chicken", image: require("../images/item-6.jpg"), qty: 1 },
        { name: "Mutton", image: require("../images/item-4.webp"), qty: 1 },
        { name: "Itly", image: require("../images/item-3.jpg"), qty: 1 },
        { name: "Purotta", image: require("../images/item-5.jpg"), qty: 1 },
      ],      
    };
  }
  
  cartFood = (data) => {
    const check = this.state.cartItem.includes(data);
  
    if (check === false) {
      var item = this.state.cartItem.concat(data);
      console.log(item);
      this.setState({ cartItem: item });
    } else {
      this.setState({ qty: data.qty++});
    }
  };
  removeFum = (d)=>{

         var remove = this.state.cartItem.filter( (rom) => {
          return  rom !== d 
          })
          console.log(remove);
          this.setState({cartItem:remove});
  }
  plusFun =(p)=>{
     this.setState({qty:p.qty++});   
  }
  minusFun =(m)=>{
    this.setState({qty:m.qty--})
    if(m.qty === 0){
      var remove = this.state.cartItem.filter( (rom) => {
        return  rom !== m
        })
        console.log(remove);
        this.setState({qty:m.qty++})
        this.setState({cartItem:remove});
    }

  }
  render() {
    return (
      <div className="main-flx">
        <div className="show-item">
          {this.state.FoodItems.map((food, index) => (
            <FoodItems key={index} foods={food} foodItem={this.cartFood} />
          ))}
        </div>
         <div className="cart">
          <h1>Cart Items</h1>
          {this.state.cartItem.map((food, index) => (
            <OrderItem key={index} foods={food} removeItem={this.removeFum} plus={this.plusFun} minus={this.minusFun}/>
          ))}
        </div>
      </div>
    );
  }
}

export default Parent;
