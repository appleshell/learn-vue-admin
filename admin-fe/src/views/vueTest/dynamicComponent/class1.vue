<template>
    <div class="class1">
        <div class="searchForm">
            <slot name="ssForm"></slot>
            <el-form :model="searchForm" :inline="true" class="innerForm">
                <el-form-item>
                    <el-input placeholder="请输入学生姓名" v-model="searchForm.studentName"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="search">搜索</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table :data="studentList" border>
            <el-table-column label="年级" prop="grade"></el-table-column>
            <el-table-column label="班级" prop="classNum"></el-table-column>
            <el-table-column label="学生姓名" prop="name"></el-table-column>
            <el-table-column label="学号" prop="studentNumber"></el-table-column>
            <el-table-column label="性别" prop="sex"></el-table-column>
            <el-table-column label="备注" prop="remark"></el-table-column>
            <el-table-column label="操作"></el-table-column>
        </el-table>
    </div>
</template>

<script>
  import {getStudentList} from "@/api/studentTable";
  export default {
    data() {
      return {
        searchForm: {
          studentName: '',
        },
        studentList: [

        ]
      }
    },
    props: {
      searchParam: {
        type: Object
      }
    },
    created(){
      this.getList()
    },
    methods: {
      getList(){
        let param = {grade:'01',classNum:'01'}
        getStudentList(param).then(res => {
          let {code,data,message} = res
          if(code === 0) {
            this.studentList = data.list
          }
        })
      },
      search() {
        let param = Object.assign(this.searchForm, this.searchParam)
        console.log(param)
        this.getList()
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
