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
            <el-table-column label="学生姓名" prop="name"></el-table-column>
            <el-table-column label="学号" prop="number"></el-table-column>
        </el-table>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        searchForm: {
          studentName: '',
        },
        studentList: [
          {
            name: '小小红',
            number: 10010101
          }, {
            name: '小小刚',
            number: 10010102
          }, {
            name: '小小明',
            number: 10010103
          },
        ]
      }
    },
    methods: {
      search() {

      }
    }
  }
</script>
