<script>
    export default {
      render(h){
        return h(`h${this.level}`,{style:{color:'red'}},[this.inner,h('el-button',{type:'primary'},'点击')])
      },
      data(){
        return {
          inner:'测试',
        }
      },
      props:{
        level:{
          type: Number,
          default: 1
        }
      }
    }
</script>
