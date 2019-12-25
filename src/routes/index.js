import React from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';

import { history } from './history';

import Home from 'pages/Home';
import Episode from 'pages/Episode';
import NotFound from 'pages/NotFound';

const Routes = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:episode" component={Episode} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </BrowserRouter>
);

export default Routes;
