(function () {
"use strict";

angular.module('public').service('RegisterService', RegisterService);

function RegisterService() {
  var service = this;

  service.data = undefined;
  service.info = undefined;

  service.saveInfo = function (info, data) {
    service.info = info;
    service.data = data;
  };

  service.getInfo = function () {
    return service.info;
  };

  service.getFavoriteItem = function () {
    return service.data;
  };
}

})();
