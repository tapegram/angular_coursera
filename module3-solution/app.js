(function(){
  var app = angular.module('NarrowItDownApp', []);
  app.controller('NarrowItDownController', NarrowItDownController);
  app.service('MenuSearchService', MenuSearchService);
  app.constant('APIMenuItems', 'https://davids-restaurant.herokuapp.com/menu_items.json/');
  app.directive('foundItems', FoundItemsDirective);

  NarrowItDownController.$inject = ['MenuSearchService'];
  MenuSearchService.$inject = ['$http','APIMenuItems'];

  function NarrowItDownController(MenuSearchService){
    var narrowItDown = this;

    narrowItDown.found = [];
    narrowItDown.searchText = "";
    narrowItDown.showMessage = false;

    narrowItDown.search = function(){
      narrowItDown.found = [];

      if (narrowItDown.searchText.length > 0){
        narrowItDown.found = MenuSearchService.getMatchedSearchService(narrowItDown.searchText);
      }

      narrowItDown.showMessage = narrowItDown.found.length < 1;
    };

    narrowItDown.onRemove = function(index){
      narrowItDown.found.splice(index,1);
    }
  }

  function MenuSearchService($http, APIMenuItems){
    var service = this;

    service.getMatchedSearchService = function(searchText){
      var promise = $http({
        method: "GET",
        url: (APIMenuItems)
      });

      var foundItems = [];

      promise.then(function (result) {
        // process result and only keep items that match.
        var menu_items = result.data.menu_items;

        menu_items.forEach(function(item){
          if (item.description.indexOf(searchText) !== -1){
            foundItems.push(item);
          }
        });
      });

      return foundItems;
    };
  }

  function FoundItemsDirective(){
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        found: '<',
        onRemove: '&'
      }
    };

    return ddo;
  }


})();
