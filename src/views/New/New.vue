<template>
    <div class="new">
        <div class="new-header">
            <div @click="clickLeft">
                <icon name="left-arrow" slot="left"/>
            </div>
            <div>{{$route.meta.title}}</div>
            <div></div>
        </div>
        <router-view />
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({})
export default class New extends Vue{
    private clickLeft() {
        this.$router.go(-1)
    }
}
</script>
<style lang="less" scoped>
.new{
    &-header{
        display: grid;
        grid-template-columns: 100px auto 100px;
        height: 100px;
        align-items: center;
        font-size: 40px;
        font-weight: bold;
        border-bottom: 1px solid rgba(235, 237, 240, .6);
    }
}
</style>


