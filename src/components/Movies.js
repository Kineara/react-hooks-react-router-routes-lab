import React from "react";
import { movies } from "../data";

function Movies() {
  const moviesList = movies.map((movie) => {
    return (
      <div key={movie.title}>
        <div>{movie.title}</div>
        <div>{movie.time}</div>
        <ul>
          {movie.genres.map((genre) => {
            return (
              <li key={genre}>{genre}</li>
            )
          })}
        </ul>
      </div>
    )
  })

  return <div>
    <h1>Movies Page</h1>
    <div>{moviesList}</div>
  </div>;
}

export default Movies;
