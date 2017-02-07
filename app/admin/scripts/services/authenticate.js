(function(){
  angular
  .module("imdbadmin")
  .factory("authenticate",authenticate);
  authenticate.$inject = ["$resource","$window","resources","$state"];
  function authenticate($resource,$window,resources,$state) {
    var saveToken = function(token) {
      $window.localStorage["user"] = token;
    };
    var getToken = function() {
      return $window.localStorage["user"];
    };
    var register = function(vm) {
      vm.user.$save(function(data){
        if(data) {
          saveToken(data.token);
          $state.go("login");
        }
        else {
          return "not found";
        }
      });
    };
    var login = function(vm) {
      vm.user.$save(function(data){
        if(data) {
          saveToken(data.token);
          $state.go("dashboard");
        }
        else {
          $state.go("login");
        }
      });
    };
    var isLoggedIn = function() {
      var token = getToken();
      if(token) {
        payload = token.split(".")[1];
        payload = $window.atob(payload);
        payload = JSON.parse(payload);
        return payload.exp > Date.now() / 1000;
      }
      else {
        return false;
      }
    };
    var currentUser = function() {
      if(isLoggedIn()) {
        var token = getToken();
        payload = token.split(".")[1];
        payload = $window.atob(payload);
        payload = JSON.parse(payload);
        return {
          email:payload.email,
          name:payload.name
        };
      }
    };
    return {
      saveToken:saveToken,
      getToken:getToken,
      register:register,
      isLoggedIn:isLoggedIn,
      currentUser:currentUser,
      login:login
    };
  };
})();
