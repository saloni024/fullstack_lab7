import logo from './logo.svg';
import './App.css';
import React from "react";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: 101283741,
      firstname: "Saloni Jagdishbhai",
      lastname: "Prajapati",
      college: "George Brown College, Toronto"
    };
  }
  render(){
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Fullstack Development - 1</h2>
            <h3>React JS Programming Week09 Lab exercise</h3>
            <h4>{this.state.id}</h4>
            <h4>{this.state.firstname} {this.state.lastname}</h4>
            <h5>{this.state.college}</h5>
          </header>
        </div>
      );
    }
  }
  

export default App;
