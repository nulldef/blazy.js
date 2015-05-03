var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minCss = require('gulp-minify-css');
var smaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

gulp.task('min.js', function () {
	gulp.src(['blazy.js'])
		.pipe(smaps.init())
			.pipe(uglify())
		.pipe(smaps.write())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('./'));
});

gulp.task('min.css', function () {
	gulp.src(['blazy.css'])
		.pipe(smaps.init())
			.pipe(minCss({compatibility: 'ie8'}))
		.pipe(smaps.write())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('./'));
});

gulp.task('min', ['min.js', 'min.css']);