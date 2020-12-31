<template>
    <!-- templateはdivタグのような１要素で囲う -->
    <div>
        <h1>静的なルーティング：Home</h1>
    <button @click="toUsers">Userへ</button>
    <p>storeのcountを表示する: {{ count }}</p>
    <p>storeのcountの二倍を表示する: {{ double }}</p>
    <button @click="increment">COUNT_UP</button>
    <button @click="decrement">COUNT_DOWN</button>
    </div>
</template>

<script>
export default {
    methods: {
        toUsers() {
            // ただrouting する場合
            // this.$router.push('users')
            // paramsを渡す場合
            this.$router.push({
                name: 'users-id-profile',
                params: { id: 1 }
            })
        },
        increment() {
            this.$store.state.count++
        },
        decrement() {
            this.$store.state.count--
        },
    },
    computed: {
        count() {
            return this.$store.state.count
        },
        double() {
            return this.$store.getters.doubleCount
        },
    }
}
</script>