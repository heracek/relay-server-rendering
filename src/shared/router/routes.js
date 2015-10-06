import React from 'react';
import Relay from 'react-relay';
import {Route, IndexRoute} from 'react-router';
import App from '../../client/screens/App/index.js';
import Home from '../../client/screens/App/screens/Home/index.js';

const ViewerQueries = {
  viewer: () => Relay.QL`query { viewer }`
};


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} queries={ViewerQueries}/>
  </Route>
);
