(function(){
  angular
  .module("imdbadmin")
  .controller("registerCtrl",registerCtrl);
  registerCtrl.$inject = ["authenticate","resources"];
  function registerCtrl(authenticate,resources) {
    var vm = this;
    vm.enablename = true;
    vm.user = new resources.register().prototype;
    vm.register = function() {
      authenticate.register(vm);
    }
  }
})();
