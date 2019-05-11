<template>
    <div class="noDate">
        <div class="text">
            <img :src="url" alt="">
            <p>完善左边信息，查询可约课的时间</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
      return {
        url: require('@/assets/icon.svg')
      }
    }
}
</script>

<style lang="scss">
    .noDate{
        width:100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0,145,255,0.1);
        .text{
            text-align: center;
            font-size:14px;
            color:#666;
        }
    }
</style>
