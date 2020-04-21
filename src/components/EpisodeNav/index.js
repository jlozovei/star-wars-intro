import React from 'react';
import { Link } from 'react-router-dom';

const EpisodeNav = () => {
  return (
    <nav className="episode-nav">
      <ul>
        <li>
          <Link to="/1">
            <span className="episode-number">Episode I</span> - The Phantom Menace
          </Link>
        </li>
        <li>
          <Link to="/2">
            <span className="episode-number">Episode II</span> - Attack of The Clones
          </Link>
        </li>
        <li>
          <Link to="/3">
            <span className="episode-number">Episode III</span> - Revenge Of The Sith
          </Link>
        </li>
        <li>
          <Link to="/4">
            <span className="episode-number">Episode IV</span> - A New Hope
          </Link>
        </li>
        <li>
          <Link to="/5">
            <span className="episode-number">Episode V</span> - The Empire Strikes Back
          </Link>
        </li>
        <li>
          <Link to="/6">
            <span className="episode-number">Episode VI</span> - Return of The Jedi
          </Link>
        </li>
        <li>
          <Link to="/7">
            <span className="episode-number">Episode VII</span> - The Force Awakens
          </Link>
        </li>
        <li>
          <Link to="/8">
            <span className="episode-number">Episode VIII</span> - The Last Jedi
          </Link>
        </li>
        <li>
          <Link to="/9">
            <span className="episode-number">Episode IX</span> - The Rise of Skywalker
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default EpisodeNav;
