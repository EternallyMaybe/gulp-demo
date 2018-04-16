var gulp = require('gulp'),
    spritesmith = require('gulp.spritesmith');

gulp.task('default', function() {
    gulp.src('images/*.{png,jpg,jpeg}')
    .pipe(spritesmith({
        imgName: './images/sprite.png',
        cssName: 'css/sprite.css',
        padding: 20,
        algorithm: 'binary-tree',
        // cssTemplate: 'css/handlebarsStr.css.handlebars' // cssTemplate有两种方式 1.使用handlebars模板文件 2.使用js函数
        cssTemplate: function(data) { // 
            var arr = [];
            data.sprites.forEach(function(sprite) {
                arr.push(".icon-" + sprite.name + " {" +
                    "display: block;" +
                    "background-image: url(" + sprite.escaped_name + ");" +
                    "background-position: " + sprite.px.offset_x + " " + sprite.px.offset_y + ";" +
                    "width: " + sprite.px.width + ";" +
                    "height: " + sprite.px.height + ";" +
                "}\n");
            });
            return arr.join("");
        }
    }))
    .pipe(gulp.dest('dist/'))
})

// Algorithm 有四个可选值分别为：top-down、left-right、diagonal、alt-diagonal、binary-tree
// handlebars模板 
// {{#sprites}}
// .icon-{{name}}:before {
//     display: block;
//     background-image: url({{escaped_image}});
//     background-position: {{px.offset_x}} {{px.offset_y}};
//     width: {{px.width}};
//     height: {{px.height}}; 
// }   
// {{/sprites}}