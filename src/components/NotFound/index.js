import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = ({ isEpisode }) => {
  const context = isEpisode ? 'episode' : 'page';

  return (
    <div className="not-found">
      <h1>This {context} was destroyed by the Sith, or it simply doesn't exists.</h1>
      <Link to="/">Return safely to the Resistance Base</Link>
    </div>
  );
};

export default NotFound;
