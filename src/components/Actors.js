import React from "react";
import { actors } from "../data";
const actorsList = actors.map((actor) => {
  return (
    <div key={actor.name}>
      <div>{actor.name}</div>
      <ul>
        {actor.movies.map((movie) => {
          return <li key={movie}>{movie}</li>;
        })}
      </ul>
    </div>
  );
});

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>
  );
}

export default Actors;
