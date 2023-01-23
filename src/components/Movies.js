import React from "react";
import { movies } from "../data";

function Movies( ){
    // console.log( movies )

    const call = movies.map((movie, index) => 
      <div key={index}>
        <ul>
        <li>title :{movie.title}</li>
        <li>time :{movie.time}</li>        
        <li>genres:{movie.genres}</li>
      
        </ul>
      </div>
        
      )

   
  return (
  <div>
    <h1>Movies Page</h1>
    {call}
  </div>
  )
}

export default Movies;
