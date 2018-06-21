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

//static playlist
const staticPlaylist = [
  {
    url: 'https://www.bensound.com/royalty-free-music?download=dubstep',
    cover: 'https://cps-static.rovicorp.com/3/JPG_500/MI0004/183/MI0004183636.jpg?partner=allrovi.com',
    title: 'Despacito',
    artist: [
      'Luis Fonsi',
      'Daddy Yankee'
    ]
  },
  {
    url: 'https://www.bensound.com/royalty-free-music?download=dubstep',
    cover: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiK0JGSw-LbAhURx1kKHUPIDQAQjRx6BAgBEAU&url=https%3A%2F%2Fstmed.net%2Fwallpaper-91028&psig=AOvVaw0sKuI0bLaNQ6fb5hS36qrs&ust=1529593816179831',
    title: 'Bedtime Stories',
    artist: [
      'Jay Chou'
    ]
  }
]

class MainApp extends Component {
  constructor() {
    super();
    this.state = {
      playlist: [],
      songIndex: 0,
      location: "",
    };
  }
  componentDidMount = () => {
    // axios.get(url)
    // .then(res => {
    //   this.setState({somePlaylist: res.})
    // })

    //setup up states
    this.setState({ playlist: staticPlaylist });
  };
  handlePlay = () => {
    this.setState({ playStatus: 'PLAYING' } );
    console.log('playing');
  };
  handlePause = () => {
    this.setState({ playStatus: 'PAUSED' });
    console.log('paused');
  };
  render() {
    console.log('playlist: ', this.state.playlist);
    const title = (this.state.playlist.length)? this.state.playlist[0].title : "";
    const artist = (this.state.playlist.length)? this.state.playlist[0].artist : "";
    const cover = (this.state.playlist.length)? this.state.playlist[0].cover : "";
    const url = (this.state.playlist.length)? this.state.playlist[0].url : "";
    return(
      <div style={styles.mainApp}>
        <div style={styles.left}>
          <div style={styles.musicPlayerContainer}>
            <Card style={styles.musicPlayer}>

              <h1>{title}</h1>
              <h5>{artist}</h5>

              <div style={styles.imageContainer}>
                <img
                  style={styles.image}
                  src={cover} />
              </div>

              <audio controls className="player" preload="false" >
               <source src={url} />
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
