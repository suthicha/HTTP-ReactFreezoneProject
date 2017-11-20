import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ajaxCallReducer from './ajaxCallReducer';

const rootReducer = combineReducers({
  loading: ajaxCallReducer,
  form: formReducer
});

export default rootReducer;
