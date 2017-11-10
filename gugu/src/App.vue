<template>
  <div id="app">
    <v-head></v-head>
    <router-view></router-view>
    <v-nav></v-nav>
    <v-loadding v-show="loadding"></v-loadding>
  </div>
</template>

<script>
  import Head from '@/components/Head'
  import Nav from '@/components/Navlist'
  import Loadding from '@/components/loadding'
  import {mapGetters} from 'vuex'

export default {
  name: 'app',
  components:{
    'v-head':Head,
    'v-nav':Nav,
    'v-loadding':Loadding
  },
  computed:{
    ...mapGetters(['loadding'])
  }

}
</script>

<style>
  html,body {
    height: 100%;
    margin: 0;padding: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;padding: 0;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
