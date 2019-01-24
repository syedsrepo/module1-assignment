(
  function() {
    'use strict';
    var app = angular.module("LunchCheck",[]);

    app.controller("LunchCheckController", LunchCheckController);
    LunchCheckController.$inject = ['$scope']
    function LunchCheckController($scope) {
      $scope.lunchMenu = "";
      $scope.checkIfTooMuch = function() {
        var splitArray = $scope.lunchMenu.split(',');
        var mealCount = splitArray.length;
        for(var i = 0; i < splitArray.length; i++)
        {
           console.log(splitArray[i]);
        }
        if($scope.lunchMenu.length === 0) {
            $scope.message = "Please enter data first"
        }
        else if (mealCount <= 3){
          $scope.message = "Enjoy! "
        }
        else {
          $scope.message = "Too much!"
        }

      }
    };

  }

)();
