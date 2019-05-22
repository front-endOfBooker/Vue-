<template>
  <div class="main">
    <button class="footer-tip-button" @click="open">footerTip</button>

    <footer-tip 
    :optionComList="optionComList" 
    :optionRedList="optionRedList" 
    :optionTipList="optionTipList" 
    :footerShow="footerShow"
    @tipStatus="tipStatus" 
    @selectOption="selectOption">
      <template v-slot:tip>我是tip</template>
    </footer-tip>
  </div>
</template>

<script>
  import footerTip from './footerTip'
  export default {
    data() {
      return{
        optionComList: ['booker', 'fox'],
        optionRedList: ['cancel'],
        optionTipList: [],//['footerTip'],
        footerShow: false,
      }
    },
    components: {
      footerTip,
    },
    methods: {
      open: function() {
        this.footerShow = true
      },
      tipStatus: function() {
        this.footerShow = false
      },
      selectOption: function(option) {
        this.footerShow = false
      },
    }
  }
</script>

<style scoped>
.footer-tip-button {
  width: 200px;
  height: 32px;
  line-height: 30px;
  background: #3eafff;
  border: 1px solid #c0c0c0;
}
</style>