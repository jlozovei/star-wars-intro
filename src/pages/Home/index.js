import React from 'react';

import Logo from 'components/Logo';
import EpisodeNav from 'components/EpisodeNav';

const Home = () => {
  return (
    <React.Fragment>
      <Logo />
      <h1>Star Wars Intro</h1>
      <p>Select the episode below and see the opening crawl made with HTML, CSS and JS!</p>

      <EpisodeNav />
    </React.Fragment>
  );
};

export default Home;
