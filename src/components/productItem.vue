<template>
  <li class="product-wrapper" @click="handleClickDetail">
    <a class="product needsclick">
      <div class="picture lazyload" :style="{'backgroundImage': 'url('+item.pic+')'}"></div>
      <div class="info">
        <div class="name">{{item.name}}</div>
        <div class="info-tag">
          <span>包邮包税</span>
        </div>
        <div class="price">¥ 29.00</div>
        <div class="country">
          <img class="flag" src="http://img.ymatou.com/app/flag/circle/Korea.png" alt="flag" />
          韩国
        </div>
      </div>
    </a>
  </li>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: ["item"],
    methods: {
      handleClickDetail() {
        this.$router.push("/details");
      }
    }
});
</script>

<style lang="stylus" scoped>
.product
  display block
  height 7.4666666667rem
  position relative
  background-color #fff
  .picture
    height 4.6133333333rem
    position relative
    background-size contain
    background-position center center
    background-repeat no-repeat
  .info
    padding 0 0.16rem
    position relative
    .info-tag
      width 100%
      overflow hidden
      margin 0.1866666667rem 0 0.2666666667rem
      span
        display inline-block
        font-size 9px
        border 1px solid #c33
        color #c33
        padding 0.0266666667rem 0.08rem
        margin 1px
        line-height 0.3733333333rem
        border-radius 0.08rem
    .price
      line-height 1
      font-size 16px
      color #c33
    .name
      width 100%
      height 0.9066666667rem
      font-size 12px
      color #383838
      line-height 0.4533333333rem
      text-overflow ellipsis
      -webkit-line-clamp 2
      -webkit-box-orient vertical
      word-wrap break-word
      display -webkit-box
      overflow hidden
      white-space normal
      margin 0.2666666667rem 0 0
    .country
      font-size 10px
      color #646464
      text-align right
      display inline-block
      position absolute
      right 0.4rem
      bottom 0
      .flag
        width 0.2666666667rem
        height 0.2666666667rem
        border-radius 50%
        margin-right 0.1066666667rem
        vertical-align middle
</style>