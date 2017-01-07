gulp = require 'gulp'
awspublish = require 'gulp-awspublish'
config = require '../config'
fs = require 'fs'

gulp.task 'publish', () ->
    key = JSON.parse(fs.readFileSync('./aws.json'))
    publisher = awspublish.create(key)
    headers   = {
      'Cache-Control': 'max-age=315360000, no-transform, public'
    }

    return gulp.src("#{config.path.dist}**")
             .pipe(publisher.publish(headers))
             .pipe(publisher.cache())
             .pipe(awspublish.reporter())
