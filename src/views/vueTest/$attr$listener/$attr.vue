<template>
    <div class="second">
        <span>{{first}}</span>
        <attrdemo v-bind="$attrs"></attrdemo>
    </div>
</template>

<script>
    import attrdemo from './components/attrdemo1'
  export default {
    data() {
      return {}
    },
    inheritAttrs: false, // 子组件的根元素是否继承父组件传递进来的，且不被props接收的属性。true-继承，属性会变成子组件根元素的自定义属性
    props: ['first'],
    components:{
      attrdemo
    },
    created(){
      console.log(this.$attrs)
    }
  }
</script>

<style lang="scss">

</style>
