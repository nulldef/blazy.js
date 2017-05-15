"use strict";

window.Blazy = (function () {
  var defaults = {
		selectorAttr: 'blazy',
		readyClass: 'blazy-ready'
	}

  var instance = null

  var Blazy = function (options) {
    this.options = Object.assign({}, defaults, options);
    this.images = document.querySelectorAll('[' + this.options.selectorAttr + ']')
    this.init()
  }

  Blazy.start = function (options) {
    if (!instance) instance = new Blazy(options)
    return instance
  }

  Blazy.prototype.initImage = function (image) {
    var that = this;
    image.addEventListener('load', function () {
      this.classList.add(that.options.readyClass)
    })
  }

  Blazy.prototype.isVisible = function (image) {
		var top = image.offsetTop;
		var height = image.height;
		var dTop = window.scrollY;
		var dHeight = window.innerHeight;
		return top + height > dTop && top < dTop + dHeight;
  }

  Blazy.prototype.showImage = function (image) {
    var url = image.getAttribute(this.options.selectorAttr);
		if (!url.length || image.classList.contains(this.options.readyClass)) {
      return
    }
		image.setAttribute('src', url);
  }

  Blazy.prototype.hideImage = function (image) {
    image.setAttribute('src', '')
    image.classList.remove(this.options.readyClass)
	}

  Blazy.prototype.checkVisibility = function () {
    var that = this
		this.images.forEach(function (image) {
			if (that.isVisible(image)) that.showImage(image);
			else that.hideImage(image);
		});
	}

  Blazy.prototype.init = function () {
    this.images.forEach(this.initImage.bind(this))

    this.checkVisibility()
    window.addEventListener('scroll', this.checkVisibility.bind(this))
  }

  return Blazy;
})()
