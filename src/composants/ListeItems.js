import React, { Component } from "react";
import Item from "./Item";
import VideoCurrent from "./VideoCurrent";
import VideoDescription from "./VideoDescription";
import { Col, Row } from "react-bootstrap";

class ListeItems extends Component {
  state = {
    result: [],
    isLoad: true,
    urlVideo: "",
    titreVideo: "",
    descriptionVideo: ""
  };

  componentDidMount() {
    fetch("http://localhost:8000/api/films")
      .then(res => res.json())
      .then(data => this.setState({ result: data, isLoad: false }));
  }

  render() {
    const {
      result,
      isLoad,
      urlVideo,
      titreVideo,
      descriptionVideo
    } = this.state;

    const renderItem = !isLoad ? (
      result.data.map(item => {
        return (
          <div
            key={item.id}
            onClick={() =>
              this.setState({
                urlVideo: item.url,
                titreVideo: item.title,
                descriptionVideo: item.description
              })
            }
            onLoad={() =>
              this.setState({
                urlVideo: result.data[0].url,
                titreVideo: result.data[0].title,
                descriptionVideo: result.data[0].description
              })
            }
          >
            <Item titre={item.title} image={item.image} />
          </div>
        );
      })
    ) : (
      <p>Chargement de données en cours...</p>
    );
    return (
      <div className="row">
        <div className="col-md-8">
          <VideoCurrent Videourl={urlVideo} />
          <VideoDescription titre={titreVideo} description={descriptionVideo} />
        </div>
        <div className="col-md-4">{renderItem} </div>
      </div>
    );
  }
}

export default ListeItems;
