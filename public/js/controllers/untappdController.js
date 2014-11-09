angular.module('untappdApp')
.controller('untappdController', ["$scope","untappdFactory", function($scope, untappdFactory){
    //SETUP CONSTANTS and SCOPE VARIABLES
    var GET_NEARBY_USERS_ERROR = "Sorry, we had a problem getting the nearby users.";

    //SCOPE VARIABLES
    $scope.data = [];
    //ask me why i did it this way and not just $scope.nearbyusers
    $scope.data.nearbyusercheckins = [];


    //Initial dataload
    var init = function(){
      untappdFactory.getNearByUserCheckins({lat:39.847096, lng:-75.711787 }).then(setupNearByUsers, handleError);
    };
    var setupNearByUsers = function(result){

      $scope.data.nearbyusercheckins = result.data.response.checkins.items;
    };
    var handleError = function(result){
      untappdFactory.handleGenericError(GET_NEARBY_USERS_ERROR);
    };



    init();
}]);
