<template>
    <el-dialog title="新增学生" :visible.sync="dialogVisible" width="600px" @close="closeDialog">
        <el-form :model="studentForm" ref="studentForm" :rules="rules" label-width="70px">
            <el-form-item prop="stuName" label="姓名:">
                <el-input placeholder="请输入学生姓名" v-model="studentForm.stuName"></el-input>
            </el-form-item>
            <el-form-item prop="sex" label="性别:">
                <el-radio v-model="studentForm.sex" :label="0">女</el-radio>
                <el-radio v-model="studentForm.sex" :label="1">男</el-radio>
            </el-form-item>
            <el-form-item prop="gradeType" label="年级:">
                <el-radio-group v-model="studentForm.gradeType">
                    <el-radio v-for="item in gradeDict" :key="item.id" :label="item.value">{{item.label}}</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item prop="classType" label="班级:">
                <el-select v-model="studentForm.classType" placeholder="请选择学生班级">
                    <el-option v-for="item in classDict" :key="item.id" :label="item.label"
                               :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item prop="stuNumber" label="学号:">
                <el-input placeholder="请输入学生学号" v-model="studentForm.stuNumber"></el-input>
            </el-form-item>
            <el-form-item prop="discipline" label="分科:">
                <!--<el-input placeholder="" v-model="studentForm.discipline"></el-input>-->
                <el-radio :label="0" v-model="studentForm.discipline">理科</el-radio>
                <el-radio :label="1" v-model="studentForm.discipline">文科</el-radio>
            </el-form-item>
            <el-form-item prop="remark" label="备注:">
                <el-input type="textarea" placeholder="请输入备注" v-model="studentForm.remark"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer">
            <el-button type="primary" @click="confirmAdd">确认</el-button>
            <el-button type="primary" @click="dialogVisible = false">取消</el-button>
        </span>
    </el-dialog>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {addStudent,updateStudent} from "@/api/studentTable";

  export default {
    data() {
      return {
        dialogVisible: false,
        studentForm: {
          stuName:'',
          sex:'',
          gradeType:'',
          classType:'',
          discipline:'',
          remark:'',
          stuNumber:''
        },
        classOptions: [],
        editId:'',
        rules: {
          stuName: [{
            required: true, message: '请输入学生姓名', trigger: 'blur'
          }],
          stuNumber: [{
            required: true, message: '请输入学生学号', trigger: 'blur'
          }],
          sex: [{
            required: true, message: '请选择学生性别', trigger: 'change'
          }],
          gradeType: [{
            required: true, message: '请选择学生年级', trigger: 'change'
          }],
          classType: [{
            required: true, message: '请选择学生班级', trigger: 'change'
          }],
          discipline: [{
            required: true, message: '请选择学生分科', trigger: 'change'
          }]
        }
      }
    },
    computed:{
      ...mapGetters(['gradeDict','classDict'])
    },
    methods: {
      showDialog(row) {
        this.dialogVisible = true
        console.log(row)
        if(row){
          this.$nextTick(() => {
             let {stuName,sex,gradeType,classType,discipline,remark,stuNumber,id} = row
             this.studentForm = {stuName,sex,gradeType,classType,discipline,remark,stuNumber}
             this.editId = id;
          })
        }
      },
      confirmAdd() {
        this.$refs.studentForm.validate(valid => {
          if(valid){
            if(this.editId){
              this.editStudent()
            }else{
              this.addStudent()
            }
          }
        })
      },
      addStudent(){
        addStudent(this.studentForm).then(res => {
          let {code} = res
          if(code === 0){
            this.$message.success('新增成功')
            this.refreshStudent()
            this.dialogVisible = false
          }
        })
      },
      editStudent(){
        updateStudent({id:this.editId,...this.studentForm}).then(res => {
          let {code} = res
          if(code === 0){
            this.$message.success('更新成功')
            this.refreshStudent()
            this.editId = ''
            this.dialogVisible = false
          }
        })
      },
      refreshStudent(){
        this.$emit('refreshStu')
      },
      closeDialog(){
        this.$refs.studentForm.resetFields()
      }
    }
  }
</script>
