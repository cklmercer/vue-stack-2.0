window.$ = window.jQuery = require('jquery')
window._ = require('lodash')
require('bootstrap-sass/assets/javascripts/bootstrap.js')

import Vue from 'vue'
import Http from 'vue-resource'
import Router from 'vue-router'
import Store from 'vue-stash'

Vue.use(Http)
Vue.use(Router)
Vue.use(Store)

import routes from './../routes'
const router = new Router({
    mode: 'history',
    hashbang: false,
    routes
})

const events = new Vue({})
Object.defineProperty(Vue.prototype, '$events', {
    get() {
        return this.$root.events;
    }
})

import store from './../store'
import App from './../components/app.vue'

export { Vue, App, router, store, events }