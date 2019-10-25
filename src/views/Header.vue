<template>
    <!-- <div class="header">
        <div>
            <icon :name="headerInfo.left"/>
        </div>
        <div class="header-title">{{headerInfo.title}}</div>
        <div @click="addHabit">
            <icon :name="headerInfo.right"/>
        </div>
    </div> -->
    <HeaderIcon :headerInfo="headerInfo"/>
</template>
<script lang="ts">
import {Vue, Component, Prop } from 'vue-property-decorator'
import { State } from 'vuex-class'
import { HeaderInfo } from './../../src/store/state'
import HeaderIcon  from './../components/HeaderIcon/HeaderIcon.vue'
@Component({
    components: {
        HeaderIcon
    }
})
export default class Header extends Vue {
    // 属性 state中的数据  !必传
    @State('headerInfo') private headerInfo!: HeaderInfo

    // 初始化
    private data () {
        return {
            
        }
    }

    // 生命周期方法
    
    // 方法
    private addHabit() {
        this.$router.push({path: '/new/library'})
    }

}
</script>

<style lang="less" scoped>
.header{
    //  grid 布局
    display: grid;
    grid-template-columns: 100px auto 100px;
    align-items: center;
    justify-items: center;
    height: 150px;
    font-size: 50px;
    &-title{
        font-weight: bold;
    }
}
</style>
