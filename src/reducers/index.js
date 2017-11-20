import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import airlineReducer from './airlineReducer';
import airlinePortReducer from './airlinePortReducer';
import destAirlineReducer from './destAirlineReducer';
import salesHistoryReducer from './salesHistoryReducer';
import ajaxCallReducer from './ajaxCallReducer';

const rootReducer = combineReducers({
  loading: ajaxCallReducer,
  form: formReducer,
  authInfo: authReducer,
  airline: airlineReducer,
  airlinePort: airlinePortReducer,
  counties: destAirlineReducer,
  salesHistory: salesHistoryReducer
});

export default rootReducer;
