<template>
    <el-container>
        <el-aside width="200px">
            <div class="logo">
                <img src="@/assets/logo.png" alt="">
            </div>
            <side-bar></side-bar>
        </el-aside>
        <el-container>
            <el-header>
                <main-header></main-header>
            </el-header>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
  import mainHeader from './components/mainHeader'
  import sideBar from './components/sideBar/sideBar'

  export default {
    data() {
      return {}
    },
    components:{
      mainHeader,sideBar
    }
  }
</script>

<style lang="scss">
    .el-container {
        height: 100%;
    }

    .el-aside {
        background-color: #56bc8a;
        height: 100%;
        text-align: center;
        .logo{
            height: 60px;
            border-bottom: 1px solid #ccc;
            border-right: 1px solid #ccc;
            box-sizing: border-box;
            background-color: #fff;
            img{
                height: 100%;
            }
        }
    }

    .el-header {
        border-bottom: 1px solid #ccc;
    }
</style>
