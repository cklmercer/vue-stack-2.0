<template>
    <div id="app">
        <h1>{{ message }}</h1>
        <ul>
            <li><router-link :to="{ name: 'index' }">Home</router-link></li>
            <li><router-link :to="{ name: 'test' }">Test</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script type="text/babel">
    export default {
        store: ['message']
    }
</script>