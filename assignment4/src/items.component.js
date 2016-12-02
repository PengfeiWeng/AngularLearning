(function () {
  'use strict';

  angular.module('MenuApp').component('items', {
    restrict: 'E',
    templateUrl: 'src/templates/items.template.html',
    bindings: {
      itemList: '<'
    }
  });
})();
