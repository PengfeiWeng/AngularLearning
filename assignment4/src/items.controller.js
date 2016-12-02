(function () {
  'use strict';

  angular.module('MenuApp').controller('ItemsCtrl', ItemsCtrl);

  ItemsCtrl.$inject = ['items'];
  function ItemsCtrl(items) {
    this.items = items;
  }
})();
