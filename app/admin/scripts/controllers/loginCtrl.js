(function(){
  angular
  .module("imdbadmin")
  .controller("loginCtrl",loginCtrl);
  loginCtrl.$inject = ["authenticate","resources"];
  function loginCtrl(authenticate,resources) {
    var vm = this;
    vm.user = resources.login().prototype;
    vm.enablename = false;
    vm.login = function() {
      authenticate.login(vm);
    }
  }
})();
