<script>
    export default {
      functional: true,
      props:{
        render:Function,
        row:Object
      },
      render(h,context){
        return context.props.render(h,context.props.row)
      }
    }
</script>
