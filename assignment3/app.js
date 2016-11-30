(function(){
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective)
  .constant('ApiPath', "https://davids-restaurant.herokuapp.com/menu_items.json");

  MenuSearchService.$inject = ['$http', 'ApiPath'];
  function MenuSearchService($http, ApiPath) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: "GET",
        url: ApiPath,
      }).then(function(result) {
        var foundItems = [];
        var menuItems = result.data.menu_items;
        for (var item of menuItems) {
          if (searchTerm == null || searchTerm === ''){
            continue;
          }
          if (item.description.includes(searchTerm)) {
            foundItems.push(item);
          }
        }
        return foundItems;
      });
    };
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var ctrl = this;
    ctrl.found = undefined;
    ctrl.term = undefined;
    ctrl.searchItemsByTerm = function() {
      MenuSearchService.getMatchedMenuItems(ctrl.term).then(function(result) {
        ctrl.found = result;
      });
    };
    ctrl.removeItem = function (index) {
      if (index < ctrl.found.length) {
        ctrl.found.splice(index, 1);
      }
    };
  }

  function FoundItemsDirective() {
    var foundItemsDirective = {
      restrict: 'E',
      templateUrl: 'foundItems.html',
      scope: {
        foundItems: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'list',
      bindToController: true
    };

    return foundItemsDirective;
  }

  function FoundItemsDirectiveController() {

  }
})();
