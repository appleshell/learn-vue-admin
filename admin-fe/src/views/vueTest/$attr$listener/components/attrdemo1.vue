<template>
<div>
<span>{{second}}</span>
</div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  props:['second'],// 如果孙组件不用props接收$attrs传递进来的属性，则这个属性会变成孙组件根源素的自定义属性
}
</script>

<style lang="scss">

</style>
