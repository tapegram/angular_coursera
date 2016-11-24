(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('APIMenuItems', 'https://davids-restaurant.herokuapp.com/');


MenuDataService.$inject = ['$http', 'APIMenuItems']
function MenuDataService($http, APIMenuItems) {
  var service = this;

  service.getAllCategories = function() {
    var promise = $http({
      method: "GET",
      url: (APIMenuItems + 'categories.json')
    });

    return promise;
  }

  service.getItemsForCategory = function(categoryShortName) {
    var promise = $http({
      method: "GET",
      url: (APIMenuItems + 'menu_items.json'),
      params: {category: categoryShortName}
    });

    return promise;
  }
}

})();
