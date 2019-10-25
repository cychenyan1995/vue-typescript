<template>
    <div class="habit">
        <!-- <div class="habit-icon">
            <icon name="diy"/>
        </div> -->
        <router-link to="/new/iconSetting">
            <circle-icon :activeColor="curHabit.color" key="0">
                <icon :name="curHabit.name" slot="icon"/>
            </circle-icon>
        </router-link>
        <div class="habit-text">
            <div>{{curHabit.title}}</div>
            <div></div>
        </div>
        <div class="habit-text">
            <div>习惯的重复</div>
            <div class="habit-text-right">一 二 三 四 五 六 日</div>
            <van-icon name="arrow" />
        </div>
        <div class="habit-text">
            <div>重复的时段</div>
            <div class="habit-text-right">一二三四五六日</div>
            <van-icon name="arrow" />
        </div>
        <div class="habit-text">
            <div>提醒的时间</div>
            <div class="habit-text-right">一二三四五六日</div>
            <van-icon name="arrow" />
        </div>
        <div class="habit-text">
            <div>激励的话</div>
            <div class="habit-text-right">一二三四五六日</div>
            <van-icon name="arrow" />
        </div>
        <div class="habit-btn" @click="createHabit">新建</div>
        <!-- <van-button class="habit-btn" type="info" size="large">fffffffffff</van-button> -->
    </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import { Icon, Button } from 'vant'
import {State, Mutation} from 'vuex-class'
import CircleIcon from '@/components/Circle/Circle.vue'
import config from '@/config'
import {Habit as HabitState} from '@/store/state'
import mutations from '../../store/mutations';
@Component({
  components: {
    [Icon.name]: Icon,
    [Button.name]: Button,
    CircleIcon
  },
})
export default class Habit extends Vue{
    @State private curHabit!: HabitState
    @Mutation('ADD_HABIT') private addHabit!: () => void
    private id!: number
    private data () {
        return {
            // id: this.$route.query.id || 0
        }
    }
    private createHabit() {
        this.addHabit()
        this.$router.push('/')
    }
}
</script>
<style lang="less" scoped>
.habit{
    font-size: 40px;
    &-text{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 40px 40px 20px;
        border-bottom: 1px solid #eee;
        font-size: 32px;
        div{
            flex: 1;
            text-align: left;
        }
        &-right{
            color: gray;
            text-align: right !important;
        }
    }
}
</style>
<style lang="less">
.van-icon{
    line-height: 22px;
    color: gray;
    margin-left: 10px;
}
.habit-btn{
    width: 600px;
    height: 80px;
    margin-top: 60px;
    background-color: #444;
    border-radius: 5px;
    border: 1px solid #444;
    margin: 30px auto;
    color: #fff;
    padding-top: 16px;
    font-size: 32px;
    letter-spacing: 5px;
}
</style>


