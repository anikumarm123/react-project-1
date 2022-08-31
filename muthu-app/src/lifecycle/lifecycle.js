import React, { Component } from "react";
import ChildLifeCycle from "./ChildLifeCycle";

export class Lifecycle extends Component {
  // Initial //
  constructor() {
    super();
    this.state = {
      name: "muthu",
      show: true
    };
  }
  // componentWillMount() depricated not using
  //   componentWillMount(){
  //      alert('ComponentWillMount');
  //   }
  //only once calling componenDidMount//
  componentDidMount() {
    setTimeout(() => {
      console.log("ComponentDidMount");
      console.log({ name: "React Muthu" });
      this.setState({ name: " React Muthu" });
    }, 3000);
  }
  componentDidUpdate() {
    console.log("ComponentDidUpdate");
    console.log(this.state.name);
  }
  // shouldComponentUpdate() {
  //   return false;
  // }
  render() {
    //alert('render');
    return (
      <div>
        <h1> {this.state.name}</h1>
        {this.state.show && <ChildLifeCycle n ={this.state.name}/>}
        <button>update</button>
      </div>
    );
  }
}

export default Lifecycle;
