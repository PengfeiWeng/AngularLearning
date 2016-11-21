(function (){
  'use strict';
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {
    var ctrl1 = this;
    ctrl1.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

    ctrl1.buyItem = function (index) {
      ShoppingListCheckOffService.buyItem(index);
    };
  }

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var ctrl2 = this;
    ctrl2.boughtItems = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    this.toBuyItems = [
      { name: "cookies", quantity: 10 },
      { name: "dumplings", quantity: 5 },
      { name: "chips", quantity: 4 },
      { name: "milk", quantity: 5 },
      { name: "donuts", quantity: 11 },
    ];

    this.boughtItems = [];

    this.getToBuyItems = function() {
      return this.toBuyItems;
    };

    this.getBoughtItems = function () {
      return this.boughtItems;
    };

    this.buyItem = function (index) {
      var item = this.toBuyItems.splice(index, 1);
      this.boughtItems.push(item[0]);
    }
  }
})();
