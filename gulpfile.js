// Gulp File

const gulp = require("gulp"); 
const sass = require('gulp-sass');
const minify = require('gulp-minify');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const rigger = require('gulp-rigger');



const patchs = {
	cleanCSS: {
		src: "./dist/*",
		dist: "./dist"
	},
	html: {
		src: "./src/templates/index.html",
		dist: "./dist/"
	},
	scss: {
		src: "./src/scss/**/*.scss",
		dist: "./dist/css/"
	},
	js: {
		src: "./src/js/**/*.js",
		dist: "./dist/js/"
	},
	img: {
		src: "./src/img/**/*.{jpg,png,webp,gif,svg}",
		dist: "./dist/img/"
	}
	

};


const moveCLEAN = () => 
gulp.src(patchs.cleanCSS.src).
pipe(clean({
	level: 2
})).
pipe(gulp.dest(patchs.cleanCSS.dist));

const htmlTemplates= () =>
	gulp.src("./src/templates/index.html")
	.pipe(rigger())
	.pipe(gulp.dest('./dist'))
	.pipe(browserSync.stream());

const moveSCSS = () => 
gulp.src(patchs.scss.src).
pipe(sass({outputStyle: 'compressed'})).
pipe(concat('main.min.css')).
pipe(autoprefixer({
	overrideBrowserslist: ['last 2 versions'],
	cascade: false
})).
pipe(gulp.dest(patchs.scss.dist)).
pipe(browserSync.stream());

const moveJS = () => 
gulp.src(patchs.js.src).
pipe(minify()). 
pipe(gulp.dest(patchs.js.dist)).
pipe(browserSync.stream());

const moveIMG = () => 
gulp.src(patchs.img.src).
pipe(imagemin()). 
pipe(gulp.dest(patchs.img.dist)).
pipe(browserSync.stream());

const watch = () => {
	browserSync.init({
		server: {
			baseDir: './dist/'
		}
	});
	gulp.watch(patchs.cleanCSS.src, moveCLEAN);
	gulp.watch(patchs.scss.src, moveSCSS);
	gulp.watch(patchs.js.src, moveJS);				
	gulp.watch(patchs.img.src, moveIMG);
	gulp.watch(patchs.html.src, htmlTemplates);
	gulp.watch('index.html', browserSync.reload);
}

gulp.task('build', gulp.series(moveCLEAN, gulp.parallel(htmlTemplates,moveSCSS, moveIMG, moveJS)));

gulp.task('dev', gulp.series('build', watch));




