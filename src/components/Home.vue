<template>
    <!-- templateはdivタグのような１要素で囲う -->
    <div>
        <h1>静的なルーティング：Home</h1>
    <button @click="toUsers">Userへ</button>
    <p>storeのcountを表示する: {{ count }}</p>
    <p>storeのcountの二倍を表示する: {{ double }}</p>
    <button @click="increment">COUNT_UP</button>
    <button @click="decrement">COUNT_DOWN</button>
    <button @click="muIncrement">MUTATE_COUNT_UP</button>
    <button @click="muDecrement">MUTATE_COUNT_DOWN</button>
    </div>
</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

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
        // 値の変更はできるが、状態管理方法としては悪手。やらない。
        increment() {
            this.$store.state.count++
        },
        decrement() {
            this.$store.state.count--
        },
        muIncrement() {
            this.$store.commit("muIncrement", 1)
        },
        muDecrement() {
            this.$store.commit("muDecrement", 1)
        },
        async req(){
            return new Promise((resolve, reject) => { 
                const json = require("@/assets/test.json")
                resolve(json)
            }).then(res => {
                console.log(res)
            });
        }
    },
    computed: {
        // スプレッド演算子でmapGettersを追加する
        ...mapGetters(["doubleCount"]),
        count() {
            return this.$store.state.count
        },
        // 値の変更はできるが、状態管理方法としては悪手。やらない。
        double() {
            return this.$store.getters.doubleCount
        },
        
    },
    mounted() {
        this.req()
    },
}
</script>