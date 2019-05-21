<template>
  <div>
    <!-- {{message}}
    <img src="../assets/img/avatar.png" /> -->
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import getDate from './utils/add'
  export default {
    data() {
      return {
        message: 'hello world'
      }
    },
    mounted() {
      this.getDateAct()
    },
    methods: {
      getDateAct: async function() {
        let a = await getDate()
        this.message = a
      }
    }
  }
</script>

<style scoped>

</style>