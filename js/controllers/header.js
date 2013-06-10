(function () {
	"use strict";
	GuessingNumber.controller("header", function($scope, settings) {
		$scope.data = {
			title: settings.title
		};
	});

})();
