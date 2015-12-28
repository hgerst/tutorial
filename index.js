"use strict";

(function() {
	$(document).ready(function(){
		$("h2").click(hideHeaders);
		$(".iv").click(function() {
			incrementIV(this, getIncrement());
		});
	});
	
	function hideHeaders() {
		$("h2").hide();
	}
	
	function getIncrement() {
		return 4;
	}
	
	function incrementIV(button, increment) {
		var ivHolder = $(button).find(".iv-value");
		var ivCount = parseInt(ivHolder.html());
		ivHolder.html(ivCount + increment);
		
	}
	
	
	
	
})();