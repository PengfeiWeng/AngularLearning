(function () {
"use strict";

angular.module('public').controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'RegisterService'];
function SignUpController(MenuService, RegisterService) {
  var $ctrl = this;

  $ctrl.info = {};
  $ctrl.data = undefined;

  $ctrl.submit = function(){
    $ctrl.getItemPromise.then(function(){
      if ($ctrl.data) {
        $ctrl.message = 'Your information has been saved.';
        RegisterService.saveInfo($ctrl.info, $ctrl.data);
      }
    });
  };

  $ctrl.tryGetItem = function () {
    $ctrl.getItemPromise = MenuService.getMenuItem($ctrl.info.menuItemNumber).then(
      function(result){
        $ctrl.data = result.data;
        $ctrl.success = true;
        $ctrl.message = undefined;
      },
      function(error) {
        $ctrl.data = undefined;
        $ctrl.success = false;
        $ctrl.message = 'No such menu number exists.';
      }
    );
  };
}

})();
