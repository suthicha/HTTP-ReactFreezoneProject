import Helper from '../../api/helper'

export const loggedIn = (nextState, replace) => { 
  const jwtToken = Helper.getCacheStorage('jwtToken');
  if (jwtToken == undefined){
    replace({
      pathname: '/login'
    });
  }
}