import React, { Component } from 'react';
import './App.css';
import axios from "axios";

import ButtonAppBar from './components/ButtonAppBar';
import MainApp from './components/MainApp';

// spotify library to handle api requests
var SpotifyWebApi = require('spotify-web-api-js');
const spotifyWebApi = new SpotifyWebApi();

class App extends Component {
  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyWebApi.setAccessToken(token);
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

  getNowPlaying = () => {
    // get Elvis' albums, passing a callback. When a callback is passed, no Promise is returned
    spotifyWebApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function(err, data) {
      if (err) console.error(err);
      else {
        console.log('Artist albums', data);
        console.log('Album name', data.items[0].name);
        console.log('Album image', data.items[0].images[1].url);
        /*this.setState({
          nowPlaying: {
              name: data.items[0].name,
              albumArt: data.items[0].images[1].url
            }
        });*/
      }
    /*
    spotifyWebApi.getMyCurrentPlaybackState()
      .then((response) => {
        this.setState({
          nowPlaying: {
              name: response.item.name,
              albumArt: response.item.album.images[0].url
            }
        });
      })*/
    });
  }
  render() {
    return (
      <div className="App">
        <a href='http://localhost:8888' > Login to Spotify </a>
        <div>
          Now Playing: { this.state.nowPlaying.name }
        </div>
        <div>
          <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }}/>
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
