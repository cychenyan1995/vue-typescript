// 接口
export interface HeaderInfo {
    left?: String,
    title: String,
    right?:String
}
export interface NavInfo {
    id: Number,
    isActived: Boolean,
    name: {
        defaultName: String,
        activedName: String
    },
    path: String,
    tagName: String
}
export interface Habit{
    id: number;
    title: string,
    name: string,
    color: string
}
export interface TimeSlot {
    id: number,
    title: string
}
export interface State {
    headerInfo: HeaderInfo,
    activePage: NavInfo[],
    habitList: Habit[],
    timeSlotList: TimeSlot[],
    curHabit: Habit,
    testTs: string
}
const state: State = {
    headerInfo: {
        left: 'letter',
        title: 'TODAY',
        right: '', // filter
    },
    // 导航的状态
    activePage: [
        {
          id: 0,
          isActived: true,
          name: {
            defaultName: 'today-o',
            activedName: 'today',
          },
          path: '/',
          tagName: '日常',
        },
        {
          id: 1,
          isActived: false,
          name: {
            defaultName: 'habit-o',
            activedName: 'habit',
          },
          path: '/habit',
          tagName: '习惯',
        },
        {
          id: 2,
          isActived: false,
          name: {
            defaultName: 'setting-o',
            activedName: 'setting',
          },
          path: '/setting',
          tagName: '更多',
        },
      ],
    //   习惯列表
    habitList: [    
      {
          id: 1524822339790,
          title: '起床之后',
          name: 'taiyang',
          color: '#ffe884'
      },
    ],
    curHabit: {
      id: 1524822339790,
      title: '起床之后',
      name: 'taiyang',
      color: '#ffe884'
    },
    testTs: 'vyvy',
    timeSlotList: []
}
export default state