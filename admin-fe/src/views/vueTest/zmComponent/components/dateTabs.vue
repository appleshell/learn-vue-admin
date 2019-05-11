<template>
    <div class="dateTabsContainer">
        <div class="formTitle">
            <slot name="formTitle"></slot>
            <!--<div class="titleName">选择上课时间</div>-->
        </div>
        <div class="dateTabs">
            <span :class="['tabPrev', 'tab_tran']" v-show="scrollable && arrowShow === 'prev'" @click="prevTab">
                <i class="el-icon-arrow-left"></i>
            </span>
            <span :class="['tabNext', 'tab_tran']" v-show="scrollable && arrowShow === 'next'" @click="nextTab">
                <i class="el-icon-arrow-right"></i>
            </span>
            <div class="nav-cont" ref="navCont">
                <ul ref="tabScroll" :style="navStyle">
                    <li :class="[{'isActive':currentTab === index}]" v-for="(item,index) in timeList" :key="index"
                        @click="getCurrent(index,item)">
                        <div class="date">{{item.dateStamp | nearTime}}</div>
                        <span v-text="weekMap[item.week]"></span>
                        <i :class="['courseIcon']" v-show="hasSelectedCourse.includes(item.date)"></i>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
  import moment from 'moment'

  export default {
    data() {
      return {
        timeList: [],
        weekMap: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        tabScrollSize: 0,
        newOffset: 0,
        arrowShow: 'next',
        scrollable: false,
        currentTab: 0,
        show:false
      }
    },
    props:{
      hasSelectedCourse:{
        type:Array,
        default(){
          return []
        }
      }
    },
    created() {
      this.createTimeList()
      // 设置默认日期为当天
      this.getCurrent(this.currentTab,this.timeList[this.currentTab])
    },
    mounted() {
      this.getScrollSize()
      window.onresize = () => {
        this.getScrollSize()
      }
    },
    computed: {
      navStyle() {
        return `transform:translateX(-${this.newOffset}px)`
      }
    },
    filters: {
      nearTime(val) {
        if (moment().format('MM月DD日') === moment(val).format('MM月DD日')) {
          return '今天'
        } else if (moment().add(1, 'days').format('MM月DD日') === moment(val).format('MM月DD日')) {
          return '明天'
        } else {
          return moment(val).format('MM月DD日')
        }
      }
    },
    methods: {
      createTimeList() {
        let arr = []
        for (let i = 0; i < 7; i++) {
          let item = {dateStamp: moment().add(i, 'days').valueOf(), week: moment().add(i, 'days').weekday(),date:moment().add(i, 'days').format('MM月DD日')}
          arr.push(item)
        }
        this.timeList = arr;
        console.log(arr)
        console.log(moment().weekday())
      },
      // 获取点击的日期
      getCurrent(index,item) {
        this.currentTab = index;
        let date = {date:item.date,week:this.weekMap[item.week],timeStamp:item.dateStamp}
        this.$emit('dateClick',date)
      },
      // 获取tab向左移动的距离
      getScrollSize() {
        this.tabScrollSize = this.$refs.tabScroll.offsetWidth - this.$refs.navCont.offsetWidth
        if (this.tabScrollSize > 0) {
          this.scrollable = true;
        } else {
          this.scrollable = false;
          this.newOffset = 0
          this.arrowShow = "next"
        }
      },
      prevTab() {
        this.newOffset = 0
        setTimeout(() => {
          this.arrowShow = "next"
        }, 500)
      },
      nextTab() {
        this.newOffset = this.tabScrollSize
        setTimeout(() => {
          this.arrowShow = "prev"
        }, 500)
      }
    }
  }
</script>

<style lang="scss">
    .dateTabsContainer{
        width:100%;
        padding:0 6px;
        box-sizing: border-box;
        .formTitle {
            overflow: hidden;
            margin:16px 0;
            div {
                display: inline-block;
                vertical-align: middle;
            }
            .titleName {
                font-size: 18px;
                font-weight: bold;
                margin-right: 10px;
                &:before {
                    content: '3';
                    display: inline-block;
                    width: 22px;
                    height: 22px;
                    background-color: #999;
                    color: #fff;
                    border-radius: 50%;
                    font-size: 16px;
                    text-align: center;
                    line-height: 22px;
                    font-weight: normal;
                    margin-right: 10px;
                }
            }
        }
    }
    .dateTabs {
        width: 100%;
        overflow: hidden;
        position: relative;
        padding: 0 18px;
        box-sizing: border-box;
        .tab_tran {
            position: absolute;
            line-height: 42px;
            cursor: pointer;
        }
        .tabPrev {
            left: 0;
        }
        .tabNext {
            right: 0;
        }
        .nav-cont {
            overflow: hidden;
            ul {
                float: left;
                display: flex;
                white-space: nowrap;
                transition: transform .5s;
                padding-bottom: 4px;
                li {
                    position: relative;
                    flex-basis: 70px;
                    margin-right: 6px;
                    width:50px;
                    border: 1px solid #f0f0f0;
                    padding: 6px 12px;
                    border-radius: 6px 6px 0 0;
                    font-size: 12px;
                    text-align: center;
                    cursor: pointer;
                    transition: all .2s;
                    &:hover {
                        border-color: #0091FF;
                    }
                    &.isActive:before {
                        content: ' ';
                        position: absolute;
                        width: 0;
                        height: 0;
                        border:4px solid transparent;
                        border-top-color: #0091FF;
                        bottom: -8px;
                        left: 50%;
                        transform: translateX(-2px);
                    }
                    .date{
                        padding-bottom:4px;
                    }
                    .courseIcon{
                        position: absolute;
                        width:6px;
                        height: 6px;
                        border-radius: 50%;
                        background-color: #0091FF;
                        left:4px;
                        top:50%;
                        transform: translateY(-3px);
                    }
                    &.isActive {
                        background-color: #0091FF;
                        border-color: #0091FF;
                        color: #fff;
                        .courseIcon{
                            background-color: #fff;
                        }
                    }
                }

            }
        }
    }
</style>
