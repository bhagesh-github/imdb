(function(){
  angular
  .module("imdbadmin")
  .controller("addMovieCtrl",addMovieCtrl);
  addMovieCtrl.$inject = ["resources","movieFactory"];
  function addMovieCtrl(resources,movieFactory) {
    var vm = this;
    vm.movie = new resources.movie().prototype;
    vm.addMovie = function() {
      movieFactory.newMovie(vm);
    }
  }
})();
