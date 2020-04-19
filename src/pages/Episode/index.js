import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Crawl from 'components/Crawl';
import Intro from 'components/Intro';
import Logo from 'components/Logo';
import SeeMore from 'components/SeeMore';
import NotFound from 'components/NotFound';

const Episode = () => {
  const { episode } = useParams();
  const [data, setData] = useState('');

  useEffect(() => {
    try {
      const crawl = require(`data/${episode}.json`);
      setData(crawl);
    } catch (err) {
      console.error(err);
    }
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
