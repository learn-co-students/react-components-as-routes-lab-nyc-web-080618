import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>
        Directors Page
        {directors.map(director => {
          return (<div key={director}>
            Director: {director.name}
            <br />
            His/Her Movies:
            <ul>{director.movies.map(movie => <li key={movie}>{movie}</li>)}</ul>
          </div>)
        })}
      </h1>
    </div>
  );
}

export default Directors
