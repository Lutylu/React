import React, { Component } from "react";
import Modal from "react-responsive-modal";
import Formulaire from "./Formulaire";

class ModalBoutton extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <button onClick={this.onOpenModal}>Ajouter un film</button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <Formulaire />
        </Modal>
      </div>
    );
  }
}

export default ModalBoutton;
