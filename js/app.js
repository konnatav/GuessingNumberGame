var GuessingNumber = angular.module("GuessingNumber", []);

var settings = {
	title: "Guessing Number Game",
	button: "Start!",
	messages: {
		instruction: "Choose a number between 0-100. When you are ready click the button below to start the game!",
		guessedNumber: "Number: ",
		success: "Yeah I found it!"
	},
	numbers: {
		minNumber: 0,
		maxNumber: 100
	}
};

GuessingNumber.constant('settings', settings);

GuessingNumber.config(function($routeProvider, $locationProvider) {

	$locationProvider.html5Mode(false).hashPrefix('!');

	$routeProvider
	.when('/', {
		templateUrl: 'views/instructions.html',
		controller: 'instructions'
	})
	.when('/game', {
		templateUrl: 'views/game.html',
		controller: 'game'
	})
	.when('/success', {
		templateUrl: 'views/success.html',
		controller: 'success'
	});
});