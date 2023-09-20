import React, { Component } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user";

class App extends Component {
  render() {
    const { name, city, color, bio, links } = user;

    return (
      <div>
        <NavBar />
        <Home username={name} city={city} color={color} />
        <About bio={bio} links={links} />
      </div>
    );
  }
}

export default App;
