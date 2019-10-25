<template>
    <div>
        <circle-icon :activeColor="activedColor">
            <icon :name="curHabit.name" slot="icon"/>
        </circle-icon>
        <section class="icon-setting">
            <div v-for="(item, index) in iconSettings" :key="index" @click="changeIcon(item)">
                <icon :name="item"/>
            </div>
        </section>
        <section class="color-setting">
            <div class="color-circle" :style="{backgroundColor: item}" v-for="(item, index) in colorSettings" :key="index" @click="changeColor(item)">
            </div>
        </section>
    </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'
import {State, Mutation} from 'vuex-class'
import CircleIcon from '@/components/Circle/Circle.vue'
import config from '@/config'
import {Habit} from '@/store/state'
@Component({
    components:{
        CircleIcon
    }
})
export default class IconSetting extends Vue{
    @State private curHabit!: Habit
    // @State private testTs!: string
    private iconSettings!: string[]
    private colorSettings!: string[]
    private activedColor: string
    // private test: string
    @Mutation('SELECT_ICON') private selectIcon!: (name: string) => void
    @Mutation('SELECT_COLOR') private selectColor!: (color: string) => void
    private data () {
        return {
            iconSettings: (config as any).iconSetting,
            colorSettings: (config as any).colorSetting,
            activedColor: 'rgb(255, 232, 132)',
            test: ''
        }
    }
    private get computedColor() {
        const { color } = this.curHabit
        // const color1 = this.test
        console.log(color)
        return color
    }
    private changeIcon(name: string) {
        // 修改当前习惯的icon
        this.selectIcon(name)
    }
    private changeColor(color: string) {
        this.selectColor(color)
        // this.test = color
        this.activedColor = color
    }
}
</script>
<style lang="less" scoped>
.icon-setting{
    margin: 40px;
    height: 400px;
    overflow: auto;
    div{
        font-size: 80px;
        display: inline-block;
        // 伪类  排除最后一个
        &:not(:last-child){
            // margin-right: 40px;
        }
        svg{
            margin: .3em;
        }
    }
}
.color-setting{
    margin: 40px;
    height: 400px;
    overflow: auto;
    .color-circle{
        display: inline-block;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: lightpink;
    }
}
</style>