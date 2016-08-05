'use strict';

var _child_process = require('child_process');

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 |----------------------------------------------------------------
 | Shell Commands
 |----------------------------------------------------------------
 |
 | Need to execute a shell script, as part of your compile
 | process? No problem. Elixir can help with that. Just
 | call `mix.exec('command')`, and, bam, you're set!
 |
 */

Elixir.extend('exec', function (command, watcher) {
    var task = new Elixir.Task('exec', function () {
        var deferred = _q2.default.defer();

        this.recordStep('Executing Command');

        (0, _child_process.exec)(command, function (err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);

            deferred.resolve();
        });

        return deferred.promise;
    });

    watcher && task.watch(watcher);
});