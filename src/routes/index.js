import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';
import Episode from 'pages/Episode';
import Page404 from 'pages/404';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:episode" component={Episode} />
        <Route path="*" component={Page404} />
      </Switch>
    </Router>
  );
};

export default Routes;
