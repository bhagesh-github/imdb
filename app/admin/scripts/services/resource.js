(function(){
  angular
  .module("imdbadmin")
  .factory("resources",resources);
  function resources($resource) {
    var register = function() {
        return  $resource("http://localhost:3000/register/");
    };
    var login = function() {
      return $resource("http://localhost:3000/login/");
    };
    var movie = function() {
      return $resource("http://localhost:3000/movie/:id",{id:"@_id"},
      {
        update:{
          method:"PUT"
        }
      });
    };
    return {
      register:register,
      login:login,
      movie:movie
    };
  }
})();
