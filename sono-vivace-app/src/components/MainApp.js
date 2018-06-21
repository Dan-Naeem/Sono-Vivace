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
    url: 'https://www.bensound.com/royalty-free-music?download=energy',
    cover: 'https://images.rigzone.com/images/news/articles/n_152346.png',
    title: 'song 1',
    artist: [
      's1 artist'
    ]
  },
  {
    url: 'https://www.bensound.com/royalty-free-music?download=dubstep',
    cover: 'https://i1.sndcdn.com/artworks-000200587463-228xaw-t500x500.jpg',
    title: 'song 2',
    artist: [
      's2 artist'
    ]
  },
  {
    url: 'https://www.bensound.com/royalty-free-music?download=energy',
    cover: 'https://cdn.mos.cms.futurecdn.net/oZr3irkSDKpSSjmFkpgP6K.jpg',
    title: 'song 3',
    artist: [
      's3 artist'
    ]
  },
  {
    url: 'https://www.bensound.com/royalty-free-music?download=dubstep',
    cover: 'http://dayred.com/wp-content/uploads/2013/08/music-downloading-sites.jpg',
    title: 'song 4',
    artist: [
      's4 artist'
    ]
  },
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
  previous = () => {
    var newIndex = this.state.songIndex;
    newIndex -= 1;
    this.setState({songIndex: newIndex});
  };
  next = () => {
    var newIndex = this.state.songIndex;
    newIndex += 1;
    this.setState({songIndex: newIndex});
  };
  render() {
    console.log('playlist: ', this.state.playlist);
    const title = (this.state.playlist.length)? this.state.playlist[this.state.songIndex].title : "";
    const artist = (this.state.playlist.length)? this.state.playlist[this.state.songIndex].artist : "";
    const cover = (this.state.playlist.length)? this.state.playlist[this.state.songIndex].cover : "";
    const url = (this.state.playlist.length)? this.state.playlist[this.state.songIndex].url : "";
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

              <div >
                <audio controls className="player" preload="false" >
                 <source src={url} />
                </audio>
              </div>

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
