import React, { Component } from 'react';
import './App.css';

import {styles} from './styles/styles';

import ButtonAppBar from './components/ButtonAppBar';
import MainApp from './components/MainApp';

class App extends Component {
  render() {
    return (
      <div className="App" >
          <ButtonAppBar />
          <MainApp />
      </div>
    );
  }
}

export default App;
