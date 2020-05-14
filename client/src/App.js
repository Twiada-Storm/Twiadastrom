import React, { Component } from 'react';
import  'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import DenseAppBar from './Components/AppBar.js';
// import Container from "react-bootstrap/Container";
// import {Searchbar} from "./Components/Searchbar";

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

        <DenseAppBar />

        <p>{this.state.expressResponse}</p>

        <div>

          <TwitterSearch />

        </div>

      </div>
    );
  }
}

export default App;
