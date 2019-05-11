<template>
    <div class="class1">
        <el-table :data="studentList" border>
            <el-table-column label="年级" prop="gradeType" :formatter="gradeFormatter"></el-table-column>
            <el-table-column label="班级" prop="classType"></el-table-column>
            <el-table-column label="学生姓名" prop="stuName"></el-table-column>
            <el-table-column label="学号" prop="stuNumber"></el-table-column>
            <el-table-column label="性别" prop="sex" :formatter="sexFormatter"></el-table-column>
            <el-table-column label="备注" prop="remark"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" @click="editStu(scope.row)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        sexMap:{0:'女',1:'男'}
      }
    },
    props: {
      studentList: {
        type:Array,
        default(){
          return []
        }
      }
    },
    created(){

    },
    computed:{
      ...mapGetters(['gradeDict','classDict','gradeMap'])
    },
    methods: {
      editStu(row){
        this.$emit('editStu',row)
      },
      gradeFormatter(row){
        return this.gradeMap[row.gradeType]
      },
      sexFormatter(row){
        return this.sexMap[row.sex]
      }
    }
  }
</script>

<style lang="scss">
    .searchForm {
        .innerForm {
            display: inline-block;
        }
    }
</style>
