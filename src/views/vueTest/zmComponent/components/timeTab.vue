<template>
    <div class="timeTabs">
        <!-- <div @click="tabClick(index,item)" :class="['time-tab',{'time-tab-active':activeIndex.includes(index)},{'time-tab-disabled':item.status===3}]" v-for="(item,index) in timeList" :key="index"> -->
        <div @click="tabClick(item)"
             :class="['time-tab',{'time-tab-active':selectedTimeOnly.includes(item.startTimeStamp)},{'time-tab-disabled':item.status===3}]"
             v-for="(item,index) in timeData" :key="index">
            <div v-if="item.status!==3">
                <span>{{item.timePeriod}}</span>
                <span style="display: block" v-if="item.text">{{item.text}}</span>
            </div>
            <el-popover
                    v-else
                    placement="top-start"
                    title="标题"
                    width="200"
                    trigger="hover"
                    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                <div  slot="reference">
                    <span>{{item.timePeriod}}</span>
                    <span style="display: block" v-if="item.text">{{item.text}}</span>
                </div>
            </el-popover>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        selectedTime: this.value
      }
    },
    props: {
      value: {},
      timeData: {
        type: Array,
        default() {
          return []
        }
      },
      isSingle:{
        type:Boolean,
        default:false
      }
    },
    computed: {
      tabDisabled() {
        return false
      },
      // 获取选中的时间对象中的时间戳属性
      selectedTimeOnly() {
        return this.value.map(item => item.startTimeStamp)
      }
    },
    methods: {
      tabClick(item) {
        if (item.status === 3) return // 不可选状态
        console.log('还能点击吗')
        if (this.isSingle) { // 单选，只能选择一个时间
          this.selectedTime = [item]
          // this.$emit('input', [item])
        } else { // 多选
          if (this.selectedTimeOnly.includes(item.startTimeStamp)) { // 多选时，时间toggle
            this.selectedTime.forEach((timeItem, i) => {
              if (timeItem.startTimeStamp === item.startTimeStamp) {
                this.selectedTime.splice(i, 1)
              }
            })
          } else {
            if (this.selectedTime.length >= 3) { // 选中时间最多不能超过3个
              this.$message.warning('只能选择3个时间段')
            } else {
              this.selectedTime.push(item)
            }
          }
        }
        this.$emit('input', this.selectedTime)
      },
      removeByVal(val, arr) {
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] === val) {
            arr.splice(i, 1)
          }
        }
        return arr
      }
    }
  }
</script>

<style lang="scss">
    .timeTabs {
        display: flex;
        margin: 8px 0;
        flex-wrap: wrap;
    }

    .time-tab {
        flex-basis: 120px;
        width: 120px;
        height: 28px;
        border: 1px solid #efefef;
        margin-right: 6px;
        margin-bottom: 6px;
        padding: 10px 4px;
        cursor: pointer;
        font-size: 12px;
        text-align: center;
        /*align-self: center;*/
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
    }

    .time-tab:hover {
        border-color: #0091FF
    }

    .time-tab-active {
        border-color: #0091FF;
        /*color: #fff;*/
        position: relative;
        overflow: hidden;
        &:after{
             position: absolute;
             content: '';
             width: 24px;
             height: 22px;
             background: url('../../../../assets/selected.svg') no-repeat left bottom;
             background-size: 16px 16px;
             background-color: #409EFF;
             border-radius: 50%;
             top: -9px;
             right: -9px;
         }
    }

    .time-tab-disabled {
        background-color: #dedede;
        color: #999;
        cursor: not-allowed;
    }
</style>
