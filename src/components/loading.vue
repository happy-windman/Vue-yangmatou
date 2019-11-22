<template>
  <div class="load-more" >
    <div id="loading">
      <div class="item" id="item1">
        <div class="ball" id="ball1"></div>
      </div>
      <div class="item" id="item2">
        <div class="ball" id="ball2"></div>
      </div>
      <div class="item" id="item3">
        <div class="ball" id="ball3"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped lang="stylus">
.load-more
  width 100%
  height 1.3333333333rem
  overflow hidden
  // text-align center
  position relative
  #loading
    width 1.12rem
    height 0.3733333333rem
    position absolute
    top 0
    right 0
    left 0
    bottom 0
    margin auto
    opacity 0
    -webkit-animation fadeIn 1s 1
    animation fadeIn 1s 1
    -webkit-animation-fill-mode forwards
    animation-fill-mode forwards
    .item
      -webkit-animation translate 1s infinite ease-in-out alternate, zindex 2s infinite ease-in-out
      animation translate 1s infinite ease-in-out alternate, zindex 2s infinite ease-in-out
      position absolute
    #item2
      -webkit-animation-delay -450ms
      animation-delay -450ms
    #item3
      -webkit-animation-delay -1.24s
      animation-delay -1.24s
    .ball
      width 0.3733333333rem
      height 0.3733333333rem
      box-shadow 0 -0.0466666667rem 0 rgba(0, 0, 0, 0.15) inset
      background-color #E3746B
      border-radius 50%
      -webkit-animation scale 1s infinite ease-in-out alternate
      animation scale 1s infinite ease-in-out alternate
      -webkit-animation-delay -0.5s
      animation-delay -0.5s
      -webkit-transform scale(0.5)
      transform scale(0.5)
    :after
      content ''
      width 0.3733333333rem
      height 13px
      background #eee
      position absolute
      top 0.5333333333rem
      margin-left -0.1866666667rem
      border-radius 50%
    #ball2
      background-color #397BF9
      -webkit-animation-delay -1s
      animation-delay -1s
    #ball3
      background-color #F4B400
      -webkit-animation-delay -2s
      animation-delay -2s
@keyframes translate
  100%
    -webkit-transform translateX(0.8rem)
    transform translateX(0.8rem)
@keyframes translate
  100%
    -webkit-transform translateX(0.8rem)
    transform translateX(0.8rem)
@keyframes scale
  100%
    -webkit-transform scale(1)
    transform scale(1)
@keyframes scale
  100%
    -webkit-transform scale(1)
    transform scale(1)
@keyframes zindex
  25%
    z-index 1
  75%
    z-index -1
@keyframes zindex
  25%
    z-index 1
  75%
    z-index -1
@keyframes fadeIn
  100%
    opacity 1
@keyframes fadeIn
  100%
    opacity 1
</style>