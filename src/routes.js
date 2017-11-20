import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import * as Pages from './components/pages';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Pages.HomePage} />
    <Route path="home" component={Pages.HomePage} />
  </Route>
);