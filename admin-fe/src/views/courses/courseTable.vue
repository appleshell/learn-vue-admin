<template>
    <div class="course">
        <ul class="classList">
            <li v-for="item in courseClass" :key="item.classId" v-text="item.className"></li>
        </ul>
        <div class="classSchedule">
            <!-- <class-schedult></class-schedult> -->
            <calendar :taskList="taskList"></calendar>
        </div>
    </div>
</template>

<script>
  import {getCourseData} from "@/api/course";
  import classSchedult from './classSchedule'
  import calendar from './components/calendar.vue'

  export default {
    data() {
      return {
        courseData: [],
        courseClass:[
          {
            classId:1,
            className:'1班'
          },
          {
            classId:2,
            className:'2班'
          },
          {
            classId:3,
            className:'3班'
          },
        ],
        list: [
          {
            date: '2019-06-01',
            task: [
              {
                taskName: '任务1',
                taskOwner: '张三',
                status: 1
              },
              {
                taskName: '任务任务任务任务任务任务任务6',
                taskOwner: '李四',
                status: 2
              },
            ]
          },
          {
            date: '2019-06-03',
            task: [
              {
                taskName: '任务任务任务任务任务2',
                taskOwner: '张三',
                status: 1
              }
            ]
          },
          {
            date: '2019-06-09',
            task: [
              {
                taskName: '任务2',
                taskOwner: '张三',
                status: 1
              }
            ]
          },
          {
            date: '2019-06-18',
            task: [
              {
                taskName: '任务任务任务任务任务任务任务7',
                taskOwner: '赵六',
                status: 3
              },
              {
                taskName: '任务8',
                taskOwner: '王七',
                status: 4
              },
            ],
            taskName: '任务1'
          },
          {
            date: '2019-07-30',
            task: [
              {
                taskName: '任务2',
                taskOwner: '张三',
                status: 1
              }
            ]
          },
        ]
      }
    },
    components:{
      classSchedult,
      calendar
    },
    created() {
      this.getList()
    },
    computed: {
      taskList() {
            let taskObj = {}
            this.list.forEach(item => {
                taskObj[item.date] = item
            })
            return taskObj || {}
        }
    },
    methods: {
      getList() {
        getCourseData().then(res => {
            this.courseData = res.data
        })
      }
    }
  }
</script>

<style lang="scss">
.course{
    display: flex;
    .classList{
        flex-basis: 150px;
        margin-right:10px;
        border:1px solid #f1f1f1;
        li{
            padding:20px 8px;
            border-bottom:1px solid #f1f1f1;
            cursor: pointer;
            transition: background-color .4s;
            &:hover{
                background-color: rgba(24,210,119,0.2);
            }
        }
    }
    .classSchedule{
        flex:1;
    }
}
</style>
