<template>
    <div class="classSchedule">
        <full-calendar :events="events" :config="calendarConfig" @day-click="handleDateClick" @event-selected="handleEvent"></full-calendar>
    </div>
</template>

<script>
  import {FullCalendar} from 'vue-full-calendar'

  export default {
    name: 'classSchedule',
    data() {
      return {
        events: [
          {
            title:'高一3班数学',
            start:'2019-04-15 08:00:00',
            end:'2019-04-15 08:45:00'
          }
        ],
        calendarConfig: {
          header:{
            right:'month,agendaWeek'
          },
          locale:'zh-cn',
          defaultView:'month',
          buttonText:{
            month:'月',
            today:'今天'
          }
        }
      }
    },
    components: {
      FullCalendar
    },
    methods:{
      handleDateClick(val) {
        console.log(val)
      },
      handleEvent(val){
        console.log(val)
      }
    }
  }
</script>

<style>

</style>
