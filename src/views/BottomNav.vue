<template>
    <div id="nav">
      <router-link v-for="(item, index) in activePage" :key="index" :to="item.path">
        <div class="nav-icon" @click="tabChange(item)">
          <icon :name="!item.isActived?item.name.defaultName:item.name.activedName" />
          <span>{{item.tagName}}</span>
        </div>
      </router-link>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { State, Mutation } from 'vuex-class'
import { NavInfo } from './../store/state'
@Component
export default class BottomNav extends Vue {
  // 取state中的数据
  @State('activePage') private activePage!: NavInfo[]
  // mutation
  @Mutation('GET_ACTIVE_PAGE') private getActivePage!: (id: Number) => void
  @Mutation('CHANGE_HEADER_STATE') private changeHeaderState!: (id: Number) => void
  // 方法
  tabChange(item: NavInfo) {
    // 调用mutation中的方法
    // 改变tab
    this.getActivePage(item.id)
    // 改变header
    this.changeHeaderState(item.id)
  }
}
</script>
<style lang="less" scoped>
#nav{
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #eee;
  position: absolute;
  left: 0;
  bottom: 0;
  min-height: 16vw;
  // font-size: 30px;
  a{
    padding: 0 20px;
    margin: 0 20px;
    // height: 100%;
    min-height: 100px;
    line-height: 100px;
    color: #333;
  }
  .nav-icon{
    padding-top: 10px;
    font-size: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    span{
      font-size: 20px;
      line-height: 50px;
    }
  }
}
</style>
