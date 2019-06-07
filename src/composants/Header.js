import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import ModalBoutton from "./ModalBoutton";
import "./Design.css";

const Header = () => {
  return (
    <div class="Headers">
      <Navbar>
        <Navbar.Brand href="#home"> LutyFlix </Navbar.Brand>
        <ModalBoutton />
        <Nav className="mr-auto">
          <Nav.Link href="#home"> Ajouter un film </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
