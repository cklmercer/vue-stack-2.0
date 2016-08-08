# vue-stack-2.0
Vue 2.0 project boilerplate.

## Includes
* Vue 2.0
* Vue Router 2.0
* Vue Stash 2.0
* Vue Events
* Vue Resource
* lodash
* jQuery
* Bootstrap Sass
* Font Awesome
* Laravel Elixir

## Setup
* Clone the git repo `git clone https://github.com/cklmerver/vue-stack-2.0`
* Change into the directory `cd vue-stack-2.0`
* Open `./public/index.html` with your browser.

## Features

### Global Store
Visit `./app/store.js` to add properties to your global store. Pre-initialize these properties and they'll be reactive 
just like other properties in your component's `data` option.
 
You can access these properties from from within any component using the `store` option or via `vm.$store`. 
 
See [vue-stash](https://github.com/cklmercer/vue-stash) for more details regarding the global store.
 
### Global Event Bus
Since the `vm.$dispatch` and `vm.$broadcast` events have been deprecated, `vue-stack-2.0` leverages `vue-events` to 
simplify event handling.

**Fire an event** 
* `vm.$events.fire('event-name', data)`
* `vm.$events.emit('event-name', data)`
* `vm.$events.$emit('event-name', data)`

**Listen for an event**
* `vm.$events.listen('event-name', cb())`
* `vm.$events.on('event-name', cb())`
* `vm.$events.$on('event-name', cb())`

See [vue-events](https://github.com/cklmercer/vue-events) for more details.

### SPA Routing
`vue-stack-2.0` leverages the latest [vue-router](https://github.com/vuejs/vue-router). To get started, checkout
`./app/routes.js`.

## Start developing
* Run `npm install`
* Change some code
* Run `gulp`

_I'm using [laravel/homestead](https://github.com/laravel/homestead) and [browser-sync](https://github.com/JeffreyWay/laravel-elixir-browsersync-official)_

## License
[MIT](http://opensource.org/licenses/MIT)