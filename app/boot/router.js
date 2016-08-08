import { Router } from './vue'
import routes from './../routes'

const router = new Router({
    // mode: 'history', // uncomment to using html5 history features.
    // hashbang: false, // uncomment to remove the hashbang from the url
    routes
})

export default router;