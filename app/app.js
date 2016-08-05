import { Vue, App, router, store, events } from './boot/core';

new Vue({
    router,
    el: '#app',
    render: h => h(App),
    data: { store, events }
})