<template>
    <div>
        <h1>Users</h1>
    <button @click="toHome">Homeへ</button>
    </div>
</template>


<script>
export default {
    methods: {
        toHome() {
            this.$router.push('/')
        }
    }
}
</script>