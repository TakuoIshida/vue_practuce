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
<script>
import { mapGetters } from 'vuex'
// import axios from 'axios'
import * as testJson from '@/assets/test.json'

export default {
    data() {
        return {
            info: testJson
        }
    },
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
            return new Promise((resolve) => { 
                const json = require("@/assets/test.json")
                resolve(json)
            }).then(res => {
                console.log(res)
            });
        },
        async load(){
            const ret = await require('@/assets/test.json')
            console.log("ret")
            console.log(ret)
        },
        async fetchFile() {
            const jpg = await require('@/assets/test.jpg')
            console.log(jpg)
            console.log(process.env.VUE_APP_BASE_URL)
            const res = await fetch(process.env.VUE_APP_BASE_URL + jpg)
            console.log(res)
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
        this.load()
        this.fetchFile()
        console.log(this.info.default)
    },
}
</script>