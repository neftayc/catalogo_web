/* Servidor web gulp para desarrollo 
 */
var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('serve', function() {
    connect.server({
        port: 9003,
        host: 'localhost'
    });
});
