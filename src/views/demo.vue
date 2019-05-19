<template>
  <div>
    hello vue-router
    <img src="../../assets/img/avatar.png" />
    <span>{{message.value}}</span>
    <span v-if="message.test">123</span>
    <p>
      <button @click="changeValue">changeValue</button>
    </p>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
  export default {
    data() {
      return {
        message: {
          value: 'hello vue set'
        }
      }
    },
    mounted() {
      console.log(this.clientWidth)

      // setTimeout(() => {
        // 非响应式更新，视图层不会更新
        // this.message.test = true
        // 响应式更新，视图层会更新
        // this.$set(this.message, 'test', true)
      // }, 1000)
    },
    methods: {
      changeValue: function() {
        this.message.value = 'hello vue nextTick'
        // 在下次视图更新后的回调，在vue2.1.0后支持的promise
        this.$nextTick().then(() => {
          setTimeout(() => {
            this.message.value = 'hello vue nextTick1'
          }, 1000)
        })
      }
    }
  }
</script>

<style scoped>

</style>