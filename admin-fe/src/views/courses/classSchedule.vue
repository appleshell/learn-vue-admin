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
            start:'2019-06-15 08:00:00',
            end:'2019-06-17 08:45:00'
          }
        ],
        calendarConfig: {
          header:{
            right:'month,agendaWeek'
          },
          firstDay: 0,
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
        console.log('dataClick', val)
      },
      handleEvent(val){
        console.log('event', val)
      }
    }
  }
</script>

<style>

</style>
