<template>
    <div class="habit-icon" :style="styleObj">
        <!-- slot -->
        <slot name="icon" />
    </div>
</template>
<script lang="ts">
import {Vue, Component, Prop, Watch} from 'vue-property-decorator'
@Component({})
export default class CircleIcon extends Vue{
    @Prop({default: 'rgb(255, 232, 132)'}) private activeColor: string
    // data中的属性
    private styleObj!: {
        background: string
    }
    private data () {
        return {
            styleObj: {
                background: this.activeColor
            }
        }
    }
    @Watch('activeColor')
    private changeColor(val: string, old: string) {
        console.log(val)
        this.styleObj.background = val
    }
    // mounted () {
    //     this.styleObj.background = this.activeColor
    // }

    // updated () {
    //     console.log(this.activeColor)
    //     this.styleObj.background = this.activeColor
    // }
}
</script>
<style lang="less" scoped>
.habit-icon{
    width: 120px;
    height: 120px;
    border-radius: 50%;
    // background: rgb(255, 232, 132);
    margin: 0 auto;
    border: 3px solid black;
    margin-top:30px;
    font-size: 40px;
    svg{
        font-size: 2.8em;
    }
}
</style>

