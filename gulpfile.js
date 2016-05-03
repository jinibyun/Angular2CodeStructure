var gulp = require('gulp');

var assetSrc = 'src/asset/';
var assetDest = 'dest/';

var src = 'src/';
var dest = 'dest/';

/* Mixed */
var ext_replace = require('gulp-ext-replace');

/* CSS */
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var cssnano = require('cssnano');

/* JS & TS */
var jsuglify = require('gulp-uglify');
var typescript = require('gulp-typescript');

/* Images */
var imagemin = require('gulp-imagemin');

var tsProject = typescript.createProject('tsconfig.json');

gulp.task('build-css', function () {
    return gulp.src(assetSrc + 'scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(postcss([precss, autoprefixer, cssnano]))
        .pipe(sourcemaps.write())
        .pipe(ext_replace('.css'))
        .pipe(gulp.dest(assetDest + 'css/'));
});

gulp.task('build-ts', function () {
    return gulp.src(src + '**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write())
        //.pipe(jsuglify())
        .pipe(gulp.dest(dest));
});

gulp.task('build-img', function () {
    return gulp.src(assetSrc + 'img/**/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest(assetDest + 'img/'));
});

gulp.task('build-html', function () {
    return gulp.src(src + '**/*.html')
        .pipe(gulp.dest(dest));
});

gulp.task('watch', function () {
    gulp.watch(src + '**/*.ts', ['build-ts']);
    gulp.watch(assetSrc + 'scss/**/*.scss', ['build-css']);
    gulp.watch(assetSrc + 'img/*', ['build-img']);
    gulp.watch(src + '**/*.html', ['build-html']);
});

gulp.task('default', ['watch', 'build-ts', 'build-css', 'build-html']);