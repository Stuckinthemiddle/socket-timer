import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {subscribeToTimer} from './api.js';
import InputForm from './InputForm.js';
import TimestampList from  './TimestampList.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state =  {
      timestamps: [
        {value: 'Enter Interval and Click Subscribe...'},
      ]
    };
  }
  handleSubscribe = (interval) => {
    subscribeToTimer((err, timestamp) => {
          let val = {'value': timestamp};
          this.setState({ timestamps: this.state.timestamps.concat(val) })
        },  
        interval); 
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <p className="App-intro">
          <InputForm  subscribe={this.handleSubscribe}/>       
          Timer value from server:
          <TimestampList timestamps={this.state.timestamps}/>
        </p>
      </div>
    );
  }
}

export default App;
