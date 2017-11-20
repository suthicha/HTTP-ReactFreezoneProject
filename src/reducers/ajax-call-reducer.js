import * as types from '../actions/action-types';
import initState from './initialize-state';

export default function (state = initState.loading, action) {
  switch(action.type) {
    case types.BEGIN_AJAX_CALL:
      return true;
    case types.END_AJAX_CALL:
      return false;
    case types.AJAX_CALL_ERROR:
      return false;
    default:
      return state;
  }
}