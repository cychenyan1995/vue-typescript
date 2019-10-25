<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ msg }}--{{name}}</h1>
    <h1>{{computedMsg}}</h1>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class About extends Vue {
  // 初始化数据
  msg = 123

  // 父组件传递的参数
  @Prop()
  private name: String = 'vv'

  // 生命周期函数
  mounted () {

  }

  // 计算属性
  get computedMsg() {
    return 'computed' + this.msg;
  }

  // 方法
  private greet() {
    alert('greet:' + this.msg);
  }
}
</script>

