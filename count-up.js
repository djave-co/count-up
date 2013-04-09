/*
 *
 *	Count up
 *		https://github.com/sheepysheep60/count-up
 *	
 *	David Williams
 *		djave.co.uk
 *
*/

(function( $ ) {
	$.fn.countUp = function(options) {
  
		var settings = $.extend( {
			'startFrom'		: 0,
			'countTo'		: Number(this.text()),
			'start'			: 10,
			'frequency'		: 200,
			'jump'			: 1,
			'target'		: this,
			'log'			: false,
			'callback'		: ''
		}, options);

		var intRegex = /^\d+$/;
		var current_number;
		var offset;

		if(intRegex.test(settings.countTo) && intRegex.test(settings.startFrom) ) {
			// Both settings are integers, get started:
			if(settings.startFrom<settings.countTo){
				offset = settings.jump;
			}else{
				offset = -1 * settings.jump;
			}
			current_number = settings.startFrom;
			settings.target.html(current_number);

			checkNumber();
			var timer;
			function checkNumber(){
				if(offset<0){
					if(current_number <= settings.countTo)
					{
						current_number = settings.counTo;
						clearTimeout(timer);
						if (typeof settings.callback == 'function') { // make sure the callback is a function
					        settings.callback.call(this); // brings the scope to the callback
					    }
					}
					else
					{
						current_number += offset;
						timer=setTimeout(function(){checkNumber()},settings.frequency);
					}
				}else{
					if(current_number >= settings.countTo)
					{
						current_number = settings.counTo;
						clearTimeout(timer);
						if (typeof settings.callback == 'function') { // make sure the callback is a function
					        settings.callback.call(this); // brings the scope to the callback
					    }
					}
					else
					{
						current_number += offset;
						timer=setTimeout(function(){checkNumber()},settings.frequency);
					}
				}
				settings.target.html(current_number);
				if(settings.log){console.log(settings.target.attr('id'))};
			}	

		}else{
		   if(settings.log){console.log('From countUp: Please use an integer for startFrom and countTo arguments.');}
		}
	};
})( jQuery );