(function(){
  angular
  .module("imdbadmin")
  .factory("movieFactory",movieFactory);
  function movieFactory(resources) {
    var newMovie = function(vm) {
      console.log(vm.movie);
      vm.movie.$save(function(data){
        console.log("saved");
      });
    };
    return {
      newMovie:newMovie
    }
  }
})();
