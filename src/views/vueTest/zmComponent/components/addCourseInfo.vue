<template>
    <div class="courseInfo">
        <div class="formTitle">
            <div class="titleName">完善试听信息</div>
            <div class="courseCount">（当前学生还剩2次免费测评课，您本周还能预约5次测评课）</div>
        </div>
        <el-form label-width="100px">
            <el-row :gutter="12">
                <el-col :span="12">
                    <el-form-item label="试听科目:">
                        <el-select></el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="课程类型:">
                        <el-select></el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="教材版本:">
                        <el-select></el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="试听知识点:" required="true">
                        <el-select></el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="试听形式:">
                        <el-select></el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="预约原因:">
                        <el-select></el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="科目总分:">
                        <el-select></el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="学生分数:">
                        <el-input placeholder="请输入"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="正式课频率:">
                        <el-select></el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="上传错题:">
                        <el-upload
                            class="upload-demo"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :before-remove="beforeRemove"
                            :on-exceed="handleExceed"text
                            :file-list="fileList">
                            <i class="el-icon-plus avatar-uploader-icon"></i><span> 添加</span>
                        </el-upload>
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
          fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
        }
      }
    }
</script>

<style lang="scss">
    .courseInfo{
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
                    content: '1';
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
