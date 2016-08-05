'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (output) {
    switch (output.extension) {
        case '.css':
            return minifyCss();
        case '.js':
            return minifyJs();
    }

    Elixir.fail('Hmm, not sure how to compress this type of file. ' + 'Stick with CSS or JavaScript files!');
};

var _vinylMap = require('vinyl-map');

var _vinylMap2 = _interopRequireDefault(_vinylMap);

var _cleanCss = require('clean-css');

var _cleanCss2 = _interopRequireDefault(_cleanCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

/**
 * Minify the Gulp CSS files.
 */


/**
 * Minify the Gulp src files.
 *
 * @param  {object} output
 */
function minifyCss() {
    return (0, _vinylMap2.default)(function (buff, filename) {
        return new _cleanCss2.default(Elixir.config.css.minifier.pluginOptions).minify(buff.toString()).styles;
    });
}

/**
 * Minify the Gulp JS files.
 */
function minifyJs() {
    return Elixir.Plugins.uglify(Elixir.config.js.uglify.options);
}