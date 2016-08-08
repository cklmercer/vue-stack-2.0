require('./libraries')

import { Vue } from './vue';
import router from './router';

const events = new Vue({})
Object.defineProperty(Vue.prototype, '$events', {
    get() {
        return this.$root.events;
    }
})

import store from './../store'
import App from './../components/app.vue'

export { Vue, App, router, store, events }