'use strict'

config = require './gulp/config'
util = require './gulp/util'

gulp = require 'gulp'

# Load custom tasks from the `tasks` directory
try
    (require 'require-dir')('./gulp/tasks', { recurse: true })
catch err
    console.error err

$ = (require 'gulp-load-plugins')()
runSequence = require 'run-sequence'
browserSync = require 'browser-sync'
reload = browserSync.reload

# Compile source
gulp.task 'build', ['styles', 'jshint', 'browserify:babel', 'concat-js']

# Watch Files For Changes & Reload
gulp.task 'serve', () ->
    browserSync({
        port: 35729
    })

    $.watch([
        config.path.dist + '**/*.php',
    ], reload)

    $.watch([
        config.sass.lib,
        config.path.scss_common + '**/*.scss',
        config.path.scss + '**/*.scss'
    ], -> runSequence('styles', reload))
    $.watch([config.path.js_src + '**/*.js'], -> runSequence('jshint', 'browserify:babel', 'concat-js', reload))

# Build Production Files, the Default Task
gulp.task 'default', (cb) ->
    runSequence('build', 'serve', cb)

gulp.task 'deploy', (cb) ->
    runSequence('build', 'jade', 'styles:deploy', 'jshint', 'minify:script', 'concat-js', 'stylestats', cb)

# gulp.task 'minify', (cb) ->
#     runSequence('minify:html', 'minify:styles', 'minify:scripts', cb)
