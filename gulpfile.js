/* eslint-disable */
'use strict';
const gulp    = require('gulp');
const sass    = require('./build/sass');
const uglify = require('./build/uglify');
const images  = require('./build/images');
const sync    = require('./build/browsersync');

[sass, uglify, images, sync].forEach(task => {
  task(gulp);
});

gulp.task('build', ['sass', 'uglify', 'images', 'jekyll-build']);