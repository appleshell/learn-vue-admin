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
        <el-tree
            :data="data2"
            show-checkbox
            check-strictly
            node-key="id"
            :default-expanded-keys="[2, 3]"
            :default-checked-keys="[5]"
            :props="defaultProps">
        </el-tree>
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
            name: '大红',
            number: 10010101
          }, {
            name: '大刚',
            number: 10010102
          }, {
            name: '大明',
            number: 10010103
          },
        ],
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods: {
      search() {

      }
    }
  }
</script>
