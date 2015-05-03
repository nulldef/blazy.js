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
			var $images = $(this);
			$image.addClass(options.readyClass + ' ' + options.effect);
			$image.trigger('blazy.image.loaded');
			$image.attr('width', $image.width());
			$image.attr('height', $image.height());
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
		var $win = $(window);
		var top = $image.offset().top;
		var height = $image.height();
		var dTop = $win.scrollTop();
		var dHeight = $win.height();
		return top + height > dTop && top < dTop + dHeight;
	}

	var hideImage = function ($image) {
		$image.attr('src', '').removeClass(options.readyClass + ' ' + options.effect);
		$image.trigger('blazy.image.hidden');
	}

	var checkVisibility = function (event) {
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

		checkVisibility();
		$(window).scroll(checkVisibility);
	}

	$(document).ready(function () {
		start();
	});

	// API
	return {
		getImages: function () {
			return $images;
		},
		hideImage: function ($image) {
			hideImage($image);
		},
		loadImage: function ($image) {
			loadImage($image);
		},
		update: function () {
			return checkVisibility();
		},
		start: function (opts) {
			options = $.extend(options, opts);
			start();
		},
		getOptions: function () {
			return options;
		}
	}
})(jQuery);