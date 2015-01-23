gulp = require 'gulp'
connect = require 'gulp-connect'
jade = require 'gulp-jade'
stylus = require 'gulp-stylus'
coffee = require 'gulp-coffee'
uglify = require 'gulp-uglify'
clean = require 'gulp-clean'

gulp.task 'connect', ->
  connect.server
    port: 1337
    livereload: on
    root: './dist'

gulp.task 'jade', ->
  gulp.src 'jade/*.jade'
    .pipe do jade
    .pipe gulp.dest 'dist'
    .pipe do connect.realod

gulp.task 'stylus', ->
  gulp.src 'stylus/*.styl'
    .pipe stylus set: ['compress']
    .pipe gulp.dest 'dist/css'
    .pipe do connect.realod

gulp.task 'coffee', ->
  gulp.src 'coffee/*.coffee'
    .pipe do coffee
    .pipe gulp.dest 'dist/js'
    .pipe do connect.reload

gulp.task 'watch', ->
  # gulp.watch 'jade/*.jade', ['jade']
  gulp.watch 'stylus/*.styl', ['stylus']
  # gulp.watch 'coffee/*.coffee', ['coffee']

gulp.task 'default', ['coffee', 'stylus', 'connect', 'watch']