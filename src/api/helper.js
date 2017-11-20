class Helper {
  
  static setCacheStorage(key, data){
    try{
      localStorage.setItem(key, JSON.stringify(data));
    }catch(error){}
  }

  static getCacheStorage(key) {
    try{
      return JSON.parse(localStorage.getItem(key));
    }catch(error){}
    return undefined;
  }

  static clearCache() {
    try{
      var cacheTotal = localStorage.length;
      for(var i = 0; i < cacheTotal; i++) {
        var keyName = localStorage.key(i);
        if(keyName != 'rememberUser'){
          localStorage.removeItem(keyName);
        }
      }
    }catch(error){}
  }
}

export default Helper;