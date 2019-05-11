<template>
    <div>
        <Hea :level="1"></Hea>
        <render-table></render-table>
    </div>
</template>

<script>
  import Hea from './renderTest'
  import renderTable from './renderTable'

  export default {
    components: {
      Hea, renderTable
    }
  }
</script>
