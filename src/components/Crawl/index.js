import React from 'react';

const Crawl = ({ info }) => {
  return (
    <div className="crawl">
      <div className="crawl__background"></div>

      <div className="crawl__transform">
        <div className="crawl__text">
          <h1>{info.topic}</h1>
          <h2>{info.title}</h2>
          {info.crawl.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Crawl;
