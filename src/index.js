import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import routes from './routes';
import jwtDecode from 'jwt-decode';
import Helper from './api/helper';
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

var loggedLogin = false;

setInterval(()=>{
  try{
    let jwtToken    = Helper.getCacheStorage('jwtToken');
    let { token }   = jwtToken.auth;
    let data        = jwtDecode(token);
    
    if (data) {
      let { exp }   = data;
      let expDate   = new Date(exp*1000).getTime();
      let curDate   = new Date().getTime();
      
      if ((expDate - curDate) < 0){
        
        if (!loggedLogin) {
          browserHistory.push('/login');
          Helper.clearCache();
          store.dispatch({type: 'LOGOUT_AUTH_SUCCESS'});
        }
        loggedLogin = true;
      };
    }
  }catch (err) {}
  
},1000);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('#app'));
