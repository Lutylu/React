import React, { Component } from "react";
import "./App.css";

import Header from "./composants/Header";
import ListeItems from "./composants/ListeItems";

class App extends Component {
  render() {
    return (
      <div class="App">
        <div>
          <Header />
          <br />
        </div>
        <ListeItems />
      </div>
    );
  }
}

export default App;
