<template>
    <div class="menu-wrapper">
        <!-- 当前路由没有子路由 -->
        <template v-if="!menuItem.children">
            <el-menu-item :index="menuItem.path" v-text="menuItem.meta.title" @click="goRoute(menuItem.name)"></el-menu-item>
        </template>
        <!-- 当前路由只有一个子路由且该子路由不是二级子路由，而且该子路由没有二级路由。这里渲染出来的是只有一个一级子路由且没有二级子路由 -->
        <template v-else-if="menuItem.children.length === 1 && !isSSub && !menuItem.children[0].children">
            <el-menu-item :index="resolve(menuItem.path , menuItem.children[0].path)" v-text="menuItem.children[0].meta.title" @click="goRoute(menuItem.children[0].name)"></el-menu-item>
        </template>
        <template v-else>
            <el-submenu :index="menuItem.path">
                <template slot="title">
                    <span v-text="menuItem.meta.title"></span>
                </template>
                <!--<el-menu-item :index="resolve(menuItem.path, item.path)" v-for="item in menuItem.children" :key="item.path" v-text="item.meta.title"></el-menu-item>-->
                <side-bar-item v-for="route in menuItem.children" :key="route.path" :menu-item="route" :isSSub="true"></side-bar-item>
            </el-submenu>
        </template>
    </div>
</template>

<script>
  export default {
    name:'sideBarItem',
    data() {
      return {}
    },
    props: {
      menuItem: {
        type: Object,
        required:true,
      },
      // 该路由是不是二级子路由
      isSSub: {
        type: Boolean,
        default: false
      }
    },
    created(){
    },
    computed:{

    },
    methods:{
      goRoute(name){
        this.$router.push({name})
      },
      resolve(basepath,path) {
        if(basepath === '/'){
          return basepath + path;
        }else{
          return basepath + '/' + path;
        }
      }
    }
  }
</script>
