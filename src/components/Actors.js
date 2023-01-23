import React from "react";
import { actors } from "../data";

function Actors() {
  // console.log(actors)

  const render = actors.map((actor, index) => 
   <div key={index}>
    {actor.name}
    <ul >
      <li>{actor.movies}</li>
    </ul>
    </div>
  )

  return (
  <div>
    <h1>Actors Page</h1>
    {render}
  </div>
  )
}

export default Actors;
