(function(window) { 
	var byeSpeaker = {};

	byeSpeaker.speakWord = "Good Bye";
	byeSpeaker.speak = function (what) {
		console.log(byeSpeaker.speakWord + " " + what);
	}

window.byeSpeaker = byeSpeaker;

})(window);
