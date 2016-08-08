import Vue from 'vue'
import Http from 'vue-resource'
import Router from 'vue-router'
import Store from 'vue-stash'

Vue.use(Http)
Vue.use(Router)
Vue.use(Store)

export { Vue, Router }