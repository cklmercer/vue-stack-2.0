import Vue from 'vue'
import Http from 'vue-resource'
import Router from 'vue-router'
import Store from 'vue-stash'
import Events from 'vue-events'

Vue.use(Http)
Vue.use(Router)
Vue.use(Store)
Vue.use(Events)

export { Vue, Router }