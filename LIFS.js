//javascript : (function () {
	$('head').append("<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.8.1/js/lightbox.min.js'></script>");
	$('head').append($("<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.8.1/css/lightbox.css' type='text/css' media='screen' />"));
	$("a[href*='imgur']").each(
		function () {
			$(this).attr("href",$(this).attr("href").replace("imgur","filmot"));
			$(this).attr("data-lightbox", "lb")
	});
	});
//})()
