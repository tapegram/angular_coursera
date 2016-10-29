var myapp = angular.module('LunchCheckApp', []);
myapp.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.menu = "";
  $scope.message = "";
  $scope.checkMenu = function() {

    var menu = $scope.menu;
    if (menu === "") {
      $scope.message = "Please enter data first";
      return
    }

    menuItems = menu.split(",");

    if (menuItems.length > 3) {
      $scope.message = "Too much!";
    } else {
      $scope.message = "Enjoy!";
    }
  };
}
