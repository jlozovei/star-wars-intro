import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';
import Episode from 'pages/Episode';
import Page404 from 'pages/404';

const Routes = () => {
  const basename = '/star-wars-intro';

  return (
    <BrowserRouter basename={basename}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:episode" component={Episode} />
        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
