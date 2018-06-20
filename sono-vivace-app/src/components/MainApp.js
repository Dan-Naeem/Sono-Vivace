import React, {Component, PropTypes} from 'react';
import {styles} from '../styles/styles';
import classnames from 'classnames';


//import Button
import Button from '@material-ui/core/Button';

//import card
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';

//import sound
import Sound from 'react-sound';
import Audio from 'react-audioplayer';
import MusicPlayer from 'react-responsive-music-player'


const playlist = [
  {
    url: 'https://www.bensound.com/royalty-free-music?download=dubstep',
    cover: 'path/to/jpg',
    title: 'Despacito',
    artist: [
      'Luis Fonsi',
      'Daddy Yankee'
    ]
  },
  {
    url: 'https://www.bensound.com/royalty-free-music?download=dubstep',
    cover: 'path/to/jpg',
    title: 'Bedtime Stories',
    artist: [
      'Jay Chou'
    ]
  }
]


const songObj = {
  name: 'DUBBY WUB', // song name
  src: 'https://www.bensound.com/royalty-free-music?download=dubstep', // song source address
  img: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiK0JGSw-LbAhURx1kKHUPIDQAQjRx6BAgBEAU&url=https%3A%2F%2Fstmed.net%2Fwallpaper-91028&psig=AOvVaw0sKuI0bLaNQ6fb5hS36qrs&ust=1529593816179831', // (optional) song image source address
};

class MainApp extends Component {
  constructor() {
    super();
    this.state = {
      playStatus: "STOPPED",
      trackName: "",
      artist: "",
      album: "",
      year: "",
      artwork: "",
      duration: "",
      source: "https://www.bensound.com/royalty-free-music?download=dubstep",
      location: "",
      somePlaylist: [songObj],
    };
  }
  componentDidMount(){
    // axios.get(url)
    // .then(res => {
    //   this.setState({somePlaylist: res.})
    // })
  }
  handlePlay = () => {
    this.setState({ playStatus: 'PLAYING' } );
    console.log('playing');
  };
  handlePause = () => {
    this.setState({ playStatus: 'PAUSED' });
    console.log('paused');
  };
  render() {
    return(
      <div style={styles.mainApp}>
        <div style={styles.left}>
          <div style={styles.musicPlayerContainer}>
            <Card style={styles.musicPlayer}>
              <h3>SONG TITLE</h3>

              <div style={styles.imageContainer}>
                <img
                  style={styles.image}
                  src="https://pbs.twimg.com/profile_images/447374371917922304/P4BzupWu.jpeg"/>
              </div>

              <audio controls className="player" preload="false" >
               <source src="http://www.nihilus.net/soundtracks/Static%20Memories.mp3" />
              </audio>

              <div className="player-options">
                <div className="player-buttons player-controls">
                    <button onClick={this.previous} className="player-btn medium" title="Previous Song">
                        <i className="fa fa-backward" />
                    </button>

                    <button onClick={this.next} className="player-btn medium" title="Next Song">
                        <i className="fa fa-forward" />
                    </button>
                </div>
              </div>

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
