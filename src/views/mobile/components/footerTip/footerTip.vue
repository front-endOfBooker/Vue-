<template>
  <div class="footerTip" @click="closeTip" v-if="modalShow">
    <div>
    <transition :name="`fade${optionComList.length + optionRedList.length + optionTipList.length + 1}`">
      <ul class="content" v-if="show">
        <li id="tip" v-for="item in optionTipList" :key="item">{{item}}</li>
        <li id="tip">
          <slot name="tip"></slot>
        </li>
        <li id="option" v-for="(item, index) in OptionComList" :key="index" @click.stop="selectOption(item.option, index)">
          {{item.option}}
          <i v-if="item.select">√</i>
        </li>
        <li id="delete" v-for="item in optionRedList" :key="item" @click.stop="selectOption('delete')">{{item}}</li>
        <li>取消</li>
      </ul>
    </transition>
    </div>
  </div>
</template>

<script>
  /* 
  * 传入 optionComList: 默认选项的选项数组; optionRedList: 红色选项的选项数组; optionTipList: 提示选项的数组
  * 传出 tipStatus: fooerTip的状态; selectOption: 用户选择的选项(取消不传)
  * 父组件通关v-if控制显示和关闭
  * slot name=tip 的插槽
  */ 
  export default {
    data () {
      return {
        show: false, // 内容框是否显示
        OptionComList: [],
        modalShow: false // 遮盖层是否显示
      }
    },
    props: {
      optionComList: {
        type: Array,
        default: () => []
      },
      optionRedList: {
        type: Array,
        default: () => []
      },
      optionTipList: {
        type: Array,
        default: () => []
      },
      checkIndex: {
        type: Number,
        default: 999
      },
      footerShow: {
        type: Boolean,
        default: false
      },
    },
    watch: {
      footerShow(value) {
        console.log(value)
        if (value) {
          this.modalShow = true
          this.$nextTick(() => {
            this.show = true
          })
        } else {
          this.closeTip()
        }
      }
    },
    mounted () {
      document.documentElement.style.overflow='hidden'
 
      this.optionComList.forEach(item => {
        this.OptionComList.push({
          option: item,
          select: false
        })
      })
      
      if (this.checkIndex != 999 && this.checkIndex < this.OptionComList.length) {
        this.OptionComList[this.checkIndex].select = true
      }
    },
    methods: {
      // 关闭Tip组件
      closeTip: function () {
        this.show = false
        setTimeout(() => {
          this.$emit('tipStatus', false)
          this.modalShow = false
          document.documentElement.style.overflow=''
        }, `${(this.optionComList.length + this.optionRedList.length + this.optionTipList.length)*100}`)
      },
      // 用户选择的选项
      selectOption: function (option, index) {
        this.OptionComList.forEach((item,index) => {
          this.OptionComList[index].select = false
        })
        if (option != 'delete') {
          this.OptionComList[index].select = true
        }
        this.$nextTick(() => {
          this.$emit('selectOption', option)
        })
      }
    }
  }
</script>

<style scoped>
.footerTip {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  width: 100%;
  background-color: rgba(0,0,0,0.2);
  display: block;
}
.footerTip .content {
  background-color: #F1F1F1;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}
.footerTip .content li {
  width: 100%;
  height: 48px;
  background-color:rgba(255,255,255,1);
  box-shadow:0px 0px 0px 0px rgba(200,199,204,1);
  line-height: 48px;
  font-size:17px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(47,47,47,1);
  text-align: center;
}
.footerTip .content #option {
  border-bottom: 1px solid #F1F1F1;
}
.footerTip .content #delete {
  color:rgba(247,98,98,1);
}
.footerTip .content #tip {
  font-size:14px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(163,163,163,1);
  border-bottom: 1px solid #F1F1F1;
}
.footerTip .content #option {
  position: relative;
}
.footerTip .content #option i {
  position: absolute;
  top: 2px;
  right: 122px;
  font-size: 14px;
  color: #4CAF50;
}
.footerTip .content li:nth-last-child(1) {
  margin-top: 8px;
}

/* 下拉框动画 */
/* 2个选项时下拉动画 */
.fade2-enter-active {
  transition: all .2s;
  -webkit-transition: all .2s;
  -o-transition: all .2s;
  -ms-transition: all .2s;
  -moz-transition: all .2s;
}
.fade2-leave-active {
  transition: all .2s ease-in;
  -webkit-transition: all .2s ease-in;
  -o-transition: all .2s ease-in;
  -ms-transition: all .2s ease-in;
  -moz-transition: all .2s ease-in;
}
.fade2-enter, .fade2-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate3d(0, 105px, 0);
  -webkit-transform: translate3d(0, 105px, 0);
  -ms-transform: translate3d(0, 105px, 0);
  -o-transform: translate3d(0, 105px, 0);
  -moz-transform: translate3d(0, 105px, 0);
}
/* 3个选项时下拉动画 */
.fade3-enter-active {
  transition: all .2s;
  -webkit-transition: all .2s;
  -o-transition: all .2s;
  -ms-transition: all .2s;
  -moz-transition: all .2s;
}
.fade3-leave-active {
  transition: all .2s ease-in;
  -webkit-transition: all .2s ease-in;
  -o-transition: all .2s ease-in;
  -ms-transition: all .2s ease-in;
  -moz-transition: all .2s ease-in;
}
.fade3-enter, .fade3-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate3d(0, 153px, 0);
  -webkit-transform: translate3d(0, 153px, 0);
  -ms-transform: translate3d(0, 153px, 0);
  -o-transform: translate3d(0, 153px, 0);
  -moz-transform: translate3d(0, 153px, 0);
}
/* 4个选项时下拉动画 */
.fade4-enter-active {
  transition: all .3s;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  -ms-transition: all .3s;
  -moz-transition: all .3s;
}
.fade4-leave-active {
  transition: all .3s ease-in;
  -webkit-transition: all .3s ease-in;
  -o-transition: all .3s ease-in;
  -ms-transition: all .3s ease-in;
  -moz-transition: all .3s ease-in;
}
.fade4-enter, .fade4-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate3d(0, 201px, 0);
  -webkit-transform: translate3d(0, 201px, 0);
  -ms-transform: translate3d(0, 201px, 0);
  -o-transform: translate3d(0, 201px, 0);
  -moz-transform: translate3d(0, 201px, 0);
}
/* 5个选项时下拉动画 */
.fade5-enter-active {
  transition: all .3s;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  -ms-transition: all .3s;
  -moz-transition: all .3s;
}
.fade5-leave-active {
  transition: all .3s ease-in;
  -webkit-transition: all .3s ease-in;
  -o-transition: all .3s ease-in;
  -ms-transition: all .3s ease-in;
  -moz-transition: all .3s ease-in;
}
.fade5-enter, .fade5-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate3d(0, 249px, 0);
  -webkit-transform: translate3d(0, 249px, 0);
  -ms-transform: translate3d(0, 249px, 0);
  -o-transform: translate3d(0, 249px, 0);
  -moz-transform: translate3d(0, 249px, 0);
}
/* 6个选项时下拉动画 */
.fade6-enter-active {
  transition: all .3s;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  -ms-transition: all .3s;
  -moz-transition: all .3s;
}
.fade6-leave-active {
  transition: all .3s ease-in;
  -webkit-transition: all .3s ease-in;
  -o-transition: all .3s ease-in;
  -ms-transition: all .3s ease-in;
  -moz-transition: all .3s ease-in;
}
.fade6-enter, .fade6-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate3d(0, 297px, 0);
  -webkit-transform: translate3d(0, 297px, 0);
  -ms-transform: translate3d(0, 297px, 0);
  -o-transform: translate3d(0, 297px, 0);
  -moz-transform: translate3d(0, 297px, 0);
}
/* 7个选项时下拉动画 */
.fade7-enter-active {
  transition: all .4s;
  -webkit-transition: all .4s;
  -o-transition: all .4s;
  -ms-transition: all .4s;
  -moz-transition: all .4s;
}
.fade7-leave-active {
  transition: all .4s ease-in;
  -webkit-transition: all .4s ease-in;
  -o-transition: all .4s ease-in;
  -ms-transition: all .4s ease-in;
  -moz-transition: all .4s ease-in;
}
.fade7-enter, .fade7-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate3d(0, 345px, 0);
  -webkit-transform: translate3d(0, 345px, 0);
  -ms-transform: translate3d(0, 345px, 0);
  -o-transform: translate3d(0, 345px, 0);
  -moz-transform: translate3d(0, 345px, 0);
}
/* 8个选项时下拉动画 */
.fade8-enter-active {
  transition: all .4s;
  -webkit-transition: all .4s;
  -o-transition: all .4s;
  -ms-transition: all .4s;
  -moz-transition: all .4s;
}
.fade8-leave-active {
  transition: all .4s ease-in;
  -webkit-transition: all .4s ease-in;
  -o-transition: all .4s ease-in;
  -ms-transition: all .4s ease-in;
  -moz-transition: all .4s ease-in;
}
.fade8-enter, .fade8-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate3d(0, 393px, 0);
  -webkit-transform: translate3d(0, 393px, 0);
  -ms-transform: translate3d(0, 393px, 0);
  -o-transform: translate3d(0, 393px, 0);
  -moz-transform: translate3d(0, 393px, 0);
}
</style>