<template>
    <div class="new-content">
        <p>您可以从习惯库中挑选一个习惯,也可以新建一个新的习惯。</p>
        <div class="habit">
            <div class="habit-title">自定义习惯</div>
            <div class="habit-item" @click="create(newHabit)">
                <icon :name="newHabit.name"/>
                <span>{{newHabit.title}}</span>
            </div>
            <div class="habit-title">从库中挑选习惯</div>
                <div class="habit-content-box">
                    <div class="habit-item" v-for="(item, index) in habitLibraryList" :key="index" @click="create(item)">
                        <icon :name="item.name"/>
                        <span>{{item.title}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import {State,Mutation} from 'vuex-class'
import config from '@/config'
import {Habit} from '@/store/state'
@Component
export default class Library extends Vue {
    @Mutation('CHANGE_HEADER_STATE') private changeHeaderState!: (id:number) => void
    @Mutation('CREATE_HABIT') private createHabit!: (habit:Habit) => void
    // data返回的属性值 约束
    private newHabit!: object[]
    private habitLibraryList!: object[]
    private data () {
        return {
            newHabit: config.newHabit,
            habitLibraryList: config.habitLibrary
        }
    }

    private create(habit: Habit) {
        // 保存当前的新建习惯
        this.createHabit(habit)
        this.$router.push(`/new/habit`)
    }
}
</script>
<style lang="less" scoped>
.new-content{
    font-size: 40px;
    p{
        font-size: .8em;
        margin: 30px;
    }
    .habit{
        &-title{
            background: #eee;
            font-weight: 600;
            text-align: left;
            padding-left: 30px;
            font-size: 1em;
        }
        &-item{
            font-size: .8em;
            display: flex;
            justify-content: start;
            align-items: center;
            padding: 20px;
            position: relative;
            &::after{
                content: '';
                position: absolute;
                width: 100%;
                // height: 1px;
                border-bottom: 1px solid #eee;
                bottom: 0; 
            }
            span{
                margin-left: 30px;
            }
            svg{
                font-size: 2.6em;
            }
        }
    }
}
.habit-content-box{
    overflow-y: scroll;
    height: calc(100vh - 300px);
}
</style>


