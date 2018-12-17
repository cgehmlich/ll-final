import React from 'react';
import YouTube from 'react-youtube';

class Player extends React.Component {
    render() {
      const opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          iv_load_policy: 3,
          modestbranding: 1,
          rel: 0
        }
      };
   
      return (
        <YouTube
          videoId="2g811Eo7K8U"
          opts={opts}
          onReady={this._onReady}
        />
      );
    }
}
export default Player;