import React, { Component } from "react";
import "./Design.css";
import { Row, Col } from "react-bootstrap";

class Item extends Component {
  render() {
    const { titre, image } = this.props;
    return (
      <div>
        <Row>
          <div class="col col-lg-2">
            <img src={image} alt="image" width="60px" height="60px" />
          </div>
          <div class="item">
            <Col>
              <h4 class="text-left">{titre}</h4>
            </Col>
          </div>
        </Row>
        <div class="hr">
          <hr />
        </div>
      </div>
    );
  }
}
export default Item;
