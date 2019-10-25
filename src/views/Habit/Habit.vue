<template>
    <div class="container"> 
        <div class="habit">
            <van-tabs>
                <van-tab v-for="(item, index) in timeSlotList" :key="index" :title="item.title">
                <div class="habit-content">
                    <div><icon name="taiyang" /></div>
                    <div>背单词</div>
                    <div>1天</div>
                </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { State, Mutation } from 'vuex-class'
import { TimeSlot } from '@/store/state.ts'

import { Tab, Tabs } from 'vant'
@Component({
    components:{
        [Tab.name]: Tab,
        [Tabs.name]: Tabs
    }
})
export default class Habit extends Vue {
    @State private timeSlotList!: TimeSlot[]

    // 计算属性
    get timeSlotListComputed(): any {
        // this.timeSlotList.unshift({title: '全部'})
        // console.log(this.timeSlotList)
        return this.timeSlotList
    }
}
</script>

<style lang="less" scoped>
.container{
    width: 100%;
    height: calc(100% - 250px);
}
.habit{
    &-content{
        margin: 30px 20px;
        border: 1px solid black;
        height: 100px;
        background: rgb(255, 232, 132);
        display: flex;
        // flex-direction: 
        justify-content: space-around;
        align-items: center;
        font-size: 30px;
        svg{
            font-size: 50px;
        }
    }
}
</style>
<style lang="less">
.van-tabs--line{
     .van-tabs__wrap{
        height: 70px;
     }
    .van-tabs__nav{
        display: flex;
        align-items: center;
    }
}
</style>


