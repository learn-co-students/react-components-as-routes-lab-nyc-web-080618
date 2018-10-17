import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
    <h1>
      Movies Page
    </h1>
    {movies.map(movie=><div>
      <h2>Name:{movie.title}</h2>
      <p>Time:{movie.time}</p>
      <p>genres:</p>
      <ul>
        {movie.genres.map(g=><li>{g}</li>)}
      </ul>
    </div>)}
    </div>
  );
};

export default Movies;
