import Vue from 'vue'
import Http from 'vue-resource'
import Router from 'vue-router'
import Store from 'vue-stash'
import App from './../components/app.vue'

Vue.use(Http)
Vue.use(Router)
Vue.use(Store)

const router = new Router({
    routes: [
        {
            path: '/test',
            name: 'test',
            component: require('./../components/test.vue')
        }
    ]
})

const store = {
    message: 'Hello world!'
}

export { Vue, App, router, store }