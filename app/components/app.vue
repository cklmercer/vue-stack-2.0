<template>
    <div id="app" :class="routeClass">
        <navbar></navbar>
        <div class="container">
            <h1>{{ message }}</h1>
        </div>
        <router-view></router-view>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'app',

        store: ['message'],

        events: {
            testEvent(message) {
                this.message = message
            },

            testTwo(message) {
                this.message = message
            }
        },

        computed: {
            /**
             * Get a class name based on the route path.
             *
             * @return {String}
             */
            routeClass() {
                return this.$route.path.split('/').filter(part => Boolean(part)).join('-')
            }
        },

        components: {
            'navbar': require('./nav/navbar.vue')
        }
    }
</script>
