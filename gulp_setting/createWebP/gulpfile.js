var gulp = require('gulp');
//  gulp-webp压缩
var webp = require('gulp-webp');
gulp.task('default', ()=> {
    gulp.src('./*.{png,jpg,jpeg}')
    .pipe(webp({quality: 60}))
    .pipe(gulp.dest('./dist'));
});
// 
// gulp-imageisux
// var imageisux = require('gulp-imageisux');
// gulp.task('default', ()=>　{
//     gulp.src('C:/Users/duoyi/Desktop/游戏截图/*.jpg')
//         .pipe(imageisux('', true));
// })