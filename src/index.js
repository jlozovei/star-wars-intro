import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import { history } from 'routes/history';

import App from './App';

import 'assets/styles/reset.css';
import 'assets/styles/fonts.css';
import 'assets/styles/custom.css';

import 'assets/styles/intro.css';
import 'assets/styles/logo.css';
import 'assets/styles/crawl.css';

import 'assets/styles/episode-nav.css';
import 'assets/styles/see-more.css';
import 'assets/styles/not-found.css';

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);
