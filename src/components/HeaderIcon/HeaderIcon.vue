<template>
    <div class="header">
        <div>
            <icon :name="headerInfo.left"/>
        </div>
        <div class="header-title">{{headerInfo.title}}</div>
        <div @click="addHabit">
            <icon :name="headerInfo.right"/>
        </div>
    </div>
</template>
<script lang="ts">
import {Vue,Prop, Component} from 'vue-property-decorator'
import {HeaderInfo} from './../../store/state'
@Component({
    name: 'HeaderIcon'
})
export default class HeaderIcon extends Vue{
    @Prop() private headerInfo!: HeaderInfo
    private data () {
        return {
            
        }
    }

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
