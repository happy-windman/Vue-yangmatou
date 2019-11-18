<template>
  <div>
    <myHeader :path="path"></myHeader>
    <div class="details-wrap">
      <div class="details-swiper">
        <van-swipe @change="onChange">
          <van-swipe-item v-for="(img,index) in detailsImg" :key="index">
            <img :src="img" width="100%" style="height:10rem" />
          </van-swipe-item>

          <div class="custom-indicator" slot="indicator">{{ current + 1 }}/8</div>
        </van-swipe>
      </div>

      <div class="product-info">
        <div class="productinfo-content">
          <div class="product-name">
            <span class="tag">包邮包税</span>
            <span class="name">韩国爱茉莉护发精油发油女卷发修复护理改善防毛躁烫后护卷柔顺</span>
          </div>
          <div class="product-price">
            <span class="interval-price">
              <i>¥&nbsp;</i>39~72
            </span>
          </div>
          <div class="product-activity">
            <span class="name">活动价￥38.8起，黑五狂欢价</span>
            <span class="day">11月22日00:00准时开始</span>
          </div>
        </div>
        <div class="seller-coupon">
          <div class="coupon-btn" @click="onclickDown('coupon')">
            <div class="tag"></div>
            <div class="list">
              <span class="item">
                <i class="tag-before"></i>满1999减60
                <i class="tag-after"></i>
              </span>
            </div>
          </div>
          <van-action-sheet v-model="show" :cancel-text="downType=='specs'?'':'取消'" @cancel="onCancel">
            <div class="coupon-pop iphonex show" v-if="downType=='coupon'">
              <div class="title">买手优惠券</div>
              <div class="list">
                <div class="item">
                  <div class="cart">
                    <div class="price">
                      ¥
                      <i>60</i>
                    </div>
                    <div class="rule">满1999元可用</div>
                  </div>
                  <div class="info">
                    <div class="name">
                      <span>买手券</span>限买手(首尔姐妹花)商品
                    </div>
                    <div class="time">2019.11.22-2019.11.25</div>
                    <div
                      module_index
                      module_name="coupon"
                      sproductid="66419dbb-8f6c-4c36-925d-5aba6c6ba017"
                      sellerid="20927755"
                      class="btn"
                    >点击领取</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="logistics-pop iphonex show" v-if="downType=='logistics-pop'">
              <div class="item">
                <div class="name">虚拟发货</div>
                <div class="desc">支付成功且买手接单后，将自动闪电发货</div>
              </div>
              <div class="pic">
                <img src="//s1.ymatou.com/itemm/static/img/log-pinyou.e8056fe.png" />
              </div>
            </div>
            <div class="sku-pop" v-if="downType=='specs'">
              <div class="sku-content">
                <div class="sku-info">
                  <div
                    class="pic"
                    style="background-image: url(&quot;http://pic1.ymatou.com/G02/shangou/M06/E3/0C/CgvUBFn3-pCAMPZoAAP9GA9bkWQ240_1_1_n_w_lb.jpg&quot;);"
                  ></div>
                  <div class="desc">
                    <span class="price">
                      <i>¥&nbsp;</i>39~72
                    </span>
                    <span class="stock"></span>
                    <span class="choosed">请选择: 规格分类</span>
                  </div>
                </div>
                <div class="spec-wrap">
                  <div class="spec">
                    <div class="title">规格分类</div>
                    <div class="options">
                      <span class="sku">黄色-2瓶</span>
                      <span class="sku">黄色-经典款-70ml</span>
                      {
                      "value": ""
                      }
                    </div>
                  </div>
                </div>
                <div class="purchase-amount">
                  <div class="text">
                    <span class="title">
                      购买数量
                      <br />
                      <!---->
                    </span>
                  </div>
                  <div class="amount">
                    <input type="button" value="-" onclick class="btn-minus" />
                    <span class="num">1</span>
                    <input type="button" value="+" onclick class="btn-plus" />
                  </div>
                </div>
              </div>
              <div class="preorder-pop-layer preorder-pop-layer-active">
                <!---->
              </div>
              <div class="spec-confirm">
                <span class="half">加入购物车</span>
                <span class="half">立即购买</span>
              </div>
            </div>
          </van-action-sheet>
        </div>
      </div>

      <div class="logistics-freight-server">
        <div class="logistics-wrap" @click="onclickDown('logistics-pop')">
          <div class="logistics-info">
            <span class="tag">物流</span>
            <span class="value">
              拼邮
              <i data-v-5152bdb0>，韩国发货</i>
            </span>
          </div>
          <div class="logistic-time"></div>
        </div>
        <div class="logistics-wrap">
          <span class="tag">运费</span>
          <span class="value">包邮</span>
        </div>
        <div class="server-wrap">
          <span class="tag-server">假一赔三</span>
          <span class="tag-server">售后无忧</span>
        </div>
      </div>

      <div class="sku-wrap">
        <div class="sku-btn" @click="onclickDown('specs')">
          <span class="tag">选择</span>
          <span class="value">规格分类</span>
        </div>
        <!---->
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import myHeader from "components/header";
import { Swipe, SwipeItem, ActionSheet } from "vant";

import { get } from "../utils/http";

Vue.use(Swipe)
  .use(SwipeItem)
  .use(ActionSheet);
export default Vue.extend({
  data() {
    return {
      path: "details",
      current: 0,
      detailsImg: [],
      show: false,
      downType: ""
    };
  },
  methods: {
    onclickDown(type) {
      this.downType = type;
      this.show = true;
    },
    onChange(index) {
      this.current = index;
    },
    onCancel() {
      this.show = false;
    }
  },
  async mounted() {
    var docEl = document.documentElement;
    var html = document.querySelector("html");
    var rem = docEl.clientWidth / 23.4;
    html.style.fontSize = rem + "px";

    let { data } = await get({
      url: "/ajax/item/api/getProductDescriptionInfo",
      params: {
        productId: "04f8bcd8-a103-40e0-8fa7-1e11bb19308f"
      }
    });
    this.detailsImg = [
      ...this.detailsImg,
      ...data.result.moduleList[2].picList
    ];
    console.log(this.detailsImg);
  },
  components: {
    myHeader
  }
});
</script>

<style  lang="stylus" scoped>
.van-popup--round
  border-radius 0
.details-swiper
  width 100%
  overflow hidden
  position relative
  background-color #fff
  .custom-indicator
    color #fff
    background-color #252525
    border-radius 0.1875rem
    padding 0 0.125rem
    text-align center
    position absolute
    bottom 0
    right 0.625rem
    text-shadow 0 1px 1px rgba(56, 56, 56, 0.5)
.product-info
  width 100%
  overflow hidden
  background-color #fff
  padding 0 0 0 0.75rem
  border-bottom 0.625rem solid #f1f1f1
  .productinfo-content
    padding 0.5rem 0.75rem 0.625rem 0
    .product-name
      width 100%
      display inline-block
      line-height 1.375rem
      font-family STHeitiSC-Medium
      font-size 0
      text-overflow ellipsis
      -webkit-line-clamp 2
      overflow hidden
      white-space normal
      span.tag
        display inline-block
        border 1px solid #c33
        font-size 0.625rem
        color #c33
        padding 0 0.09375rem
        border-radius 0.125rem
        margin-right 0.1875rem
        line-height 0.8125rem
        vertical-align middle
      .name
        font-size 0.75rem
        display inline
        font-size 0.9375rem
        letter-spacing 1px
        color #292929
        vertical-align middle
    .product-price
      width 100%
      overflow hidden
      margin-top 0.3125rem
      line-height 1.25rem
      font-size 0
      .interval-price
        font-family STHeitiSC-Medium
        font-size 1.125rem
        color #c33
        vertical-align middle
    .product-activity
      margin-top 0.3125rem
      display inline-block
      font-size 0.75rem
      line-height 1.375rem
      height 1.375rem
      overflow hidden
      text-align left
      font-family PingFangSC-Regular
      span
        display inline-block
        font-size 0.75rem
      .name
        padding-left 0.375rem
        padding-right 0.375rem
        border-radius 0.1875rem
        background #c33
        line-height 1.375rem
        height 1.375rem
        color #fff
        max-width 11.875rem
        text-overflow ellipsis
        -webkit-line-clamp 1
        overflow hidden
        white-space normal
        float left
      .day
        max-width 9.375rem
        color #c33
        position relative
        text-indent 0.75rem
        line-height 1.3125rem
        height 1.375rem
        border-bottom 0.125rem solid #c33
        margin-left -0.25rem
        &:after
          position absolute
          left -0.125rem
          top 0
          content ''
          width 0.875rem
          height 1.375rem
          background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAABGdBTUEAALGPC/xhBQAAAlFJREFUWAm9mL9rFEEUx2cSgwkiCAciRrBQEEwR8PYuXAo9C0NSKAQDIhIPNPk3QqrUaa0C6cQ+RRqLlLnbeFhYWKXNQUCMKZLLPr+zuMc4vL2b3Z3ZbW7m7dvv577z4+3NyXa1SsK4pBDHCH3H59fxSuXT7P7+HyMld1dyQF0N0J6Qcqvabm/r8bztkcCBsJS7gmgt6HQuB7EcjTHrZ4jew+1n6/yURHsgBDDZy2EQrKRoWYUzAZUiEW3/XFq6bqXOJGUHCjH96+TkNaNlFcoMjFWlXLdSZ5JyASXRs06j8ZDRGxnKBcTikdTvr41UZxJyAWMdohY1m9cYzaGhIsA74fn5y6HqzM38QIhRFGUe1kJALJ7F7tzcPcZIaqgQEItn7DKKPqSqMzcKAZWeBJA2N611rBOZLxuH4PJ+uLf3Iu2+GS8MjAWjyLryOAGioL/qzs/fNt1wfSdACE/0Ly5aHMCMuQKqd+VHU5zrOwPiRfkorNWechA95g4IVczlyMrjFijEylGzeUt3ZLadAmFxKjo7e2dC9L5boFImGronnQOxWmfDej3QXelt58DY5JDK4wcoxNvuwsIN3VnS9gLEPN68Oj19k0D0Tz9AEDCX7J70ByRqfKvVZnR3qu0NqMSvmMrjFYhhXTXPIV6BWDyV373esnKbXH6BoKCg/1d5vAPBfI5j/YPyHOKHHVwNXs5lOFR7soWhxYnd87ZIhhHAu916/XFpQAWKhKiUB5SyLyYnf5QJ3HhycNBTwMwHSvWQzfXvH6w2FstOcHj4JXnmLyIloaVw78NwAAAAAElFTkSuQmCC')
          background-size cover
  .seller-coupon
    overflow hidden
    background #fff
    .coupon-btn
      padding 0.9375rem 0.75rem 0.9375rem 0
      overflow hidden
      font-size 0
      display flex
      -webkit-display flex
      border-top 1px solid #dedede
      position relative
      .list
        display inline-block
        flex 1
        -webkit-flex 1
        white-space nowrap
        overflow hidden
        overflow-x auto
        margin-right 0.625rem
        .item
          font-size 0.625rem
          display inline-block
          line-height 0.875rem
          border 1px solid #e95656
          color #e95656
          padding 0 0.5rem
          margin-right 0.3125rem
          position relative
          z-index 1
          &:before
            content ''
            position absolute
            width 0.25rem
            height 0.625rem
            background #fff
            display inline-block
            z-index 11
            top 0.125rem
            right -0.25rem
            transform translate(1px)
            -webkit-transform translate(1px)
        .tag-before, .tag-after
          z-index 2
          display inline-block
          width 0.5rem
          height 0.5rem
          border-radius 100%
          position absolute
          top 50%
          transform translateY(-50%)
          -webkit-transform translateY(-50%)
          background-color #fff
          z-index 3
          border 1px solid #e95656
        .tag-after
          right -0.25rem
        .tag-before
          left -0.25rem
      &:after
        right 0.75rem
        top 50%
        content ''
        display block
        position absolute
        width 0.375rem
        height 0.375rem
        border-width 1px
        border-style solid
        border-color #9b9b9b #9b9b9b transparent transparent
        transform translateY(-50%) rotate(45deg)
        -moz-transform translateY(-50%) rotate(45deg)
        -ms-transform translateY(-50%) rotate(45deg)
        -webkit-transform translateY(-50%) rotate(45deg)
    .tag
      display inline-block
      height 0.9375rem
      width 1.5rem
      margin-right 0.3125rem
      margin-top 0.0625rem
      background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAeCAYAAABqpJ3BAAAABGdBTUEAALGPC/xhBQAABK5JREFUWAnVWEtoFEkY/qqn55XJOxgfiMaTMYmR6GUPCoqgXkTBmBhdRQRhT148eFLHx9WDoLA3Rcxu1BAQ8SAIccEXiWjYCCYXDS4SzZoMyWQmPel0t//fZibTPT1jJbJs8kNPVf2v/qvqf/WIsba2Rt0wfocQTcKyVCwBsACD7H1Dpv6m6qbZTpMGWBaIsFRAJXt/IWP/UOjU65eK1R521ikeyByUCAbBjwyIsjL4li93sPpraxHetcuBU5Ytg3/DBgduIQupDYT37kV4zx4p/cVHjqDs9GmQj2b42fjQzp2ZNU9Kjh9HpLnZgVvIQmoDyc5OJO/fl9KfuHMHvpUrEdq2LcPPN6C/eze33rgRgc2bEb95M4Nb6EQq64hIBHaQJ5N53yPCYYiiIps+9eQJfCtWQKmqglJZCR+NxvCwvWYGf00NUs+ewSJ9zMOjNTWVV3chghhpaTEp+8zdtwd3pKUF1swMkl1dHtTvKHaHyMGDeemFCIl795CgW14ISN2AjOLko0fQnj93sHLgl587h1RPT0EXNONxh9x8FlIbmCLjLKoThcAiIwyXIUX79kEEAkjcvQtzdLSQ+IJoQogJqQ2Y4+MFXxDavh2BhoYcnsCWLbASCRS3teXQ3Ijpt2+hUez8CMjX45YQf9LYr6rqX1Ib4JPkGJh6+NBbv6o66wS5TnDTJhgjI5gZGnLS/H4Em5qgv38P8+vXOX2kQwJ66Eb3V9++PZzmlZKyi5jPl5bJGbXHj8EPgygtRfmZMzC+fEHs/HmYsVgOPycFrgsT167B+PQph+6JEEJThWiuyjKe+aTqQKq3F9OvX3vqzUZy/q+4dAlKeTliFy96Gs/8HBPTfX2oiEbhX78+W0XeOblMb1VHxz9uBqkbmPnwwS3nWHOdiBw4gPDu3TDHxmCQaxQfOuTgyVnQjRrEW37hAlJPn2KyvT3vhmdlPQ9bqg4Et24FTBMpV5pkxSIUQtXVqwD5PZ9s6sULlJw4Yb9Tqa6GumYNpl+9mrVhdiB/D1Iljl2+bMuXnjxpZ7nRU6eAVMrJO7dKBRSltqKjY2gOBUjdgLpqlR3E2YLpuaVpiN+4AX1wMHOC41eu2GSuATpll/Q6LcPNHm+AZfX+fowODEBdvbqQ8Swa1C2ra+zYsf2Vt259TOuS2oDOLkRZKB+kXr7MIQUaGxGor7cD1U3kQGfg2pEes3slG+nxQ7WoSde0gX9bWztNIf5WFKVbagPTFMTzAnKnyOHD0CmFauTfbvBRK83glaHcvB7rsGlZR+3ezDTjnoHhFvLX1YE7ShngTFRJvu2jJm7i+nW7CXTL8e1wmrXy+7tbxHNNvUGJ1A1wleVCppOv5gNRUoLi1laEduyA8fkzYmfP2kYyv/0xQwWME4G6di3CxJN48CCfqnnhpTbArQRvoCAQXV23zk6H3DvBMDLsak0N/BQPDNbkpB30Wnd3hv4zE6k0+jMv+K9lpWKA0x7n9MUIUi7kp09ATqMaNWeLDaQ2kG7UFpvxbI9C/x7kTy2L0eIsm6jBG1SEz3eUvmze0GNm0Rb1lG0l4/uEovxK43ewolEOaKmgTsv8j6MpotElc+AFz+kbXC6m5gfj318AAAAASUVORK5CYII=')
      background-size cover
    .coupon-pop
      border-top 2px solid #000
      background-color #fff
      .title
        width 100%
        line-height 1.125rem
        font-size 0.875rem
        color #292929
        padding 0.75rem
      .list
        width 100%
        overflow hidden
        padding 0 0.75rem
        max-height 18.75rem
        overflow-y auto
        .item
          width 100%
          overflow hidden
          height 5.625rem
          display flex
          margin-bottom 0.75rem
          font-family PingFangSC-Regular
          background #fff
          position relative
          .cart
            width 6.5625rem
            overflow hidden
            height 100%
            background-color #ffa968
            text-align center
            color #fff
            .price
              margin-top 0.9375rem
              font-size 1.0625rem
              i
                font-size 1.875rem
            .rule
              font-size 0.75rem
        .info
          flex 1
          -webkit-flex 1
          height 100%
          padding-left 0.9375rem
          position relative
          .name
            width 100%
            font-size 0.75rem
            text-overflow ellipsis
            -webkit-line-clamp 2
            overflow hidden
            white-space normal
            line-height 1.125rem
            margin-top 0.625rem
            margin-bottom 1.25rem
            span
              background-color #ffa968
              border-radius 0.1875rem
              color #fff
              padding 0 0.1875rem
              margin-right 0.3125rem
              font-size 0.625rem
          .time
            font-size 0.75rem
            color #666
            display inline-block
          .btn
            position absolute
            right 0.625rem
            bottom 0.9375rem
            border 1px solid #e95656
            padding 0.125rem 0.625rem
            border-radius 0.625rem
            font-size 0.75rem
            color #e95656
            background #fff
.logistics-freight-server
  width 100%
  overflow hidden
  margin-bottom 0.625rem
  background #fff
  .logistics-wrap
    width 100%
    overflow hidden
    padding 0.75rem 0.75rem 0.5rem
    position relative
    &:nth-child(2)
      padding 0.45rem 0.75rem 0.5rem
    :after
      right 0.75rem
      top 50%
      content ''
      display block
      position absolute
      width 0.375rem
      height 0.375rem
      border-width 1px
      border-style solid
      border-color #9b9b9b #9b9b9b transparent transparent
      transform translateY(-50%) rotate(45deg)
      -moz-transform translateY(-50%) rotate(45deg)
      -ms-transform translateY(-50%) rotate(45deg)
      -webkit-transform translateY(-50%) rotate(45deg)
      margin-top -0.3125rem
    .logistics-info
      width 100%
      overflow hidden
      font-family STHeitiSC-Medium
      color #292929
      font-size 0
    span
      display inline-block
      font-size 0.8125rem
      line-height 1.125rem
    .tag
      width 2.5rem
      overflow hidden
      float left
    .value
      padding-bottom 0.3125rem
    i
      font-style normal
    .logistic-time
      width 100%
      overflow hidden
      font-size 0.75rem
      color #999
      margin-left 2.5rem
      padding-bottom 0.5rem
      border-bottom 1px solid hsla(0, 0%, 87%, 0.5)
  .server-wrap
    padding 0.5625rem 0.75rem
    text-overflow ellipsis
    -webkit-line-clamp 1
    overflow hidden
    white-space normal
    white-space nowrap
    background #f8f8f8
    overflow-x auto
    font-size 0
    span
      display inline-block
      overflow hidden
      font-size 0.6875rem
      margin-right 0.625rem
      padding-left 0.875rem
      position relative
      line-height 0.875rem
      &:after
        position absolute
        content ''
        width 0.625rem
        height 0.625rem
        background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAArRJREFUOBGdlM9PE0EUx2dmi/4Blir+SDwotYkxJNbEKyRy0xYxu9t64USinqEejOmBmBqMBxT9D2h3oxG9GDXC0QOYaGIg5WA8+CNsqQcuQMPO+H0L025LawKTTGbm/fjMm/dmhrM2TY2OdlXW11NKqSHOWJIpdVwxVmOcr2C9ApdSzHHetnFl0De3NdNMS8YmATgDZZlzPof5L8V5F5OyF+s+bJTA+BXy8aOO8z5MiOiFyudFZWnpgc9YDsbzBmPZqOMsaH14XLWsQcDGsOFNyJuAdTvPNAvoEv1eXXjQCR1z1TTVQWEV2056IyPHaH9BBaCc0TFjrjux36A8274jpVxgGxtT5BsJqokCUM72C0Mubyspn6L6m1yp5+QvULE0VbNTATptQjBcp2mCwSbV7brzZBsB7BKO+7GTYzt5K4yuzt9M5sK2lFcFdunBHfupHau2fapqWZf1unUE7BaOFxwTupS+h77vX8Fp7wsIEWSjbSv1BP0TJbsh3ZkRDAE8QwBbGNMaRlolxGGAagI5+I0dT2pnQ4gpygslOwzdjWwnZwRz3Xfah8aAAVYEYX4GoF8ro8XiXDWTuYZ8vCEoQEpwLjGfrkfWAiNfvJx+9EXBDWMW0HOVbPaihh4pFj9gngoqiEoC1jhmGxj5EoML8Vp0x+OzcPwufb+ggTTu5ieA/i8ysg18wQhYJMCzGw6enm3naB1uXjZ7tmJZvWFZeO5Z1l3yRWquh+UMgkdQ+ijEHmiTYWhBtvShkK8W17+vWCIx7i0vc/x5BYAHmGHkYjMzX7RheETUfcz3HyK3g0jXY/LV+qY7SELsegMJnsQ9Ow3jb7gOwQdLOhifQD4HoDsP3Q+8sLFYqfSCdLrtAZICn+2htXJ5GBEMAZ6Ec0/goNQfQBZRzVfRePwlz+drGqTHf3gSaE5WFr0wAAAAAElFTkSuQmCC')
        background-size cover
        left 0
        top 50%
        margin-top -0.0625rem
        transform translateY(-50%)
        -webkit-transform translateY(-50%)
.logistics-pop
  .item
    padding 1.25rem
    overflow hidden
    text-align center
    .name
      display inline-block
      font-size 0.875rem
      color #292929
      position relative
      &:before
        right -4.375rem
        position absolute
        content ''
        width 3.75rem
        height 1px
        background-color #e95656
        top 50%
      &:after
        left -4.375rem
        position absolute
        content ''
        width 3.75rem
        height 1px
        background-color #e95656
        top 50%
    .desc
      padding-top 0.625rem
      font-size 0.75rem
      color #666
      width 100%
      display inline-block
      text-align left
  .pic
    width 100%
    overflow hidden
    margin-bottom 1.25rem
    img
      display inline-block
      width 100%
.sku-wrap
  .sku-btn
    width 100%
    overflow hidden
    height 2.5rem
    background #fff
    position relative
    font-family STHeitiSC-Medium
    &:after
      right 0.75rem
      top 50%
      content ''
      display block
      position absolute
      width 0.375rem
      height 0.375rem
      border-width 1px
      border-style solid
      border-color #9b9b9b #9b9b9b transparent transparent
      transform translateY(-50%) rotate(45deg)
      -moz-transform translateY(-50%) rotate(45deg)
      -ms-transform translateY(-50%) rotate(45deg)
      -webkit-transform translateY(-50%) rotate(45deg)
    .tag
      padding 0 0.625rem 0 0.75rem
    span
      display inline-block
      overflow hidden
      color #292929
      line-height 2.5rem
      font-size 0.8125rem
.sku-pop
  .sku-content
    margin-top 1.5625rem
    width 100%
    padding 0.75rem 0.9375rem 0
    position relative
    background #fff
    &:before
      content ''
      display table
    .sku-info
      width 100%
      position relative
      min-height 6.25rem
      padding-bottom 0.625rem
      .pic
        width: 7.5rem;
        height: 7.5rem;
        border: 1px solid #d8d8d8;
        position: absolute;
        background: #d8d8d8;
        top: -2.1875rem;
        left: 0;
        border-radius: .125rem;
        background-size: cover;
      .desc
        width: 100%;
        padding-left: 8.125rem;
        overflow: hidden;
        span
          display: inline-block;
          width: 100%;
          overflow: hidden;
          font-size: 0;
        .price
          font-size: 1.125rem;
          color: #c33;
          line-height: 1.625rem;
          height: 1.625rem;
          font-family: STHeitiSC-Medium;
        .stock
          width: 100%;
          overflow: hidden;
          font-size: .75rem;
          line-height: 1rem;
          color: #646464;
          height: 1.4375rem;
        .choosed
          font-size: .75rem;
          color: #646464;
          line-height: 1.0625rem;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          overflow: hidden;
          white-space: normal;
    .spec-wrap
      max-height: 14.6875rem;
      overflow: scroll;
      .spec
        padding: .9375rem 0;
        border-top: 1px solid #dedede;
        .title
          font-size: 12px;
          color: #646464;
        .options
          font-size: 0;
          .sku
            display: inline-block;
            background-color: #fff;
            padding: 0 .8125rem;
            line-height: 1.6875rem;
            color: #646464;
            font-size: 12px;
            text-align: center;
            border: 1px solid #646464;
            border-radius: .1875rem;
            margin: .625rem .625rem 0 0;
    .purchase-amount
      display flex
      justify-content space-between
      align-items center
      padding: .8125rem 0;
      margin-bottom: .625rem;
      border-top: 1px solid #dedede;
      border-bottom: 1px solid #dedede;
      .modal-text
        float: left;
        display: table;
        height: 1.875rem;
      .van-coupon__amount
        float: right;
        font-size: 0;
        color: #646464;
      input   
        border: 0;
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        resize: none;
        outline: 0;
        box-shadow: none;
        -webkit-appearance: none;
      .btn-plus,.btn-minus
        padding: 0;
        margin: 0;
        display: inline-block;
        width: 1.875rem;
        height: 1.875rem;
        line-height: 1.875rem;
        font-size: 16px;
        text-align: center;
        color: #646464;
        background-color: #e8e8e8;
      .num
        display: inline-block;
        width: 2.8125rem;
        height: 1.875rem;
        line-height: 1.875rem;
        font-size: 12px;
        text-align: center;
  .spec-confirm
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 0;
    span 
      display: inline-block;
      font-size: 1rem;
      line-height: 2.8125rem;
      &:first-child 
        background-color: #f28f25;
      &:nth-child(2)
        background-color: #c33;
    .half
      width: 50%;
    
    

</style>