import { Vue, App, router, store } from './boot/core';

new Vue({
    router,
    el: '#app',
    render: h => h(App),
    data: { store }
})