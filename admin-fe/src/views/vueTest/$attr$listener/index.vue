<template>
    <div class="first">
        <attr :first="first" :second="second" :third="third"></attr>
    </div>
</template>

<script>
    import attr from './$attr'
export default {
  data(){
    return {
      first:'firstMessage',
      second:'secondMessage',
      third:'thirdMessage'
    }
  },
  components:{
    attr
  }
}
</script>

<style lang="scss">

</style>
