(function () {
	"use strict";
	GuessingNumber.controller("success", function($scope, settings) {
		$scope.data = {
			messages: {
				success: settings.messages.success
			}
		};
	});

})();
