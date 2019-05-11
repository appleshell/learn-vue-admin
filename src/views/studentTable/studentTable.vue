<template>
    <div class="container">
        <el-menu :default-active="activeName" mode="horizontal" @select="handleSelect">
            <el-menu-item index="0">理科</el-menu-item>
            <el-menu-item index="1">文科</el-menu-item>
        </el-menu>
        <el-form :model="studentForm" :inline="true" slot="ssForm" class="commonForm">
            <el-form-item>
                <el-select placeholder="请选择班级" v-model="studentForm.classType">
                    <el-option v-for="item in classDict" :key="item.id" :value="item.value" :label="item.label"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-input placeholder="请输入学号" v-model="studentForm.stuNumber"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input placeholder="请输入学生姓名" v-model="studentForm.stuName"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="search">搜索</el-button>
                <el-button type="primary" @click="addStudent">新增</el-button>
            </el-form-item>
        </el-form>
        <class-table :studentList="studentList" @editStu="editStu"></class-table>
        <student-dialog ref="studentDialog" @refreshStu="getList"></student-dialog>
    </div>
</template>

<script>
  import {getStudentList,getStudentListNew} from "@/api/studentTable";
  import classTable from './class'
  import studentDialog from './studentDialog'
  import {mapActions,mapGetters} from 'vuex'

  export default {
    data() {
      return {
        activeName: '0',
        currentTab: '0',
        studentForm: {
          stuNumber: '',
          stuName: '',
          classType: 1,
          gradeType: 1,
          discipline: 0,
        },
        studentList: [],
        addDialog: false
      }
    },
    components: {
      classTable, studentDialog
    },
    created() {
      this.getGradeDict()
      this.getClassDict()
      this.getList()
    },
    computed:{
      ...mapGetters(['classDict'])
    },
    methods: {
      handleSelect(index) {
        this.currentTab = index;
        this.studentForm.discipline = index;
        this.getList()
      },
      getList() {
        console.log(this.studentForm)
        // getStudentList(this.studentForm).then(res => {
        getStudentListNew(this.studentForm).then(res => {
          let {code, data, message} = res
          if (code === 0) {
            this.studentList = data.list
          }
        })
      },
      search() {
        this.getList()
      },
      addStudent() {
        this.$refs.studentDialog.showDialog()
      },
      editStu(row){

        this.$refs.studentDialog.showDialog(row)
      },
      ...mapActions(['getGradeDict','getClassDict'])
    }
  }
</script>

<style lang="scss">
    .container {
        .commonForm {
            display: inline-block;
        }
        .innerForm {
            display: inline-block;
        }
    }
</style>
