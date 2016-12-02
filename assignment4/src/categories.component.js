(function () {
  'use strict';

  angular.module('MenuApp').component('categories', {
    restrict: 'E',
    templateUrl: 'src/templates/categories.template.html',
    bindings: {
      categoryList: '<'
    }
  });
})();
