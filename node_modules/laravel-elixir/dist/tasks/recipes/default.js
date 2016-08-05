'use strict';

var _runSequence = require('run-sequence');

var _runSequence2 = _interopRequireDefault(_runSequence);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 |----------------------------------------------------------------
 | Default Task
 |----------------------------------------------------------------
 |
 | This task will run when the developer executes "gulp" on the
 | command line. We'll use this configuration object to know
 | which tasks should be fired when this task is executed.
 |
 */

gulp.task('all', function (callback) {
    Elixir.isRunningAllTasks = true;

    Elixir.hooks.before.forEach(function (hook) {
        return hook();
    });

    _runSequence2.default.apply(this, Elixir.tasks.names().concat(callback));
});

gulp.task('default', ['all'], function () {
    // Once all tasks have been triggered, we can
    // render a pretty table for reporting.
    Elixir.log.tasks();
});