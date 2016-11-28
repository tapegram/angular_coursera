(function () {
"use strict";

angular.module('public')
.component('myInfo', {
  templateUrl: 'src/public/my-info/my-info.html',
  controller: MyInfoController,
  controllerAs: 'myInfoCtrl'
});


MyInfoController.$inject = ['MenuService'];
function MyInfoController(MenuService) {
  var myInfoCtrl = this;

  myInfoCtrl.user = MenuService.user;
  myInfoCtrl.favorite = MenuService.favorite;
  myInfoCtrl.isRegistered = myInfoCtrl.user && myInfoCtrl.favorite;


}

})();
