(function () {
	"use strict";
	GuessingNumber.controller("instructions", function($scope, $location, settings) {
		$scope.data = {
			button: "Start!",
			messages: {
				instruction: settings.messages.instruction
			}
		};

		$scope.start = function() {
			$location.url('/game');
		};

	});

})();
