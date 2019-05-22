<template>
  <div class="app">
    <span v-if="showBack" class="back" @click="goBack">&lt;</span>
  </div>
</template>

<script>
  export default {
    props: {
      showBack: Boolean,
      default: true
    },
    methods: {
      goBack: function() {
        history.go(-1)
      }
    }
  }
</script>

<style scoped>
.app {
  width: 100%;
  background-color: #fff;
  box-shadow: 1px 1px 2px #d0d0d0;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  padding: 0 10px;
  margin-bottom: 10px;
}
.app .back {
  display: inline-block;
  width: 30px;
  height: 25px;
  line-height: 25px;
  background-color: rgb(114, 198, 253);
  border-radius: 4px;
  box-shadow: 1px 1px 1px 0 #e0e0e0;
  text-align: center;
}
</style>