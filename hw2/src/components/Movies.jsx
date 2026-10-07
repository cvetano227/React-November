import React from "react";

export const MoviesList = ({ movies }) => {
  return (
    <div id="movies-list">
      <h2>Lista na Filmovi:</h2>
      <hr />
      {movies.map((movie, i) => {
        return (
          <div key={i}>
            <h3 id="movie-name">{movie.name}</h3>
            <p id="movie-date">{movie.date}</p>
            <p id="movie-plot">{movie.genre.plot}</p>
            <p id="movie-cast">{movie.genre.cast}</p>
            <a href={movie.imdbLink} target="_blank" rel="noopener noreferrer">
              View on IMDb
            </a>
            <img id="movie-img" src={movie.imgUrl} alt={movie.name} />
            <hr />
          </div>
        );
      })}
    </div>
  );
};
