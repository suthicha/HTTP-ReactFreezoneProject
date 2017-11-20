import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import { isLoggedIn } from './security/authentication';
import LoginPage from './components/login/LoginPage';
import HomePage from './components/home/HomePage';
import * as Pages from './components/pages';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} onEnter={isLoggedIn} />
    <Route path="login" component={LoginPage}/>
    <Route path="home" component={HomePage} />
    <Route path="topairline" component={Pages.TopAirlinePage} onEnter={isLoggedIn} />
    <Route path="topdestairline" component={Pages.TopDestAirlinePage} onEnter={isLoggedIn} />
    <Route path="saleshistory" component={Pages.SalesHistoryPage} onEnter={isLoggedIn} />
    <Route path="profitandloss" component={Pages.ProfitAndLossAnalysisPage} onEnter={isLoggedIn} />
  </Route>
);