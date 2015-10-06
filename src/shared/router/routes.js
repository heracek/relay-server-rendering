import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../../client/screens/App/index.js';
import Home from '../../client/screens/App/screens/Home/index.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
  </Route>
);
