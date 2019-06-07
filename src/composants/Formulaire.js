import React from "react";
import { Form, Button } from "react-bootstrap";

class Formulaire extends React.Component {
  state = {
    title: "",
    description: "",
    image: "",
    url: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    console.log("Le film est : " + JSON.stringify(this.state));
    const { title, description, image, url } = this.state;
    fetch("http://localhost:8000/api/film", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        description: description,
        image: image,
        url: url
      })
    })
      .then(res => console.log(res.json))
      .catch(err => console.log(err));
  };

  render() {
    const { title, description, image, url } = this.state;
    console.log(
      "*****************BORDEL*******************************",
      this.state
    );
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <label>Titre du film :</label>
          <br />
          <input
            name="title"
            type="string"
            value={title}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group>
          <label>Description du film :</label>
          <br />
          <input
            name="description"
            type="string"
            value={description}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group>
          <label>Image du film :</label>
          <br />
          <input
            name="image"
            type="string"
            value={image}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group>
          <label>URL du film :</label>
          <br />
          <input
            name="url"
            type="string"
            value={url}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enregistrer le film !
        </Button>
      </Form>
    );
  }
}

export default Formulaire;
