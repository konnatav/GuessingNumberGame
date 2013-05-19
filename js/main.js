$(document).ready(function () {

	var AppView = Backbone.View.extend({
		el: $("body"),
		/**
		 * Initiates the game. It sets the min
		 * and the max numbers.
		 */
		initialize: function() {
			this.min = settings['numbers']['min'];
			this.max = settings['numbers']['max'];
			$(".number.min").text(this.min);
			$(".number.max").text(this.max);
		},
		events: {
			"click #start": "startGame",
			"click .game-section button": "guessNumber"
		},
		/**
		 * It displays the game's page.
		 * @param {event} object The triggered event
		 */
		startGame: function(event) {
			$(".instructions").addClass("hidden");
			$(".game-section").removeClass("hidden");
			// Calculate the first guessed number
			appview.calculateNumber(event);
			appview.displayNumber(".number", this.number);
		},
		/**
		 * It displays the guessed numbers.
		 * @param {element} element The dom element
		 * @param {number} number The guessed number
		 */
		displayNumber: function(element, number) {
			$(element).text(number);
		},
		/**
		 * It guesses the number.
		 * @param {event} object The triggered event
		 */
		guessNumber: function(event) {
			var element = event.currentTarget;
			var elementId = $(element).attr("id");

			if (elementId === "equal") {
				// Display message
				$(".game-section").find("p").text(settings['messages']['success']);
				// Remove the buttons
				$(".game-section").find("button").addClass("hidden");
			} else if (elementId === "small") {
				if (this.number === 1) {
					this.number = 0;
				} else {
					this.min = this.min;
					this.max = this.number;
					// Calculate the next number
					appview.calculateNumber(event);
				}
				appview.displayNumber(".number", this.number);

			} else if (elementId === "big") {
				this.min = this.number;
				this.max = this.max;
				appview.calculateNumber(event);
				appview.displayNumber(".number", this.number);
			}
		},
		/**
		 * It calculates the guessed number.
		 * @param {event} object The triggered event
		 */
		calculateNumber: function(event) {
			this.number = this.min + Math.round((this.max - this.min) / 2);
		}
	});

	var appview = new AppView();

});