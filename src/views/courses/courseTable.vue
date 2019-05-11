<template>
    <div class="course">
        <ul class="classList">
            <li v-for="item in courseClass" :key="item.classId" v-text="item.className"></li>
        </ul>
        <div class="classSchedule">
            <class-schedult></class-schedult>
        </div>
    </div>
</template>

<script>
  import {getCourseData} from "@/api/course";
  import classSchedult from './classSchedule'

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
        ]
      }
    },
    components:{
      classSchedult
    },
    created() {
      this.getList()
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
