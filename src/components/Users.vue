<template>
    <div>
        <h1>静的なルーティング：Users</h1>
    <button @click="toHome">Homeへ</button>
    <hr>
    <!-- <h1> 動的なルーティング：User No. {{ $route.params.id}}</h1> -->
    <h1> 動的なルーティング：User No. {{ id }}</h1>
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile'">次のユーザーへ</router-link>
    <br>
    <router-link :to="{name: 'users-id-profile', params: { id: Number(id) + 1}}">同じ挙動で次のユーザーへ</router-link>
    <router-view></router-view>
    </div>
</template>


<script>
export default {
    props: ["id"],
    methods: {
        toHome() {
            this.$router.push('/')
        }
    },
    // watcher によってルーティングの変化を監視、
    // オブジェクトとして使用できる。
    watch: {
        // to, from は特になんでもOK
        $route(to, from) {
            console.log(to);
            console.log(from);
        }
    }
}
</script>