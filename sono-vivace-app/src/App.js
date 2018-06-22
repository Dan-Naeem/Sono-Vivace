import React, { Component } from 'react';
import './App.css';
import axios from "axios";

import {styles} from './styles/styles';

import ButtonAppBar from './components/ButtonAppBar';
import MainApp from './components/MainApp';

// spotify library to handle api requests
import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();

class App extends Component {
  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: { name: 'Not Checked', albumArt: '' },
      token: token
    }
  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }

  getNowPlaying(){
  spotifyApi.getMyCurrentPlaybackState()
    .then((response) => {
      this.setState({
        nowPlaying: {
            name: response.item.name,
            albumArt: response.item.album.images[0].url
          }
      });
      console.log("response", response);
    })
}
render() {
  const name = (this.state.nowPlaying.name) ? this.state.nowPlaying.name : "nothing is playing now";
  const src = (this.state.nowPlaying.albumArt) ? this.state.nowPlaying.albumArt : "https://s-media-cache-ak0.pinimg.com/originals/85/3b/91/853b91fc8508045350c2af7d8d79ae3d.jpg"

  return (
    <div className="App">
      <ButtonAppBar />
      <MainApp />
      <a href='http://localhost:8888' > Login to Spotify </a>
      <div>
        Now Playing: { name }
      </div>
      <div>
        <img src={src} style={{ height: 150 }}/>
      </div>
      { this.state.loggedIn &&
      <button onClick={() => this.getNowPlaying()}>
        Check Now Playing
      </button>
    }
    </div>
  );
}
}

export default App;
