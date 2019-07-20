import React from "react";
import TileComponent from "./components/TileComponent";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";

class App extends React.Component {
  // Setting this.state.friends to the friends json array
  state = {
    tiles: this.newTiles(),
    score: 0,
    topScore: 0,
    message: "Click an image to begin!"
  };

  handleOnClick = id => {
    const allTiles = this.state.tiles
    const tile = allTiles.find((value) => value.id === id);
    if (tile.selected) {
      // Loser
      if (this.state.topScore < this.state.score) {
        this.setState({
          topScore: this.state.score,
        });
      }

      this.setState({
        score: 0,
        tiles: this.newTiles(),
        message: "You guessed incorrectly!"
      });

  } else {
      // Keep playing
      tile.selected = true;
      this.setState({
        score: this.state.score + 1,
        tiles: this.shuffle(allTiles),
        message: "You guessed correctly!"
      })
    }  
  };

  render() {
    return (
    <div>
      <Nav 
        score={this.state.score}
        topScore={this.state.topScore}
        message={this.state.message}
      />
      <Wrapper>
        {this.state.tiles.map(tile => (
          <TileComponent
            id={tile.id}
            key={tile.id}
            image={tile.image}
            onClickHandler={(id) => this.handleOnClick(id)}
          />
        ))}
      </Wrapper>
    </div>
    );
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  newTiles() {
    return this.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]).map(i => { return { 
      id: i, image: "/images/" + i + ".jpg", position: i, selected: false }});
  }
}

export default App;
