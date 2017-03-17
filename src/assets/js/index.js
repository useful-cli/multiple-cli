$(document).ready(function() {
	'use strict';
	var nav = $('nav');
	var navLi = $('nav ul li');
	var href = window.location.href;
	href = href.split(/\//).pop().replace('.html', '');
	for (var i = 0, len = navLi.length; i < len; i++) {
		if (($(navLi[i]).attr('data-nav') === href)) {
			$(navLi[i]).addClass('nav-active');
			i = len;
		}
	}
});