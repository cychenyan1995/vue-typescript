import { GET_ACTIVE_PAGE, CHANGE_HEADER_STATE } from './types'
import { State, Habit } from './state'
export default {
    // 切换tab
    GET_ACTIVE_PAGE(state: State, id: Number) {
        state.activePage.map(item => {
            if(item.id === id){
                item.isActived = true
            }else{
                item.isActived = false
            }
        })
    },
    // 切换tab的时候改变header
    CHANGE_HEADER_STATE(state: State, id:Number){
        const { headerInfo } = state
        switch(id){
            case 0:
                headerInfo.left = 'letter';
                headerInfo.right = ''; // filter
                headerInfo.title = 'TODAY';
                break;
            case 1:
                headerInfo.left = 'file';
                headerInfo.right = 'new';
                headerInfo.title = '我的习惯';
                break;
            case 2:
                headerInfo.left = '';
                headerInfo.right = ''; // skin
                headerInfo.title = '设置';
                break;
        }
    },
    // 当前习惯
    CREATE_HABIT(state: State, habit: Habit) {
        state.curHabit = habit
    },
    // 回退的时候清除当前习惯

    // 选择icon
    SELECT_ICON(state: State, name: string) {
        state.curHabit.name = name
    },
    // 选择背景
    SELECT_COLOR(state: State, color: string) {
        state.curHabit.color = color
        // state.testTs = color
    },
    // 新增习惯
    ADD_HABIT(state: State) {
        state.habitList.push(state.curHabit)
    }
}