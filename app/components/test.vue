<template>
    <div class="container">
        <input class="form-control" v-model="message">
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'test',

        store: ['message'],

        mounted() {
            console.log('The test component will fire an event in 3 seconds.')
            setTimeout(() => {
                this.$events.fire('testEvent');
            }, 3000)
        }
    }
</script>