(function(){
  angular.module("imdbadmin")
  .factory("registerFactory",registerFactory);
  function registerFactory($resource) {
    return $resource("http://localhost:3000/register/");
  };
})();
