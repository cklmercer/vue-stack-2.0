# vue-stack-2.0
Vue 2.0 project boilerplate.

### Includes
* Vue 2.0
* Vue Router 2.0
* Vue Stash 2.0
* Vue Resource
* lodash
* jQuery
* Bootstrap Sass

### Setup
* Clone the git repo `git clone https://github.com/cklmerver/vue-stack-2.0`
* Change into the directory `cd vue-stack-2.0`
* Run `npm install`
* Run `gulp`
* Serve `/public` with the web server of your choice. _(I use [larvel/homestead](https://github.com/laravel/homestead))_

### Features

##### Global Store
Visit `./app/store.js` to add properties to your global store. Pre-initialize these properties and they'll be reactive 
just like other properties in your component's `data` option.
 
You can access these properties from from within any component using the `store` option or via `vm.$store`. 
 
See [vue-stash](https://github.com/cklmercer/vue-stash) for more details regarding the global store.
 
##### Global Event Bus
Since the `vm.$dispatch` and `vm.$broadcast` events have been deprecated, `vue-stack-2.0` leverages a global event bus. 
This is a blank vue model bound to `vm.$events`. 

To fire an event use `vm.$events.$emit('event-name', data)`.

To listen for an event, use `vm.$events.$on('event-name', callback())`.

##### SPA Routing
`vue-stack-2.0` leverages the latest [vue-router](https://github.com/vuejs/vue-router). To get started, checkout
`./app/routes.js`.
 

### License
[MIT](http://opensource.org/licenses/MIT)