<template>
  <div class="home-wrap">
    
    <myHeader :path="path"></myHeader>
    <div class="main">
      <div class="bscroll">
        <div class="bscroll-content">
          <div class="banner">
            <van-swipe :autoplay="3000" indicator-color="white">
              <van-swipe-item>
                <img
                  src="http://pic1.ymatou.com/G02/M06/DE/4C/CgzUDF3OS9uAQFB1AAHLBy1_jzE039_375_128_o.png"
                  alt="banner"
                />
              </van-swipe-item>
              <van-swipe-item>
                <img
                  src="http://pic1.ymatou.com/G01/M01/57/C4/CgzUB13MB-OAbx2FAAJH18ZGof4731_375_128_o.png"
                  alt="banner"
                />
              </van-swipe-item>
              <van-swipe-item>
                <img
                  src="http://pic1.ymatou.com/G01/M02/5E/79/CgzUB13NYmGAaBkgAAQHFIEswMw461_375_128_o.png"
                  alt="banner"
                />
              </van-swipe-item>
              <van-swipe-item>
                <img
                  src="http://pic1.ymatou.com/G01/M00/5D/18/CgzUCV3NOHGAd25eAAPqbqJGD2I375_375_128_o.png"
                  alt="banner"
                />
              </van-swipe-item>
            </van-swipe>
          </div>
          <div class="xsq" id="xsqList">
            <div class="bt-title">
              <span class="tag-xsq">限时抢</span>
            </div>
              <xsqList></xsqList>
          </div>

          <div class="xbjx">
            <div class="bt-title">
              <span class="tag-xbjx">小编精选</span>
            </div>
            <div class="content goto-xbjx" onclick>
              <img
                src="http://pic1.ymatou.com/G02/M07/86/1B/CgvUBVvrzheAQTFDAAH0yCAeoYw144_15_8_w_o.jpg"
                width="100%"
                alt="CHANEL"
              />
              <div class="desc">
                <div class="text">
                  <h2>CHANEL</h2>
                  <a
                    href="//m.ymatou.com/topic/forBuyerApp/topic/newProductList"
                    class="btn-more"
                    module_index
                    module_name="xiaobianjingxuan"
                    onclick
                  >查看更多</a>
                </div>
              </div>
            </div>
          </div>

          <div class="interested">
            <div class="bt-title">
              <span class="tag-like">猜你喜欢</span>
            </div>
            <productList></productList>
            <!-- loading end -->
          </div>
          <div class="footer">
            <div class="text">
              <a class="download-suohuoapp" onclick>客户端</a> |
              <a href="//m.ymatou.com/home/ymt-about" onclick>关于洋码头</a> |
              <a href="//m.ymatou.com/home/ymt-media" onclick>媒体报道</a>
            </div>
            <div class="desc">上海洋码头网络技术有限公司 版权所有</div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script >
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
import { get } from "../utils/http";

import xsqList from "../components/xsqList";
import productList from "../components/productList";
import myHeader from "../components/header";


Vue.use(Swipe).use(SwipeItem);

export default Vue.extend({
  data() {
    return {
      path:'home'
    };
  },

  mounted() {
    var docEl = document.documentElement;
    var html = document.querySelector('html');
    var rem = docEl.clientWidth / 10;
    html.style.fontSize = rem + 'px';
  },
  components: {
    myHeader,
    xsqList,
    productList
  }
});
</script>

<style lang="stylus">

.home-wrap
  display flex
  flex-direction column
  height 100%
.bscroll
  height 100%
.main
  flex 1
  height 100%

.banner
  width 100%
  img
    width 100%
.bt-title
  width 6.4rem
  margin 0.6666666667rem auto
  position relative
  height 1px
  background #ccc
  box-shadow 0 1px 0 #fff
  span
    font-size 16px
    color #646464
    display inline-block
    padding 0 0.2666666667rem 0 1.0666666667rem
    position absolute
    height 0.5333333333rem
    left 50%
    top 50%
    -webkit-transform translate(-50%, -50%)
    transform translate(-50%, -50%)
    background #f5f5f5
    line-height 0.5333333333rem
    text-shadow 0 1px 0 #fff
    white-space nowrap
    &:after
      width 0.5066666667rem
      height 0.4266666667rem
      top 0.0533333333rem
      left 0.4rem
      position absolute
      content ''
      background-repeat no-repeat
      background-position center center
      background-size 100% 100%
.xsq
  width 100%
  overflow hidden
  background #f5f5f5
  .bt-title
    span
      &:after
        background-image url('https://s1.ymatou.com/homem/images/tag_xsq-d72323a492.png') 
  .xsq-list
    width 100%
    white-space nowrap
    overflow-x scroll
    background #fff
    padding 0.4266666667rem 0.2133333333rem
   
  .item
    position relative
    display inline-block
    width 7rem
    height 3.444rem
    margin 0 0.2133333333rem 0 0
    .pic
      width 100%
      height 100%
      background-size contain
      border-radius 0.1333333333rem
    .xsq-countdown
      position absolute
      left -0.1066666667rem
      bottom 0.1066666667rem
      width 2.5066666667rem
      height 0.4266666667rem
      background-image url('https://s1.ymatou.com/homem/images/countdown-bg-fb044aac5f.png') /
      color #fff
      font-size 9px
      text-indent 0.1866666667rem
      line-height 0.3733333333rem
      background-size contain
      background-position center center
      background-repeat no-repeat
.xbjx
  width 100%
  overflow hidden
  background #f5f5f5
  span:after 
    background-image: url('https://s1.ymatou.com/homem/images/tag_select-cb4a47d788.png');
  .content
    border 0.2133333333rem solid #fff
    background #fff
    position relative
    overflow hidden
    font-size 0
    .desc
      position absolute
      left 0
      top 0
      width 100%
      height 100%
      background rgba(0, 0, 0, 0.6)
      .text
        width 80%
        position absolute
        top 50%
        left 10%
        overflow hidden
        -webkit-transform translate(0, -50%)
        transform translate(0, -50%)
        text-align center
        color #fff
        a
          display inline-block
          padding 0.1333333333rem 0.5333333333rem 0.1333333333rem 0.4rem
          border-radius 0.2666666667rem
          border 1px solid #fff
          color #fff
          margin 1px
          position relative
          font-size 13px
.btn-like-more
  font-size 14px
  border 1px solid #dedede
  background #fff
  margin 0.2666666667rem 0
  line-height 0.8rem
  color #9b9b9b
  
  width 100%
  text-align center

.btn-like-more-over
  margin 0.2666666667rem 0
  line-height 0.8rem
  color #9b9b9b
  display none
  width 100%
  text-align center
.footer
  width 100%
  overflow hidden
  padding-bottom 1.7333333333rem
  background #f5f5f5
  .text
    color #646464
    text-align center
  .desc
    text-align center
    color #9b9b9b
    font-size 12px
.interested
  padding 0 0.2266666667rem 0.2666666667rem
  background #f5f5f5
  overflow hidden
  span:after
    background-image: url('https://s1.ymatou.com/homem/images/tag_heart-dc2c84d296.png');
</style>