var gulp = require('gulp'),
	$ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');

gulp.task('server', function() {
	browserSync({
		server: {
			baseDir: "./"
		},
		browser: "google chrome"
	});
});

gulp.task('sass', function () {
	return gulp.src(['./sass/**/*.sass', './sass/**/*.scss'])
		.pipe($.sourcemaps.init())
		.pipe($.sass({
			indentedSyntax: true,
			errLogToConsole: true,
			outputStyle: 'compressed'
		}))
		.pipe($.autoprefixer('last 3 version'))
		// .pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
	gulp.watch(['./sass/**/*.sass', './sass/**/*.scss'], ['sass']);
});

gulp.task('default', ['server', 'sass', 'watch']);