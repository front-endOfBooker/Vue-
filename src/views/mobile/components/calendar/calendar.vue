<template>
  <div>
    calendar
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      initDate: function(year, month) {
        let now = new Date()
        now.setFullYear(year)
        now.setMonth(month)
        now.setDate(0)
        return now.getDate()
      }
    }
  }
</script>

<style scoped>

</style>