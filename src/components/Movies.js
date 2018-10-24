import React from 'react';
import { movies } from '../data';

const Movies = () => {
  console.log(movies);
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => {
          return(
          <div>
            <h3>{movie.title}</h3>
            <h4>{movie.time}</h4>
            <ul>
              {movie.genres.map(genre => {
                return <li>{genre}</li>
              })}
            </ul>
          </div>)
        })}
    </div>
  );
};

export default Movies;
