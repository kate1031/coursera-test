(function(window) { 
	var helloSpeaker = {};

	helloSpeaker.speakWord = "Hello";
	helloSpeaker.speak = function (what) {
		console.log(helloSpeaker.speakWord + " " + what);
	}

window.helloSpeaker = helloSpeaker;

})(window);




