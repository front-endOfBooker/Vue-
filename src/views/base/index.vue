<template>
  <div>
    <v-header :showBack="showBack"/>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        showBack: false
      }
    },
    mounted() {
      this.showBack = this.$route.name == 'list' ? false : true
    },
    watch: {
      $route() {
        this.showBack = this.$route.name == 'list' ? false : true
      }
    }
  }
</script>

<style scoped src="../../../assets/css/index.css"></style>
