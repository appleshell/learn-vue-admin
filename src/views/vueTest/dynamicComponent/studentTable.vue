<template>
    <div class="container">
        <el-menu :default-active="activeName" mode="horizontal" @select="handleSelect">
            <el-menu-item index="class1">1班学生</el-menu-item>
            <el-menu-item index="class2">2班学生</el-menu-item>
            <el-menu-item index="class3">3班学生</el-menu-item>
        </el-menu>

        <component :is="currentTab" :searchParam="studentForm">
            <el-form :model="studentForm" :inline="true" slot="ssForm" class="commonForm">
                <el-form-item>
                    <el-input placeholder="请输入学号" v-model="studentForm.studentNumber"></el-input>
                </el-form-item>
            </el-form>
        </component>
    </div>
</template>

<script>
  import class1 from './class1'
  import class2 from './class2'
  import class3 from './class3'

  export default {
    data() {
      return {
        activeName: 'class1',
        currentTab: 'class1',
        studentForm: {
          studentNumber: ''
        }
      }
    },
    components: {
      class1, class2, class3
    },
    methods: {
      handleSelect(index) {
        this.currentTab = index;
      }
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
