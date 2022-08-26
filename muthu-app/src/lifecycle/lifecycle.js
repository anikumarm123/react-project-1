import React, { Component } from "react";

export class Lifecycle extends Component {
// Initial //
    constructor() {
    super()    
    this.state ={ 
        name:'muthu',

}
  }
  // componentWillMount() depricated not using
//   componentWillMount(){
//      alert('ComponentWillMount');
//   }
  //only once calling componenDidMount// 
  componentDidMount(){
     
     setTimeout(()=>{
        console.log('ComponentDidMount');
        this.setState({name:' React Muthu'}) 
     },3000)
  }
  componentDidUpdate(){
    console.log('ComponentDidUpdate');
    console.log(this.state.name);
  }
  render() {
    //alert('render');
    return (<h1> {this.state.name}</h1>)
  }
}

export default Lifecycle;
