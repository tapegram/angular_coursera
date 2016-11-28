(function () {
"use strict";

angular.module('public')
.component('signUp', {
  templateUrl: 'src/public/sign-up/sign-up.html',
  controller: SignUpController,
  controllerAs: 'signUpCtrl'
});


SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var signUpCtrl = this;

  signUpCtrl.user = {};

  signUpCtrl.submitForm = function() {
    signUpCtrl.shortNameMessage = ""; //Clear.

    var shortName = signUpCtrl.user.fav_short_name;
    var promise = MenuService.getMenuItem(shortName);

    promise.then(function (response) {
      // Cache the result.
      MenuService.favorite = response.data;
      MenuService.user = signUpCtrl.user;

      signUpCtrl.resultMessage = "Your information has been saved";

    }, function(data) {
      // Handle error here
      signUpCtrl.resultMessage = "No such menu number exists.";
    })
  }


}

})();
