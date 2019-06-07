import React, { Component } from "react";

class VideoDescription extends Component {
  render() {
    const { titre, description } = this.props;
    return (
      <div>
        <h3>{titre}</h3>
        <h6>{description}</h6>
      </div>
    );
  }
}

export default VideoDescription;
