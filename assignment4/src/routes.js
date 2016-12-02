(function () {
  'use strict';

  angular.module('MenuApp').config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // Notice: the view and the view component are two layers.
    // They need two html and two controllers.
    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'src/templates/home.template.html'
    })
    .state('categories', {
      url: '/categories',
      template: '<categories category-list="ctrl.categories"></categories>',
      controller: 'CategoriesCtrl as ctrl',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('items', {
      url: '/items/{categoryShortName}',
      template: '<items item-list="ctrl.items"></items>',
      controller: 'ItemsCtrl as ctrl',
      resolve: {
        items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }]
      }
    });
  }
})();
