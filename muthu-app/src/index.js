import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// var mystyle1 = {
//   color:'blue'
// } 

// var mystyle = {
//   color:'red',
//   textAlign:'center'
// }

//const ele = React.createElement('h1',{style:mystyle},'Muthukumar', React.createElement('h2',{},'Fabevy'));

//const ele = <h1 className='n' style={ {color:'red'}}>Muthukumar <h2 className='f' style={mystyle1}>Fabevy</h2></h1>

const element = ReactDOM.createRoot(document.getElementById('root'));
//element.render(ele);

element.render(
  <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
