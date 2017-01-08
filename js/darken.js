jQuery(window).scroll(function() {
	var fromTopPx = 200;
	var scrolledFromTop = jQuery(window).scrollTop();
	if(scrolledFromTop > fromTopPx) {
		jQuery('#navbar').addClass('darken');
	} else {
		jQuery('#navbar').removeClass('darken');
	}
});