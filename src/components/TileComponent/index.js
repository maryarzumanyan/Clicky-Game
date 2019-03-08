import React from "react";
import "./style.css";

class TileComponent extends React.Component {
  state = {
    class: "img-container"
  };

  handleMouseOver = event => {
    this.setState (
      {
        class: "img-container-selected"
      }
    );
  };

  handleMouseOut = event => {
    this.setState (
      {
        class: "img-container"
      }
    );
  };

  render() {
    return (
      <div 
        className="card">
        <div 
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut} 
          onClick={() => this.props.onClickHandler(this.props.id)}     
          className={this.state.class}
          id={this.props.id}>
          <img
            alt={this.props.id}
            src={this.props.image}
          />
        </div>
      </div>
    );
  }
}

export default TileComponent;
