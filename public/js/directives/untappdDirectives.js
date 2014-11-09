angular.module('untappdApp')
.directive('userblock', function(){
  return{
    restrict:'EA',
    replace:true,
    templateUrl: '/views/partials/UserBlock.html'
  };
})
