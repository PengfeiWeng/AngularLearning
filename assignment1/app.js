(function (){
  'use strict';
  angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.dishes = undefined;
    $scope.message = undefined;
    $scope.check = function () {
      //reset all the colors.
      $scope.green = false;
      $scope.red = false;

      if ($scope.dishes === undefined || $scope.dishes === '') {
        $scope.message = 'Please enter data first';
        $scope.red = true;
        return;
      }

      var dishes = $scope.dishes.split(',');
      for (var i=0; i<dishes.length; i++) {
        if (dishes[i].trim().length === 0){
          dishes.splice(i--, 1);
        }
      }
      if (dishes.length === 0) {
        $scope.message = 'Please enter data first';
        $scope.red = true;
      }
      else if (dishes.length <= 3) {
        $scope.message = 'Enjoy!';
        $scope.green = true;
      }
      else {
        $scope.message = 'Too much!';
        $scope.green = true;
      }
    };
  }
})();
