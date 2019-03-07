import React from "react";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand"href="#">Clicky Game</a>
    

    <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
    <span className="navbar-text">
      {props.message} 
    </span>
      
    </ul>
    <span className="navbar-text">
      Score: {props.score}|  Top Score:{props.topScore}
    </span>
  </div>

    </nav>
  );
}

export default Nav;
