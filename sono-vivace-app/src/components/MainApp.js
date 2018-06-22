import React, {Component, PropTypes} from 'react';
import {styles} from '../styles/styles';
import classnames from 'classnames';

//static playlist
import {staticPlaylist} from '../playlist/staticPlaylist';

//import Button
import Button from '@material-ui/core/Button';

//import card
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';

class MainApp extends Component {
  constructor() {
    super();
    this.state = {
      playlist: [],
      playlistIndex: 0,
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
    this.setState({ playlist: staticPlaylist[this.state.playlistIndex] });
  };
  previous = () => {
    var newIndex = this.state.songIndex;
    newIndex -= 1;
    if (newIndex < 0) {
      console.log('out of bounds');
    }
    else {
      this.setState({songIndex: newIndex});
      const audio= document.getElementById("audio");
      audio.setAttribute("src", "" );
      audio.setAttribute("src", this.state.playlist[newIndex].url );
      audio.play();
      console.log('new song index: ', this.state.songIndex);
    }
  };
  next = () => {
    var newIndex = this.state.songIndex;
    newIndex += 1;
    let length = this.state.playlist.length;
    if (newIndex === length) {
      console.log('out of bounds');
    }
    else {
      this.setState({songIndex: newIndex});
      const audio= document.getElementById("audio");
      audio.setAttribute("src", "" );
      audio.setAttribute("src", this.state.playlist[newIndex].url );
      audio.play();
      console.log('new song index: ', this.state.songIndex);
    }
  };
  playlistOne = () => {
    console.log('ind b4', this.state.playlistIndex);
    var newIndex = 0;
    this.setState({playlistIndex: newIndex});
    this.setState({songIndex: 0});
    this.setState({playlist: staticPlaylist[this.state.playlistIndex]});
    console.log('button pressed 1');
    console.log('ind after', this.state.playlistIndex);
  };
  playlistTwo = () => {
    console.log('ind b4', this.state.playlistIndex);
    var newIndex = 1;
    this.setState({playlistIndex: newIndex});
    this.setState({songIndex: 0});
    this.setState({playlist: staticPlaylist[this.state.playlistIndex]});
    console.log('button pressed 2');
    console.log('ind after', this.state.playlistIndex);
  };
  onClickSongItem = (i, event) => {
    const index = i;
    console.log("index is: ", index);
    const audio= document.getElementById("audio");
    audio.setAttribute("src", "" );
    audio.setAttribute("src", this.state.playlist[index].url );
    audio.play();
    this.setState({ songIndex: index });
;


  }
  render() {
    console.log('playlist: ', this.state.playlist);
    console.log("songIndex", this.state.songIndex);

    const title = (this.state.playlist.length)? this.state.playlist[this.state.songIndex].title : "";
    const artist = (this.state.playlist.length)? this.state.playlist[this.state.songIndex].artist : "";
    const cover = (this.state.playlist.length)? this.state.playlist[this.state.songIndex].cover : "";
    const url = (this.state.playlist.length)? this.state.playlist[this.state.songIndex].url : "";
    console.log("url", url);
    const playlist = this.state.playlist;
    const allSongs = playlist.map((item, i) => (
      <Card onClick={this.onClickSongItem.bind(this, i)} style={styles.songItem} key={i} >
        <div style={styles.songContent}>
          <div style={styles.smallContainer}>
            <img
              style={styles.smallImg}
              src={item.cover}
              />
          </div>
          <h3>{item.title}</h3>
          <h5>{item.artist}</h5>
        </div>
      </Card>
    ))
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
                <audio id="audio" controls className="player" preload="false" >
                 <source id="source" src={url} />
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

          <div style={styles.search}>
            <div style={styles.songContent}>
              <Card
                onClick={this.playlistOne}
                style={styles.button}
                >
                <h1> 1 </h1>
              </Card>
              <Card
                onClick={this.playlistTwo}
                style={styles.button}
                >
                <h1> 2 </h1>
              </Card>
            </div>
          </div>

        </div>

        <div style={styles.right}>

        <div style={styles.playlist}>
          { (allSongs) ? allSongs : null}
        </div>
        </div>
      </div>
    );
  }
}

export default MainApp;
