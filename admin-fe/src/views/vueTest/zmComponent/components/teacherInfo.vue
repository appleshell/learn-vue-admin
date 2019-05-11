<template>
    <div class="teacherInfo">
        <div class="formTitle">
            <div class="titleName">填写老师要求</div>
            <div class="courseCount">（填写老师要求，匹配更适合学生的老师）</div>
        </div>
        <el-form label-width="90px">
            <el-row :gutter="12">
                <el-col :span="12">
                    <el-form-item label="老师类型:">
                        <el-select></el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="老师性别:">
                        <el-select></el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="已联系老师:">
                        <el-select></el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="其他备注:">
                        <el-input type="textarea"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script>
  export default {
    data(){
      return {

      }
    }
  }
</script>

<style lang="scss">
    .teacherInfo{
        .el-upload{
            width:100%;
            color:#409EFF;
        }
        .formTitle {
            overflow: hidden;
            margin:16px 0;
            div {
                display: inline-block;
                vertical-align: middle;
            }
            .titleName {
                font-size: 18px;
                font-weight: bold;
                margin-right: 10px;
                &:before {
                    content: '2';
                    display: inline-block;
                    width: 22px;
                    height: 22px;
                    background-color: #999;
                    color: #fff;
                    border-radius: 50%;
                    font-size: 16px;
                    text-align: center;
                    line-height: 22px;
                    font-weight: normal;
                    margin-right: 10px;
                }
            }
            .courseCount {
                font-size: 12px;
            }
        }
    }
</style>
