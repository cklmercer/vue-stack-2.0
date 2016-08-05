'use strict';

var _CombineTask = require('../CombineTask');

var _CombineTask2 = _interopRequireDefault(_CombineTask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 |----------------------------------------------------------------
 | CSS File Concatenation
 |----------------------------------------------------------------
 |
 | This task will concatenate and minify your style sheet files
 | in order, which provides a quick and simple way to reduce
 | the number of HTTP requests your application fires off.
 |
 */

Elixir.extend('styles', function (styles, output, baseDir) {
    new _CombineTask2.default('styles', getPaths(styles, baseDir, output));
});

Elixir.extend('stylesIn', function (baseDir, output) {
    new _CombineTask2.default('stylesIn', getPaths('**/*.css', baseDir, output));
});

/**
 * Prep the Gulp src and output paths.
 *
 * @param  {string|Array} src
 * @param  {string|null}  baseDir
 * @param  {string|null}  output
 * @return {GulpPaths}
 */
var getPaths = function getPaths(src, baseDir, output) {
    return new Elixir.GulpPaths().src(src, baseDir || Elixir.config.get('assets.css.folder')).output(output || Elixir.config.get('public.css.outputFolder'), 'all.css');
};