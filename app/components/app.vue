<template>
    <div id="app">
        <h1 class="welcome">{{ message }}</h1>
        <ul>
            <li><router-link :to="{ name: 'index' }">Home</router-link></li>
            <li><router-link :to="{ name: 'test' }">Test</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script type="text/babel">
    export default {
        store: ['message'],

        mounted() {
            setTimeout(() => {
                this.message = _.upperCase(this.message);
                console.log($('.welcome'))
            }, 2000);
        }
    }
</script>
