<template>
    <div class="courseContainer">
        <div class="main">
            <div class="courseLeft courseForm">
                <course-info></course-info>
                <teacher-info></teacher-info>
                <div style="text-align: center">
                    <el-button type="primary">查询上课时间</el-button>
                </div>
            </div>
            <div class="courseRight">
                <no-course-time v-if="false"></no-course-time>
                <course-time v-model="selectedTime" v-if="true"></course-time>
                <class-info v-if="false"></class-info>
            </div>
        </div>
        <div class="footer">
            <div class="selected-time" v-for="(item,index) in selectedTime" @click="removeTab(index)">
                <span>{{item.startTimeStamp | timeFormat}} {{item.timePeriod}}</span><i class="el-icon-close"></i>
            </div>
            <el-button class="submitBtn" type="primary">提交预约</el-button>
        </div>
    </div>
</template>

<script>
  import moment from 'moment'
  import courseInfo from './addCourseInfo'
  import teacherInfo from './teacherInfo'
  import courseTime from './courseTime'
  import classInfo from './classInfo'
  import noCourseTime from './noCourseTime'

  export default {
    data() {
      return {
        selectedTime: [],
        weekMap: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      }
    },
    components: {
      courseInfo,
      teacherInfo,
      courseTime,
      classInfo,
      noCourseTime
    },
    filters: {
      timeFormat(val) {
        let weekMap = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
        let date = moment(val).format('MM月DD日')
        let week = weekMap[moment(val).weekday()]
        return `${date} ${week} `
      }
    },
    methods: {
      removeTab(index) {
        this.selectedTime.splice(index, 1)
      }
    }
  }
</script>

<style lang="scss">
    .courseContainer {
        width: 100%;
        height: 100%;
        .main {
            width: 100%;
            height: calc(100% - 126px);
            display: flex;
            .courseLeft, .courseRight {
                flex: 1;
                width: 50%;
                height: 100%;
                box-sizing: border-box;
                overflow-y: auto;
            }
            .courseLeft {
                border-right: 1px solid #e4e7ed;
                padding: 0 14px;
            }
            .courseRight {
                background-color: rgba(0, 145, 255, 0.02);
            }
        }
        .footer {
            height: 60px;
            border-top: 1px solid #eee;
            display: flex;
            align-items: center;
            position: relative;
            .selected-time {
                /*flex-basis: 120px;*/
                /*width: 120px;*/
                height: 28px;
                line-height: 28px;
                border: 1px solid #efefef;
                margin: 0 6px;
                padding: 4px 6px;
                cursor: pointer;
                font-size: 12px;
                text-align: center;
                /*align-self: center;*/
                /*display: flex;*/
                /*justify-content: center;*/
                /*align-items: center;*/
                background-color: rgba(0, 145, 255, 0.1);
                .el-icon-close {
                    position: relative;
                    padding-left: 14px;
                }
            }
            .submitBtn{
                position: absolute;
                right:28px;
            }
        }
    }
</style>
