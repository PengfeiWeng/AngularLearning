(function () {
"use strict";

angular.module('public').controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['RegisterService'];
function MyInfoController(RegisterService) {
  var $ctrl = this;
  $ctrl.info =  RegisterService.getInfo();
  $ctrl.item =  RegisterService.getFavoriteItem();
}

})();
