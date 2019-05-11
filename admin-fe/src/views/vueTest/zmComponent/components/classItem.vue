<template>
    <div class="classLists">
        <el-row :gutter="20">
            <el-col :span="12" v-for="(item,index) in classInfo">
                <div :class="['classItem',{'class-item-active':item.teacherId === value.teacherId}]" @click="classClick(item,index)">
                    <div class="teacher">{{item.teacherName}}</div>
                    <ul class="studentList">
                        <el-row>
                            <el-col :span="12" v-for="s in 8" :key="s">
                                <li class="studentItem">
                                    <i class="el-icon-star-off"></i>
                                    <span>吴小明</span>
                                </li>
                            </el-col>
                        </el-row>
                    </ul>
                </div>
            </el-col>
        </el-row>
    </div>

</template>

<script>
  export default {
    data() {
      return {
        currentClass: ''
      }
    },
    props: {
      value:{
        type:Object,
        default(){
          return {}
        }
      },
      classInfo: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      classClick(item, index) {
        this.currentClass = index;
        this.$emit('input',item)
      }
    }
  }
</script>

<style lang="scss">
    .classLists {

        .classItem {
            border: 1px solid #eee;
            height: 200px;
            border-radius: 8px;
            background-color: #fff;
            margin-bottom: 20px;
            cursor: pointer;
            .teacher {
                height: 36px;
                line-height: 36px;
                text-align: center;
                background-color: rgba(0, 145, 255, 0.1);
            }
            .studentList {
                padding-top: 16px;
                .studentItem {
                    text-align: center;
                    height: 32px;
                    line-height: 32px;
                }
            }
        }
        .class-item-active{
            border-color: #409EFF;
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
                top: -7px;
                right: -8px;
            }
        }
    }
</style>
