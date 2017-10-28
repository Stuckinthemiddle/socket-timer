import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {subscribeToTimer} from './api.js';
import InputForm from './InputForm.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        timestamp: 'no timestamp messages yet ...'
    };
  }
  handleSubscribe = (interval) => {
    subscribeToTimer((err, timestamp) => {this.setState({timestamp})} , interval);
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
          Timer value from server: {this.state.timestamp}
        </p>
      </div>
    );
  }
}

export default App;
