angular.module('untappdApp')
.factory('untappdFactory', ["$http", function($http){
  return{
    getNearByUserCheckins: function(data){
      return $http({method:'get',url:'/GetUsersNearBy',params:data});
    },
    handleGenericError: function(message){
        alert(message)
    }
  }
}]);
