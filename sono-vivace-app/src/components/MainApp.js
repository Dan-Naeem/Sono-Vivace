import React, {Component} from 'react';
import {styles} from '../styles/styles';

class MainApp extends Component {
  render() {
    return(
      <div style={styles.mainApp}>
        <div style={styles.left}>
          <p>left</p>
        </div>
        <div style={styles.right}>
          <p>Right</p>
        </div>
      </div>
    );
  }
}

export default MainApp;
