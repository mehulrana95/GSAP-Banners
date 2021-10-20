var initBanner = (function() {
	"use strict";
	var timeline;
	var width;
	var height;
	
	function initBanner() {
		// Assign any variables here
		width = 300;
		height = 250;
		// takes all DOM els with ids and assigns them to a global var with the name of the id
		idsToVars();
		initAnimation();
		wrapper.className += 'show';

		startAnimation();		
	}

	function initAnimation() {
		timeline = new TimelineMax({
			delay: 0.2,
			paused: true
		});

		timeline
			.addLabel('frame1')
				.from(logo, 0.6, { opacity: 0 }, 'frame1')
				.from(copy, 0.8, { opacity: 0 })
			.addLabel('frame2', '+=0.5')
				.fromTo(cta, 0.4, { y: '110%', opacity: 0 }, { y: '0%', opacity: 1 }, 'frame2');

		// Log duration of timeline
		console.log('Animation Duration: ' + timeline.duration() + 's');
	}

	function startAnimation() {
		timeline.play();
	}

	function idsToVars() {
		[].forEach.call(document.querySelectorAll('*'), function(el) {
			if (el.id) window[el.id] = el;
		});
	}

	return initBanner;
})();
