'use strict';

var _CombineTask = require('../CombineTask');

var _CombineTask2 = _interopRequireDefault(_CombineTask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 |----------------------------------------------------------------
 | JavaScript File Concatenation and Compilation
 |----------------------------------------------------------------
 |
 | This task will concatenate and minify your JavaScript files
 | in order. This provides a quick and simple way to reduce
 | the number of HTTP requests your application executes.
 |
 */

Elixir.extend('scripts', function (scripts, output, baseDir, options) {
    new _CombineTask2.default('scripts', getPaths(scripts, baseDir, output), options);
});

Elixir.extend('scriptsIn', function (baseDir, output, options) {
    new _CombineTask2.default('scriptsIn', getPaths('**/*.js', baseDir, output), options);
});

/**
 * Prep the Gulp src and output paths.
 *
 * @param  {string|Array} src
 * @param  {string|null}  baseDir
 * @param  {string|null}  output
 * @return {GulpPaths}
 */
function getPaths(src, baseDir, output) {
    return new Elixir.GulpPaths().src(src, baseDir || Elixir.config.get('assets.js.folder')).output(output || Elixir.config.get('public.js.outputFolder'), 'all.js');
}