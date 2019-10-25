<template>
  <div id="app">
      <Header v-if="$route.meta.main"/>
      <router-view/>
      <bottom-nav v-if="$route.meta.main" />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import BottomNav from './views/BottomNav.vue'
import Header from './views/Header.vue'
@Component({
  components:{
    BottomNav,
    Header
  }
})
export default class App extends Vue {
  
}
</script>

<style lang="less">
@import './style/reset.css';
@import './style/common.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.container{
    width: 100%;
    height: calc(100% - 100px);
}
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
