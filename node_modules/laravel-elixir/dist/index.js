'use strict';

global.gulp = require('gulp');
global.parse = require('parse-filepath');

var GulpBuilder = require('./tasks/GulpBuilder').default;

/**
 * Elixir is a wrapper around Gulp.
 *
 * @param {Function} recipe
 */
global.Elixir = function (recipe) {
    // 1. Perform any last-minute initialization.
    init();

    // 2. Load all available Elixir tasks.
    require('./bootstrap/LoadExtensions');

    // 3. Process the user's Gulpfile recipe.
    recipe(Elixir.mixins);

    // 4. Generate the necessary Gulp tasks.
    Elixir.tasks.forEach(function (task) {
        return GulpBuilder.fromElixirTask(task);
    });

    Elixir.hooks.ready.forEach(function (hook) {
        return hook();
    });
};

['./bootstrap/SetDependencies', './bootstrap/EnableExtension', './bootstrap/SetHooks'].forEach(function (bootstrapper) {
    return require(bootstrapper);
});

/**
 * Perform any last-minute initializations.
 */
function init() {
    if (!Elixir.config.notifications) {
        process.env.DISABLE_NOTIFIER = true;
    }

    Elixir.Notification = require('./Notification').default;
};

module.exports = Elixir;