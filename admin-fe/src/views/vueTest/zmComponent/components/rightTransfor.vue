<template>
    <transition name="slide-fade">
        <div class="courseBoxContainer" v-if="show" @click="close">
            <div class="box" @click.stop>
                <div class="courseHead">
                    <div class="stuInfo">
                        <span class="stuTag stuName">程佳恒</span>
                        <span class="stuTag sex">男</span>
                        <span class="stuTag grade">小二</span>
                        <span class="stuTag stuType">正式生</span>
                    </div>
                </div>
                <div class="courseBody">
                    <el-tabs class="courseTab" v-model="editableTabsValue" type="card">
                        <el-tab-pane
                                v-for="(item, index) in editableTabs"
                                :key="item.name"
                                :label="item.title"
                                :name="item.name"
                        >
                            {{item.content}}
                        </el-tab-pane>
                    </el-tabs>
                    <course-body></course-body>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import courseBody from './reserveCourse'
  export default {
    data() {
      return {
        editableTabsValue:'预约测评课',
        editableTabs:[{title:'预约测评课',name:'预约测评课'}]
      }
    },
    components:{
      courseBody
    },
    props: ['show'],
    methods:{
      close(e){
        this.$emit('update:show',false)
      }
    }
  }
</script>

<style lang="scss">
    .courseBoxContainer {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        position: fixed;
        top: 0;
        left: 0;
        .box {
            height: 100%;
            background-color: #fff;
            margin-left: 35%;
            .courseHead{
                border-bottom: 6px solid #eee;
                .stuInfo{
                    height: 70px;
                    line-height: 70px;
                    padding:0 28px;
                    .stuTag{
                        margin-right:20px;
                        font-size:12px;
                        color:#888;
                        vertical-align: middle;
                    }
                    .stuName{
                        font-size:20px;
                        color:#000;
                    }
                }
            }
            .courseBody{
                height: calc(100% - 76px);
                .courseTab{
                    padding:10px 20px 0;
                }
            }
        }
    }
    .slide-fade-enter-active {
        transition: all .5s ease;
    }
    .slide-fade-leave-active {
        transition: all .3s ease;
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateX(150px);
        opacity: 0;
    }
</style>
