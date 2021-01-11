import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        Made with{' '}
        <span role="img" aria-label="love">
          ❤️
        </span>{' '}
        by{' '}
        <a href="https://jlozovei.dev" target="_blank" rel="noopener noreferrer">
          jlozovei
        </a>{' '}
        | {currentYear}
      </p>
    </footer>
  );
};

export default Footer;
