<template>
    <div class="adminHeader">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="item in breadcrumbs" :key="item.path">{{item.meta.title}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-dropdown>
            <span class="el-dropdown-link">
                <span v-text="userInfo.name"></span><i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        breadcrumbs:[]
      }
    },
    created(){
      this.getBreadcrumb()
    },
    computed:{
      ...mapGetters(['userInfo'])
    },
    watch:{
      $route(){
        this.getBreadcrumb()
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('Logout').then(res => {
          let { code, message } = res
          if(code === 0){
            this.$router.push('/login')
          }else{
            this.$message.error(message)
          }
        })
      },
      getBreadcrumb(){
        let paths = this.$route.matched;
        this.breadcrumbs = paths.filter(item => {
          return item.meta && item.meta.breadcrumb
        })
      }
    }
  }
</script>

<style lang="scss">
    .adminHeader {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>
