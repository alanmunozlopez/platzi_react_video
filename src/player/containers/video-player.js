import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import ProgressBar from '../components/progress-bar';
class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0
  }
  toggePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }
  componentDidMount () {
    this.setState({
      pause: (!this.props.autoplay)
    });
  }
  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      duration: this.video.duration
    });
  }
  handleTimeUpdate = event => {
    //console.log(this.video.currentTime)
    this.setState({
      currentTime: this.video.currentTime
    })
  }
  render() {
    return (
      <VideoPlayerLayout>
        <Title 
          title="Esto es un video chidido"
        />
        <Controls>
          <PlayPause
            pause={this.state.pause}
            handleClick={this.toggePlay}
          />
          <Timer 
            duration = { this.state.duration }
            currentTime = { this.state.currentTime }
          />
          <ProgressBar
          />
        </Controls>
        <Video
          autoplay={ this.props.autoplay }
          pause = { this.state.pause }
          handleLoadedMetadata = { this.handleLoadedMetadata }
          handleTimeUpdate = { this.handleTimeUpdate }
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;