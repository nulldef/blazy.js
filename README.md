# blazy.js
Lazy-load javascript lightweight lib

### Install
```bower install blazy.js --save```

Include library in your page:

```html
<link rel="stylesheet" type="text/css" href="src/blazy.css">
<script type="text/javascript" src="src/blazy.js"></script>
```

And init this one:

```javascript
Blazy.start()
```

# Options object
```javascript
{
	selectorAttr: 'blazy', // selector watching for
	readyClass: 'blazy-ready' // ready class when image is loaded & shown
}
```

# Example
```html
<img src="#" id="2" height="200" blazy="http://lorempixel.com/200/200/city/2">
```
will load image by url from `blazy` attribute when image will
visible in window and hide image when image is not visible
