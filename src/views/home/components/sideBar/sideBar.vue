<template>
    <el-menu :default-active="activeIndex" :unique-opened="true" :router="false" :background-color="'#56bc8a'" :text-color="'#fff'" :active-text-color="'#f0e68c'">
        <side-bar-item v-for="route in routesList" :key="route.path" :menu-item="route"></side-bar-item>
    </el-menu>
</template>

<script>
  import sideBarItem from './sideBarItem'

  export default {
    data() {
      return {
        activeIndex:''
      }
    },
    components: {
      sideBarItem
    },
    computed: {
      routesList() {
        return this.getMenuLists(this.$router.options.routes)
      }
    },
    methods:{
      //过滤获取侧边栏数据
      getMenuLists(routes){
        return routes.filter(item => {
          if(item.children){
            this.getMenuLists(item.children)
          }
          return item.menu
        })
      }
    }
  }
</script>

<style lang="scss">
    .el-menu {
        border: none;
        .el-submenu{
            .el-menu-item{
                background-color: rgb(51,171,121) !important;
                &:hover{
                    background-color: rgb(80,202,142) !important;
                }
            }
            .el-submenu__title{
                /*ul.el-menu--inline{*/
                /*}*/
                i{
                    color:#fff;
                }
            }
        }
        .is-opened{
            .el-submenu__title{
                background-color: rgb(51,171,121) !important;
                &:hover{
                    background-color: rgb(61,181,122) !important;
                }
            }

        }
    }
</style>
