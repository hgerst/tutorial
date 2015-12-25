"use strict";

(function() {
	$(document).ready(function(){
		$("h2").click(hideHeaders);
	});
	
	function hideHeaders() {
		$("h2").hide();
	}
	
})();