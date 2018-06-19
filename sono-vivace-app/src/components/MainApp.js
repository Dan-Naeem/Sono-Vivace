import React, {Component} from 'react';
import {styles} from '../styles/styles';

//import card
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class MainApp extends Component {
  render() {
    return(
      <div style={styles.mainApp}>
        <div style={styles.left}>
          <div style={styles.musicPlayerContainer}>
            <Card style={styles.musicPlayer}>
              <h3>Music Player</h3>
              <p>song goes here</p>
            </Card>
          </div>
          <div style={styles.playlist}>
          </div>
        </div>
        <div style={styles.right}>
          <p>Right</p>
        </div>
      </div>
    );
  }
}

export default MainApp;
