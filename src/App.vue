<template>
  <div id="app">
    <myheader></myheader>
    <p v-if="msg.length > 0"> 
      {{ msg }}
    </p>
    <p v-else>
      no text
    </p>
    <input type="text" v-model="msg">
    <button @click="clear()">clear</button>
    <p>{{counter}}</p>
    <child-component :name="name"></child-component>
  </div>
</template>

<script>
import myheader from './components/myheader'
import ChildComponent from './components/ChildComponent'

export default {
  components: {
    // どちらも同じ。'myheader'はテンプレート名を上書きできる
    myheader,
    // 'myheader': myheader
    ChildComponent
  },
  data() {
    return {
      msg: "hello",
      // Chileコンポネントでpropsとして受け取る
      name: "Kei",
      counter: 0
    }
  },
  methods: {
    clear() {
      this.msg = ""
    }
  },
  // 初期読み込み時にAPIから取得する
  created() {
    fetch('http://www.geonames.org/postalCodeLookupJSON?postalcode=10504&country=US')
    .then( res => {
      return res.json()
    })
    .then( json => {
      this.msg = json.postalcodes[0].adminName1
    })
    .catch( (err) => {
      this.msg = err // error message
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
