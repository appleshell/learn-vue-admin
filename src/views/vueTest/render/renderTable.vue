<template>
    <div>
        <el-table :data="tableData" border stripe>
            <el-table-column v-for="(item,index) in columns" :key="index" :prop="item.prop" :label="item.label">
                <template v-if="item.render" slot-scope="scope">
                    <!--<component :is="item.render"></component>-->
                    <Render :render="item.render" :row="scope"></Render>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    import Render from './render'
  export default {
    data() {
      return {
        columns: [
          {
            prop: 'name',
            label: '姓名'
          }, {
            prop: 'grade',
            label: '年级'
          }, {
            prop: 'classNum',
            label: '班级'
          }, {
            prop: 'studentNum',
            label: '学号'
          }, {
            prop: 'sex',
            label: '性别'
          },{
            prop:'time',
            label:'时间',
            render: (h,{row}) => {
              return h('span',{
                style:{color:'red'}
              },[h('i',{},row.time)])
            }
          },{
            label: '操作',
            render: (h,{row}) => {
                return h('el-button',{
                  props:{
                    type:'primary',
                    size:'small'
                  },
                  on:{
                    click:()=>{
                      this.edit(row)
                    }
                  }
                },'编辑')
            }
          }
        ],
        tableData:[
          {
            name:'小明',
            grade:'01',
            classNum:'01',
            studentNum:'10081101',
            sex:'男',
            time:'2019-03-30 10:00:00'
          },{
            name:'小刚',
            grade:'01',
            classNum:'01',
            studentNum:'10081102',
            sex:'男',
            time:'2019-03-30 11:01:01'
          }
        ]
      }
    },
    components:{
      Render
    },
    methods:{
      edit(){
        console.log('编辑~~')
      }
    }
  }
</script>
