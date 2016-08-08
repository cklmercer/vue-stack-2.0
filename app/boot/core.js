require('./libraries')

import { Vue, Router } from './vue';
import routes from './../routes'
const router = new Router({
    // mode: 'history', // uncomment to using html5 history features.
    // hashbang: false, // uncomment to remove the hashbang from the url
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