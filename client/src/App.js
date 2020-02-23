import React, { Component } from 'react';
import  'bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg';
import './App.css';
// import Container from "react-bootstrap/Container";
// import {Searchbar} from "./Components/Searchbar";
// import Dropdown from './Components/Dropdown.js';
import TwitterSearch from './Components/TwitterSearch';
class App extends Component {
  state = {
    expressResponse: '',
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ expressResponse: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

render() {
    return (
      //main site container/div
      <div className="App"> 

        <header className="App-header">
          <h1 className="Site-title">Twiada Storm</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <p>{this.state.expressResponse}</p>

        <div>
          <TwitterSearch />
        </div>

      </div>
    );
  }
}

export default App;
