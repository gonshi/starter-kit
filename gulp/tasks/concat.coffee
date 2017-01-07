gulp = require 'gulp'
config = require '../config'
$ = (require 'gulp-load-plugins')()

gulp.task 'concat-js', () ->
    return gulp.src(config.js_concat_list)
        .pipe($.concat('script.min.js'))
        .pipe(gulp.dest(config.path.js))
        .pipe($.size({ title: 'babel' }))
