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
                this.$events.fire('testEvent', 'You just received a message from test.vue')
            }, 1500)

            setTimeout(() => {
                this.$events.fire('testTwo', 'hahah you got another message')
            }, 5000)
        }
    }
</script>