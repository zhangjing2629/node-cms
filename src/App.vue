<template>
  <div id="app">
    <child1></child1>
    <input type="button" value="加" @click="add">
    <br>
    <input type="button" value="减" @click="sub">
    <br>
    <child2></child2>
    <child3 :getMsg="msg"></child3>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import child1 from './components/Child1.vue'
import child2 from './components/Child2.vue'
import child3 from './components/Child3.vue'
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  methods: mapActions([
    "add", "sub"
  ]),
  components: {
    child1, child2, child3
  },
  mounted: function () {
    // setInterval(function () { this.$store.dispatch("add"); }.bind(this), 1000)
    // console.log(this.$children)
    console.log(this.$el)

  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
