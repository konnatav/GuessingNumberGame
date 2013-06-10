(function () {
	"use strict";
	GuessingNumber.controller("game", function($scope, $location, settings) {
		$scope.data = {
			messages: {
				guessedNumber: settings.messages.guessedNumber
			},
			numbers: {
				minNumber: settings.numbers.minNumber,
				maxNumber: settings.numbers.maxNumber,
				guessed: settings.numbers.maxNumber / 2
			}
		};
		/**
		 * It calculates the guessed number.
		 */
		$scope.calculateNumber = function() {
			$scope.data.numbers.guessed = $scope.data.numbers.minNumber + Math.round(($scope.data.numbers.maxNumber - $scope.data.numbers.minNumber) / 2);
		};

		/**
		* It guesses the next number
		*/
		$scope.numberGuessing = function(number) {
			if (number === 'equal') {
				$location.url('/success');
			} else if (number === 'less') {
				if ($scope.data.numbers.guessed === 1) {
					$scope.data.numbers.guessed = 0;
				} else {
					$scope.data.numbers.minNumber = $scope.data.numbers.minNumber;
					$scope.data.numbers.maxNumber = $scope.data.numbers.guessed;
					// Calculate the next number
					$scope.calculateNumber();
				}
			} else if (number === 'greater') {
				$scope.data.numbers.minNumber = $scope.data.numbers.guessed;
				$scope.data.numbers.maxNumber = $scope.data.numbers.maxNumber;
				$scope.calculateNumber();
			}
		};
	});

})();