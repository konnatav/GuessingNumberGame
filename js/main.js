$(document).ready(function () {

	var AppView = Backbone.View.extend({
		el: $("body"),
		initialize: function() {
			this.min = numbers['min'];
			this.max = numbers['max'];
			$(".number.min").text(this.min);
			$(".number.max").text(this.max);
		},
		events: {
			"click #start": "startGame",
			"click .game-section button": "guessNumber"
		},
		startGame: function(event) {
			$(".instructions").addClass("hidden");
			$(".game-section").removeClass("hidden");
			// Calculate the first guessed number
			this.number = this.min + Math.round((this.max - this.min) / 2);
			appview.displayNumber(".number", this.number);
		},
		displayNumber: function(element, number) {
			$(element).text(number);
		},
		guessNumber: function(event) {
			var element = event.currentTarget;
			var elementId = $(element).attr("id");

			if (elementId === "equal") {
				// Display message
				$(".game-section").find("p").text(messages['success']);
				// Remove the buttons
				$(".game-section").find("button").addClass("hidden");
			} else if (elementId === "small") {
				if (this.number === 1) {
					this.number = 0;
				} else {
					this.min = this.min;
					this.max = this.number;
					// Calculate the next number
					this.number = this.min + Math.round((this.max - this.min) / 2);
				}
				appview.displayNumber(".number", this.number);

			} else if (elementId === "big") {
				this.min = this.number;
				this.max = this.max;
				// Calculate the next number
				this.number = this.min + Math.round((this.max - this.min) / 2);
				appview.displayNumber(".number", this.number);
			}
		}
	});

	var appview = new AppView();

});