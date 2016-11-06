(function(){
  var myapp = angular.module('ShoppingListCheckOff', []);
  myapp.service('ShoppingListCheckOffService',ShoppingListCheckOffService);
  ToBuyController.$inject = ['$scope','ShoppingListCheckOffService'];
  AlreadyBoughtController.$inject = ['$scope','ShoppingListCheckOffService'];

  myapp.controller('ToBuyController', ToBuyController);
  myapp.controller('AlreadyBoughtController', AlreadyBoughtController);

  function ToBuyController($scope, ShoppingListCheckOffService){
    var toBuy = this;

    toBuy.toBuyList = ShoppingListCheckOffService.getToBuyList();

    toBuy.buyItem = function(index){
      ShoppingListCheckOffService.buyItem(index);
    }

  }

  function AlreadyBoughtController($scope, ShoppingListCheckOffService){
    var alreadyBought = this;

    alreadyBought.alreadyBoughtList = ShoppingListCheckOffService.getAlreadyBoughtList();

  }

  function ShoppingListCheckOffService(){
    var service = this;

    // Pre-populated list.
    var toBuyList = [
      {name: "cookies", quantity: 10},
      {name: "chips", quantity: 5},
      {name: "candies", quantity: 3},
      {name: "pizzas", quantity: 100},
      {name: "pepto bismol", quantity: 15}
    ];

    var alreadyBoughtList = [];

    service.getToBuyList = function() {
      return toBuyList;
    };

    service.getAlreadyBoughtList = function(){
      return alreadyBoughtList;
    };

    service.buyItem = function(index) {
      if (index > -1 && index < toBuyList.length){
        // push onto bought list.
        alreadyBoughtList.push(toBuyList[index]);

        // remove from toBuyList
        toBuyList.splice(index, 1);
      }
    }
  }
})();
