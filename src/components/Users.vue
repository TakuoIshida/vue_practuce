<template>
    <div>
        <h1>静的なルーティング：Users</h1>
    <button @click="toHome">Homeへ</button>
    <hr>
    <h1> 動的なルーティング：User No. {{ $route.params.id}}</h1>
    </div>
</template>


<script>
export default {
    methods: {
        toHome() {
            this.$router.push('/')
        }
    },
    // watcher によってルーティングの変化を監視、
    // オブジェクトとして使用できる。
    watch: {
        // to, from は特になんでもいい
        $route(to, from) {
            console.log(to);
            console.log(from);
        }
    }
}
</script>