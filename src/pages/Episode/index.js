import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Crawl from 'components/Crawl';
import Intro from 'components/Intro';
import Logo from 'components/Logo';
import SeeMore from 'components/SeeMore';
import NotFound from 'components/NotFound';

import starWarsOpeningTheme from 'assets/audio/star-wars-opening-theme.mp3';

const Episode = () => {
  const { episode } = useParams();
  const [data, setData] = useState('');

  useEffect(() => {
    const audio = document.createElement('audio');
    audio.src = starWarsOpeningTheme;

    const AUDIO_DELAY = 5500;
    let audioTimeout = '';

    try {
      const crawl = require(`data/${episode}.json`);
      setData(crawl);

      audioTimeout = setTimeout(() => {
        audio.play();
      }, AUDIO_DELAY);
    } catch (err) {
      console.error(err);
    }

    return () => {
      audio.pause();
      if (audioTimeout !== '') clearTimeout(audioTimeout);
    };
  }, [episode]);

  return (
    <React.Fragment>
      {data ? (
        <React.Fragment>
          <Intro />
          <Logo isEpisode={true} />
          <Crawl info={data} />
          <SeeMore />
        </React.Fragment>
      ) : (
        <NotFound isEpisode={true} />
      )}
    </React.Fragment>
  );
};

export default Episode;
