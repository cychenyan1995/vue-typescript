<template>
    <div class="container"> 
        <div class="container-top">
            <van-collapse v-for="(item, index) in habitList" :key="index" v-model="activeNames">
                <van-collapse-item :name="index">
                    <p slot="title"><icon name="time" />{{item.title}}</p>
                    <icon :name="item.name" />
                </van-collapse-item>
                <!-- <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
                <van-collapse-item title="标题3" name="3">内容</van-collapse-item> -->
            </van-collapse>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, Mutation } from 'vuex-class'
// 按需加载
import { Collapse, CollapseItem } from 'vant'
import { Habit } from './../../store/state'
// Vue.use(Collapse).use(CollapseItem)
@Component({
    components: {
        [Collapse.name]: Collapse,
        [CollapseItem.name]: CollapseItem
    }
})
export default class Today extends Vue {
    // 获取state中的数据
    @State private habitList!: Habit[]
    private data () {
        return {
            activeNames: ['1']
        }
    }
}
</script>

<style lang="less" scoped>
.container{
    width: 100%;
    height: calc(100% - 250px);
}
.container-top{
    .van-collapse-item{
        p{
            text-align: left;
            svg{
                margin-right: 10px;
            }
        }
    }
}
</style>
<style lang="less">
.van-cell{
    padding: 20px;
    font-size: 30px;
    line-height: 40px;
    i{
        font-size: 30px;
    }
}
.van-collapse-item__content{
    font-size: 70px;
}
</style>

