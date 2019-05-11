<template>
    <div class="classInfo">
        <date-tabs @dateClick="getDate" :hasSelectedCourse="hasCourseDate">
            <div class="titleName" slot="formTitle">选择班级</div>
        </date-tabs>
        <div class="mainClass">
            <el-tabs  v-model="selectedTime" @tab-click="getClassTime">
                <el-tab-pane v-for="(value,key,index) in courseTimes" :key="index" :label="key"
                             :name="key"></el-tab-pane>
            </el-tabs>
            <div class="classList">
                <class-item :classInfo="courseTimes[selectedTime]" v-model="selectedClass"></class-item>
            </div>
        </div>
    </div>
</template>

<script>
  import moment from 'moment'
  import dateTabs from './dateTabs'
  import classItem from './classItem'

  export default {
    data() {
      return {
        selectedDate: {},
        hasCourseDate: [],
        courseTimes:{"07:00-07:45":[{"classMemberDtoList":[],"teacherId":96954,"teacherName":"宋辞","timeKey":"","zmTeaId":"aibrmHh6WduE8yPtXJ8ia22w"},{"classMemberDtoList":[],"teacherId":91954,"teacherName":"宋辞","timeKey":"","zmTeaId":"aibrmHh6WduE8yPtXJ8ia22w"},{"classMemberDtoList":[],"teacherId":96950,"teacherName":"宋辞","timeKey":"","zmTeaId":"aibrmHh6WduE8yPtXJ8ia22w"}],"07:30-08:15":[],"08:00-08:45":[{"classMemberDtoList":[],"teacherId":96954,"teacherName":"宋辞","timeKey":"","zmTeaId":"aibrmHh6WduE8yPtXJ8ia22w"}],"08:30-09:15":[],"09:00-09:45":[],"09:30-10:15":[],"10:00-10:45":[{"classMemberDtoList":[],"teacherId":105019,"teacherName":"马建超","timeKey":"","zmTeaId":"BRD17qiaWY5OZucn9vAdBGw"}],"10:30-11:15":[{"classMemberDtoList":[],"teacherId":63098,"teacherName":"李娜","timeKey":"","zmTeaId":"jKZiabhhuialnOTQ180vG0FQ"}],"11:00-11:45":[{"classMemberDtoList":[],"teacherId":105019,"teacherName":"马建超","timeKey":"","zmTeaId":"BRD17qiaWY5OZucn9vAdBGw"}],"11:30-12:15":[],"12:00-12:45":[{"classMemberDtoList":[],"teacherId":105019,"teacherName":"马建超","timeKey":"","zmTeaId":"BRD17qiaWY5OZucn9vAdBGw"}],"12:30-13:15":[],"13:00-13:45":[{"classMemberDtoList":[],"teacherId":105019,"teacherName":"马建超","timeKey":"","zmTeaId":"BRD17qiaWY5OZucn9vAdBGw"}],"13:30-14:15":[],"14:00-14:45":[{"classMemberDtoList":[],"teacherId":105019,"teacherName":"马建超","timeKey":"","zmTeaId":"BRD17qiaWY5OZucn9vAdBGw"}],"14:30-15:15":[],"15:00-15:45":[{"classMemberDtoList":[],"teacherId":105019,"teacherName":"马建超","timeKey":"","zmTeaId":"BRD17qiaWY5OZucn9vAdBGw"}],"15:30-16:15":[],"16:00-16:45":[],"16:30-17:15":[],"17:00-17:45":[],"17:30-18:15":[],"18:00-18:45":[],"18:30-19:15":[],"19:00-19:45":[],"19:30-20:15":[],"20:00-20:45":[],"20:30-21:15":[],"21:00-21:45":[],"21:30-22:15":[]},
        selectedTime:'',
        selectedClass:{}
      }
    },
    props: {},
    components: {
      dateTabs, classItem
    },
    computed: {},
    methods: {
      getDate(date) {
        this.selectedDate = date;
      },
      getClassTime(item){
        console.log(item)
      },
    }
  }
</script>

<style lang="scss">
    .classInfo {
        .mainClass {
            padding: 20px;
            .classList{
                padding:0 48px;
            }
            .el-tabs__item {
                height: 36px;
                line-height: 36px;
                border-radius: 5px;
                border: 1px solid #eee;
                margin: 0 4px;
                overflow: hidden;
                background-color: #fff;
            }
            .el-tabs__active-bar {
                display: none;
            }
            .el-tabs__nav-wrap {
                &:after {
                    display: none;
                }
            }
            .el-tabs__item.is-top:last-child {
                padding-right: 20px;
            }

            .el-tabs__item.is-top:nth-child(2) {
                padding-left: 20px;
            }
            .el-tabs__item:hover {
                border-color: #409EFF;
            }
            .el-tabs__item.is-active {
                border-color: #409EFF;
                position: relative;
                &:after {
                    position: absolute;
                    content: '';
                    width: 24px;
                    height: 20px;
                    background: url('../../../../assets/selected.svg') no-repeat left bottom;
                    background-size: 16px 16px;
                    background-color: #409EFF;
                    border-radius: 50%;
                    top: -7px;
                    right: -9px;
                }
            }
        }

    }
</style>
