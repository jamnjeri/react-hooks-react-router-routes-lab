import React from "react";
import { directors } from "../data";

function Directors() {
  // console.log( directors )
   
  const display = directors.map((director, index) => 
  <div key={index}>
      {director.name}
      <ul>
      <li >{director.movies}</li>
      </ul>

  </div>
  )
   
  return  (
    <div>
    <h1> Directors Page </h1>
    {display}
    </div>
  )
}

export default Directors;
