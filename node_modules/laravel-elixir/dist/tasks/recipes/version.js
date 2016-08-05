'use strict';

var _VersionTask = require('../VersionTask');

var _VersionTask2 = _interopRequireDefault(_VersionTask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 |----------------------------------------------------------------
 | Versioning / Cache Busting
 |----------------------------------------------------------------
 |
 | This task will append a small hash on the end of your file
 | and generate a manifest file which contains the current
 | "version" of the filename for the application to use.
 |
 */

Elixir.extend('version', function (src, buildPath) {
  new _VersionTask2.default('version', getPaths(src, buildPath));
});

/**
 * Prep the Gulp src and output paths.
 *
 * @param  {string|Array} src
 * @param  {string|null}  buildPath
 * @return {GulpPaths}
 */
function getPaths(src, buildPath) {
  src = Array.isArray(src) ? src : [src];
  buildPath = buildPath || Elixir.config.get('public.versioning.buildFolder');

  return new Elixir.GulpPaths().src(src, Elixir.config.publicPath).output(buildPath);
};