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
            setTimeout(() => {
                this.$events.fire('testEvent', 'message received');
            }, 1500)

            setTimeout(() => {
                this.$events.fire('testTwo', 'other works');
            }, 5000)
        }
    }
</script>