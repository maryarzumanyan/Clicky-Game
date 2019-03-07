import React from "react";
import "./style.css";


function TileComponent(props) {
  return (
    <div 
      onmouseover={() => expandImage(props.id)}
      onMouseOut={() => collapseImage(props.id)}
      className="card">
      <div className="img-container" >
        <img alt={props.id} src={props.image} aria-label="click item" class="click-item shake" />
      </div>
    </div>
  );
}

function expandImage(id) {

}

function collapseImage(id) {

}

export default TileComponent;

/*
<div role="img" aria-label="click item" class="click-item shake"
style="background-image: url(&quot;/assets/images/meeseeks.png&quot;);"></div>

*/