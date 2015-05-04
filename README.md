# blazy.js
Lazy-load javascript lightweight lib

## Depends
* [Animate.css](http://daneden.github.io/animate.css/)
* [JQuery](https://jquery.com/)

---
### Just include library in your page
```html
<link rel="stylesheet" type="text/css" href="blazy.min.css">
<script type="text/javascript" src="blazy.min.js"></script>
```
# API
All API functions are available from object ```Blazy``` (`$image` is `img` in jQuery wrapping): 

* `getImages()` returns all blazy-images in jQuery wrapping
* `hideImage($image)` hiding image
* `loadImage($image)` loads image and shows one
* `update()` updates all images (show or hide ones)
* `getOptions()` returns options object
* `start({})` restarts Blazy with user's options

# Options object
```javascript
{
	effect: 'fadeIn', // effect name from lib Animate.css
	selectorAttr: 'blazy', // selector watching for
	readyClass: 'blazy-ready' // ready class when image is loaded & shown
}
```

# Events
* `blazy.image.loaded` - fired when image is loaded & shown
* `blazy.image.hidden` - fired when image is hidden

# Example
```html
<img src="#" id="2" blazy="http://lorempixel.com/200/200/city/2">
```
will load image by url from ```blazy``` attribute when image will visible in window and hide image when image is not visible

