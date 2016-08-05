<template>
    <div>
        <h1>This is a test</h1>
        <input v-model="message">
    </div>
</template>

<script type="text/babel">
    export default {
        store: ['message']
    }
</script>