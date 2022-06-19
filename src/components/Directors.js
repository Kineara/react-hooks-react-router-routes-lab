import React from "react";
import { directors } from "../data";
const directorsList = directors.map((director) => {
  return (
    <div key={director.name}>
      <div>{director.name}</div>
      <ul>
        {director.movies.map((movie) => {
          return <li key={movie}>{movie}</li>
        })}
      </ul>
    </div>
  )
})

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    <div>{directorsList}</div>
  </div>;
}

export default Directors;
