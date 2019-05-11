<template>
    <div class="courseTime">
        <date-tabs @dateClick="getDate" :hasSelectedCourse="hasCourseDate">
            <div class="titleName" slot="formTitle">选择上课时间</div>
        </date-tabs>
        <div class="mainTime">
            <div class="period morning">
                <span class="periodTitle">上午</span>
                <time-tab v-model="selectedTime" :time-data="timeList.morningTime" :is-single="singleState"></time-tab>
            </div>
            <div class="period afternoon">
                <span class="periodTitle">下午</span>
                <time-tab v-model="selectedTime" :time-data="timeList.afternoonTime"
                          :is-single="singleState"></time-tab>
            </div>
            <div class="period evening">
                <span class="periodTitle">晚上</span>
                <time-tab v-model="selectedTime" :time-data="timeList.eveningTime" :is-single="singleState"></time-tab>
            </div>
            <!--<div>{{selectedTime}}</div>-->
            <div class="period customize">
                <span class="periodTitle">没找到合适时间？点击自定义时间</span>
                <!--<time-tab v-model="selectedTime" :time-data="timeList.eveningTime" :is-single="singleState"></time-tab>-->
                <div style="display: flex;">
                    <div class="time-tab">
                        <el-dropdown trigger="click" @command="handleCommand">
                          <span class="el-dropdown-link">
                            <i class="el-icon-time el-icon--left"></i>自定义时间
                          </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="07:00">07:00</el-dropdown-item>
                            <el-dropdown-item command="07:30">07:30</el-dropdown-item>
                            <el-dropdown-item command="08:00">08:00</el-dropdown-item>
                            <el-dropdown-item command="08:30">08:30</el-dropdown-item>
                            <el-dropdown-item command="09:00">09:00</el-dropdown-item>
                        </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                    <!--<time-tab v-model="selectedTime" :time-data="customizeTime" :is-single="singleState"></time-tab>-->
                    <div class="time-tab" v-for="item in customizeTime">
                        <span>{{item.timePeriod}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import moment from 'moment'
  import dateTabs from './dateTabs'
  import timeTab from './timeTab'

  export default {
    data() {
      return {
        timeList: {
          morningTime: [
            {
              time: '10:00-10:30',
              status: 1,
              text: '老师少，成功率低'
            },
            {
              time: '10:30-11:00',
              status: 2
            },
            {
              time: '11:00-11:30',
              status: 3
            },
            {
              time: '11:30-12:00',
              status: 3,
              text: '无老师，不建议预约'
            },
          ],
          afternoonTime: [
            {
              time: '12:00-13:00',
              status: 1,
              text: '老师少，成功率低'
            },
            {
              time: '12:30-13:30',
              status: 2
            },
            {
              time: '13:00-14:00',
              status: 3
            },
            {
              time: '13:30-14:30',
              status: 2,
              text: '无老师，不建议预约'
            },
            {
              time: '15:00-15:30',
              status: 2,
              text: '老师少，成功率低'
            },
            {
              time: '15:30-16:30',
              status: 2,
              text: '无老师，不建议预约'
            },
            {
              time: '12:30-13:30',
              status: 2
            },
            {
              time: '13:00-14:00',
              status: 3
            },
            {
              time: '13:30-14:30',
              status: 2,
              text: '无老师，不建议预约'
            },
            {
              time: '15:00-15:30',
              status: 2,
              text: '老师少，成功率低'
            },
            {
              time: '15:30-16:30',
              status: 2,
              text: '无老师，不建议预约'
            },
          ],
          eveningTime: [
            {
              time: '17:00-17:30',
              status: 1,
              text: '老师少，成功率低'
            },
            {
              time: '18:30-19:30',
              status: 2
            },
            {
              time: '19:00-20:00',
              status: 3
            },
            {
              time: '19:30-20:30',
              status: 2,
              text: '无老师，不建议预约'
            },
            {
              time: '19:00-20:00',
              status: 3
            },
            {
              time: '19:30-20:30',
              status: 2,
              text: '无老师，不建议预约'
            },
          ]
        },
        selectedDate:{},
        selectedTime: this.value,
        // selectedTime: [
        //   {
        //     time: '10:00-10:30',
        //     status: 1,
        //     text: '老师少，成功率低'
        //   },
        //   {
        //     time: '15:30-16:30',
        //     status: 2,
        //     text: '无老师，不建议预约'
        //   }, {
        //     time: '17:00-17:30',
        //     status: 1,
        //     text: '老师少，成功率低'
        //   }
        // ],
        singleState: false,
      }
    },
    props:{
      value:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components: {
      dateTabs,
      timeTab
    },
    watch:{
      timeLenght(){
        this.$emit('updateTime',this.selectedTime)
        this.$emit('input',this.selectedTime)
      },
      singleTime(){
        this.$emit('input',this.selectedTime)
      }
    },
    computed:{
      // 选中的自定义时间
      customizeTime(){
        return this.selectedTime.filter(item => item.type === 'cus'&&moment(item.startTimeStamp).format('MM月DD日')===this.selectedDate.date)
      },
      // 选中时间段的数量，多选时长度每次点击都会改变，触发input事件
      timeLenght(){
        return this.selectedTime.length
      },
      // 单选时，选中的时间
      singleTime(){
        return this.selectedTime[0]&&this.selectedTime[0].startTimeStamp
      },
      // 有课程的日期
      hasCourseDate(){
        return this.selectedTime.length?this.selectedTime.map(item => moment(item.startTimeStamp).format('MM月DD日')):[]
      }
    },
    methods:{
      getDate(date){
        console.log('date',date)
        this.selectedDate = date;
        this.createTimePeriod()
      },
      handleCommand(time){
        let cusStartTime = moment(this.selectedDate.timeStamp).format(`YYYY-MM-DD ${time}:00`)
        let endTime = moment(cusStartTime).add(1, 'hours').format('HH:mm')
        let timeObj = {startTimeStamp:moment(cusStartTime).valueOf(),startTime:cusStartTime,timePeriod:`${time}-${endTime}`,type:'cus'}
        if(this.singleState){
            this.selectedTime = [timeObj]
        }else{
            if(this.selectedTime.length < 3){
              if(this.customizeTime.find(item => item.startTimeStamp === timeObj.startTimeStamp)){
                this.$message.warning('时间段已存在')
                return
              }
              this.selectedTime.push(timeObj)
            }else{
              this.$message.warning('只能选择3个时间段')
            }
        }
      },
      // 根据日期来创建时间段
      createTimePeriod(){
        let moringStart = ['10:00','10:30','11:00','11:30']
        let afternoonStart = ['12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00']
        let eveningTime = ['17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00']
        this.timeList.morningTime = this.timeType(moringStart);
        this.timeList.afternoonTime = this.timeType(afternoonStart);
        this.timeList.eveningTime = this.timeType(eveningTime);
      },
      timeType(timeType){
        let timePeriod = []
        for(let i = 0;i<timeType.length;i++){
          let startTime = moment(this.selectedDate.timeStamp).format(`YYYY-MM-DD ${timeType[i]}:00`)
          let endTime = moment(startTime).add(1, 'hours').format('HH:mm')
          let timeObj = {startTimeStamp:moment(startTime).valueOf(),startTime,timePeriod:`${timeType[i]}-${endTime}`}
          timePeriod.push(timeObj)
        }
        console.log('dddddddddd',timePeriod)
        return timePeriod
      }
    }
  }
</script>

<style lang="scss">
    .courseTime {
        .mainTime {
            padding: 20px;
        }
        .period{
            margin-top: 18px;
            .periodTitle{
                display: inline-block;
                font-size:14px;
            }
        }
        .morning {

        }
        .customize{
            border-top:1px solid #ddd;
            .periodTitle{
                text-align: center;
                position: relative;
                top: -10px;
                background: #fff;
                padding: 0 10px;
                left: 50%;
                transform: translateX(-50%);
                color:#666;
            }
        }
    }
</style>
