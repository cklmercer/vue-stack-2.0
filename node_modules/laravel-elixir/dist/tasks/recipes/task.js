'use strict';

/*
 |----------------------------------------------------------------
 | Custom Gulp Tasks
 |----------------------------------------------------------------
 |
 | Sometimes, you'll want to hook your custom Gulp tasks into
 | Elixir. Simple! Simply call Elixir's task() method, and
 | provide the name of your task, and a regex to watch.
 |
 */

Elixir.extend('task', function (name, watcher) {
  var task = new Elixir.Task('task', function () {
    return gulp.start(name);
  });

  watcher && task.watch(watcher);
});