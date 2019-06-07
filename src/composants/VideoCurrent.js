import React, { Component } from "react";

class VideoCurrent extends Component {
  render() {
    const { Videourl } = this.props;
    return (
      <iframe
        title="Video"
        width="950"
        height="534"
        src={Videourl}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    );
  }
}

export default VideoCurrent;
