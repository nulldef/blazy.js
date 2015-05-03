"use strict";

var Blazy = (function ($) {
	var options = {
		effect: 'fadeIn',
		selectorAttr: 'blazy',
		readyClass: 'blazy-ready'
	};

	var $images = [];

	var $findImages = function () {
		if ($images.length == 0) $images = $('[' + options.selectorAttr + ']');
		return $images;
	}

	var bindLoad = function ($image) {
		if (!$image) return;

		$image.load(function () {
			$(this).addClass(options.readyClass + ' ' + options.effect);
		});
	}

	var initImage = function ($image) {
		bindLoad($image);
		$image.addClass('animated');
	}

	var loadImage = function ($image) {
		var url = $image.attr(options.selectorAttr);
		if (url.length == 0 || $image.hasClass(options.readyClass)) return;
		$image.attr('src', url);
	}

	var isVisible = function ($image) {
		var $doc = $(document);
		var top = $image.offset().top;
		var left = $image.offset().left;
		var height = $image.height();
		var width = $image.width();
		var dTop = $(window).scrollTop();
		var dLeft = $(window).scrollLeft();
		var dHeight = $(window).height();
		var dWidth = $(window).width();
		return top + height > dTop && top < dTop + dHeight;
	}

	var hideImage = function ($image) {
		$image.attr('src', '').removeClass(options.readyClass + ' ' + options.effect);
	}

	var onScroll = function (event) {
		$findImages().each(function (index, image) {
			var $image = $(image);
			var vis = isVisible($image);
			if (vis) loadImage($image);
			else hideImage($image);
		});
	}

	var start = function () {
		$findImages().each(function (index, image) {
			var $image = $(image);
			initImage($image);
		});
	}

	$(document).ready(function () {
		start();
		onScroll();
		$(window).scroll(onScroll);
	});
})(jQuery);