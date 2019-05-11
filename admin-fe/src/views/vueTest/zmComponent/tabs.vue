<template>
    <div class="testContainer">
        <div class="tabs">
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
                        <div class="date">{{item.date | nearTime}}</div>
                        <span v-text="weekMap[item.week]"></span>
                        <i :class="['courseIcon']" v-show="index === 0 || index === 1"></i>
                    </li>
                </ul>
            </div>
            <el-button @click="show = !show">show</el-button>
        </div>
        <right-box :show.sync="show"></right-box>
        <!--<right-box :show="show" @update:show="val=> show = val"></right-box>-->
    </div>
</template>

<script>
  import moment from 'moment'
  import rightBox from './components/rightTransfor'

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
    components:{
      rightBox
    },
    created() {
      this.createTimeList()
    },
    mounted() {
      this.getScrollSize()
      window.onresize = () => {
        this.getScrollSize()
      }
      console.log('$options',this.$options.data())
      console.log('$data',this.$data)
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
          let item = {date: moment().add(i, 'days').valueOf(), week: moment().add(i, 'days').weekday()}
          arr.push(item)
        }
        this.timeList = arr;
        console.log(arr)
        console.log(moment().weekday())
      },
      getCurrent(index) {
        this.currentTab = index;
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
    .testContainer{
        width:100%;
        height: 100%;
    }
    .tabs {
        width: 30%;
        overflow: hidden;
        position: relative;
        padding: 0 20px;
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
