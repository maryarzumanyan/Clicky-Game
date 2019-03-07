import React, { Component } from "react";
import TileComponent from "./components/TileComponent";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    tiles: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => { return { id: i, image: "/images/" + i + ".jpg", position: i, selected: false }}),
    setRandomPositions : function() {
  }
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a TileComponent component for each friend object
  render() {
    return (
    <div>
      <Nav />
      <Wrapper>
        {this.state.tiles.map(tile => (
          <TileComponent
            expandImage={this.expandImage}
            collapseImage={this.collapseImage}
            id={tile.id}
            key={tile.id}
            image={tile.image}
          />
        ))}
      </Wrapper>
    </div>
    );
  }
}

export default App;
