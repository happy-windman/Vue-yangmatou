<template>
  <div class="detail_main">
    <myHeader :path="path"></myHeader>
    <div class="bscroll">
      
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

        <div class="buyer-rate">
          <div class="m-title">
            <span>
              <i class="cro-fl"></i>评价
              <i class="cro-fr"></i>
            </span>
          </div>
          <div class="b-title">
            <span class="name">买家评价</span>
            <span class="rate">
              <i class="full"></i>
              <i class="full"></i>
              <i class="full"></i>
              <i class="full"></i>
              <i class="full"></i>
            </span>
            <span class="num">4.7</span>
            <span
              module_index
              module_name="pingjia"
              sproductid="04f8bcd8-a103-40e0-8fa7-1e11bb19308f"
              sellerid="20927755"
              class="more"
            >查看全部455条</span>
          </div>
          <div class="tag-content">
            <div class="tag-name">购买过该商品的用户认为</div>
            <!---->
          </div>
          <div class="note-list">
            <div class="note-item">
              <div class="content">
                <div class="info">
                  <div class="buyer">
                    <div class="avg">
                      <img src="http://staticontent.ymatou.com/app/userlogo/mj.jpg" />
                    </div>
                    <div class="name">我**哒</div>
                    <div class="grade lever2">123</div>
                  </div>
                  <div
                    class="desc"
                  >用了几天才来评价，很不错，用了之后头发很光滑，质感值得购买，很好用，能能舒缓头发干枯毛躁。之后头发很滋润，有一股淡淡的香味挺好闻的。</div>
                </div>
                <div class="pic lazyload transition">
                  <!---->
                </div>
              </div>
            </div>
            <div class="note-item">
              <div class="content">
                <div class="info">
                  <div class="buyer">
                    <div class="avg">
                      <img src="http://staticontent.ymatou.com/app/userlogo/mj.jpg" />
                    </div>
                    <div class="name">我**哒</div>
                    <div class="grade lever2">123</div>
                  </div>
                  <div
                    class="desc"
                  >用了几天才来评价，很不错，用了之后头发很光滑，质感值得购买，很好用，能能舒缓头发干枯毛躁。之后头发很滋润，有一股淡淡的香味挺好闻的。</div>
                </div>
                <div class="pic lazyload transition">
                  <!---->
                </div>
              </div>
            </div>

            <div class="note-more">
              <span>
                查看全部
                <br />MORE
              </span>
            </div>
          </div>
        </div>

        <div class="seller-wrap">
          <div class="seller-info">
            <div
              class="pic lazyload transition"
              style="opacity: 1; background-image: url(&quot;http://pic1.ymatou.com/G02/M02/B5/A6/CgvUA1cJy6-AQ2x0AACCgx58y1A969_m.jpg&quot;);"
            ></div>
            <div class="info">
              <div class="name">重返18岁</div>
              <div class="type-coutry">
                <span class="selle-type">
                  <!---->
                  <i>专业买手</i>
                  <!---->
                  <!---->
                  <i class="num hign">4.8</i>
                </span>
                <span class="contry">
                  <img src="http://img.ymatou.com/app/flag/circle/Thailand.png" />泰国
                </span>
              </div>
            </div>
            <!---->
            <div
              module_index
              module_name="follow_seller"
              sproductid="d6ca584c-c788-4999-85e3-46d5ef3f431d"
              sellerid="13985654"
              class="btn-follow"
            >
              <i class="tag follow"></i>未关注
            </div>
          </div>
          <div class="seller-point">
            <div class="item">
              <span class="name">最近销量</span>
              <span class="val">7261</span>
            </div>
            <div class="item">
              <span class="name">粉丝</span>
              <span class="val">48801</span>
            </div>
            <div class="item">
              <span class="name">综合评分</span>
              <span class="torst hign">4.8</span>
              <span class="torst-pop hign">高于平均7.33%</span>
            </div>
            <div class="item">
              <span class="keyval">
                <i class="key">买家评分</i>
                <i class="val hign">4.8</i>
              </span>
              <span class="keyval">
                <i class="key">物流服务</i>
                <i class="val hign">4.9</i>
              </span>
              <span class="keyval">
                <i class="key">客户服务</i>
                <i class="val hign">4.8</i>
              </span>
            </div>
          </div>
          <div class="seller-btn">
            <a
              module_index
              module_name="store"
              sproductid="d6ca584c-c788-4999-85e3-46d5ef3f431d"
              sellerid="13985654"
              href="//m.ymatou.com/sellerhome/forBuyerApp/sellerHome?SellerId=13985654"
            >进店看看</a>
          </div>
        </div>

        <div class="zhengpin">
          <img src="//s1.ymatou.com/itemm/static/img/zhengpin.855bfb9.png" />
        </div>

        <div class="image-text-wrap">
          <div class="m-title">
            <span>
              <i class="cro-fl"></i>详情
              <i class="cro-fr"></i>
            </span>
          </div>
          <div class="title">
            <span class="chinese">图文详情</span>
          </div>
          <div class="list">
            <div class="item">
              <div class="name">
                <h2>
                  <span>买家须知</span>
                </h2>
                <!---->
              </div>
              <div
                class="text"
              >各位哈尼，国内部分（偏远）地区是需要补邮费的，以下为补邮费地区（青海,甘肃,宁夏,海南,内蒙古,这5个地区1KG以内 需要补8元邮费）---（新疆1KG以内补15元邮费）（西藏水乳不能发，发其他需要补20邮费）补邮费联系客服，感谢您的理解！！</div>
              <!---->
              <div class="pics">
                <img
                  src="http://pic1.ymatou.com/G02/shangou/M0B/EF/96/CgzUDFy0lbmASZrnAAMchisqZZ0279_375_404_n_w_o.jpg"
                  style="height: 371.68px; opacity: 1;"
                  class="lazyload transition"
                />
                <img
                  src="http://pic1.ymatou.com/G02/shangou/M01/06/FC/CgzUC1y0lnCAGEidAAT_gGqD2L4366_375_404_n_w_o.jpg"
                  style="height: 371.68px; opacity: 1;"
                  class="lazyload transition"
                />
                <img
                  src="http://pic1.ymatou.com/G02/shangou/M0A/EF/96/CgzUDFy0lcCAcZ3tAAdX7UGXtck827_375_404_n_w_o.jpg"
                  style="height: 371.68px; opacity: 1;"
                  class="lazyload transition"
                />
              </div>
            </div>
            <div class="item">
              <div class="name">
                <h2>
                  <span>商品参数</span>
                </h2>
                <!---->
              </div>
              <!---->
              <div class="keylist">
                <div class="keyitem">
                  <span class="key">适用发质</span>
                  <span class="value">所有发质</span>
                </div>
                <div class="keyitem">
                  <span class="key">适用对象</span>
                  <span class="value">通用</span>
                </div>
                <div class="keyitem">
                  <span class="key">品牌归属地</span>
                  <span class="value">是</span>
                </div>
                <div class="keyitem">
                  <span class="key">是否为特殊用途化妆品</span>
                  <span class="value">否</span>
                </div>
                <div class="keyitem">
                  <span class="key">成分</span>
                  <span class="value">其他</span>
                </div>
                <div class="keyitem">
                  <span class="key">原产地</span>
                  <span class="value">韩国</span>
                </div>
                <div class="keyitem">
                  <span class="key">护发功效</span>
                  <span class="value">改善毛躁,滋润,柔软顺滑,头皮舒缓,滋润营养</span>
                </div>
                <div class="keyitem">
                  <span class="key">规格类型</span>
                  <span class="value">正常规格</span>
                </div>
                <div class="keyitem">
                  <span class="key">保质期</span>
                  <span class="value">三年</span>
                </div>
                <div class="keyitem">
                  <span class="key">容量</span>
                  <span class="value">70ml</span>
                </div>
              </div>
              <!---->
            </div>
            <div class="item">
              <div class="name">
                <h2>
                  <span>商品介绍</span>
                </h2>
                <!---->
              </div>
              <div class="text">
                拒绝开叉 ，拒绝打结 ，拒绝暗淡无光 ，拒绝不美丽 ，
                我要柔顺，我要闪亮，我要飘逸，我要头发时刻美丽！
                爱茉莉美妆仙发油，于头发半干时挤三滴（黄豆大小即可）于手心，双手对搓后在头发上继续对搓。然后待头发自然干透。坚持几次，你会发现发质真的改善了
              </div>
              <!---->
              <div class="pics">
                <img
                  src="http://pic1.ymatou.com/G02/shangou/M06/E6/8B/CgvUBFvPXA-ATxA3AAkCOpSDe9c142_75_101_n_w_o.jpg"
                  style="height: 464.6px; opacity: 1;"
                  class="lazyload transition"
                />
              </div>
            </div>
            <div class="item">
              <div class="name">
                <h2>
                  <span>买手介绍</span>
                </h2>
                <!---->
              </div>
              <div class="text">请哈尼们熟知</div>
              <!---->
              <div class="pics">
                <img
                  src="http://pic1.ymatou.com/G02/shangou/M0B/EF/97/CgzUDFy0ld2ANQwuAAbgTna4lEc856_250_599_n_w_o.jpg"
                  style="height: 826.62px;"
                />
                <img
                  src="http://pic1.ymatou.com/G02/M03/94/FC/CgzUCl0m52aAUwauAAKbJd06F4I341.png"
                  style="height: auto;"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="likeproduct">
          <productList></productList>
        </div>
      </div>
    </div>
    <div class="detailsFooter">
      <div class="left">
        <!---->
        <span class="collection">
          <i class="icon icon-collect"></i>
          <i class="text">收藏</i>
        </span>
      </div>
      <div class="right">
        <span class="addCart">加入购物车</span>
        <span class="buy">立即购买</span>
      </div>
    </div>
     <van-action-sheet
              v-model="show"
              :cancel-text="downType=='specs'?'':'取消'"
              @cancel="onCancel"
            >
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
                        <span class="sku active">黄色-2瓶</span>
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
                      </span>
                    </div>
                    <div class="amount">
                      <input type="button" value="-" onclick class="btn-minus" />
                      <span class="num">1</span>
                      <input type="button" value="+" onclick class="btn-plus" />
                    </div>
                  </div>
                </div>
                <div class="preorder-pop-layer preorder-pop-layer-active"></div>
                <div class="spec-confirm">
                  <span class="half">加入购物车</span>
                  <span class="half">立即购买</span>
                </div>
              </div>
            </van-action-sheet>
  
  </div>
</template>

<script>
import Vue from "vue";
import myHeader from "components/header";
import productList from "components/productList";
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
      console.log(1);
    },
    aaaa(){
      this.show=true
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
    myHeader,
    productList
  }
});
</script>

<style  lang="stylus" >
.detail_main
  display flex
  height 100%
  flex-direction column
  .bscroll
    overflow hidden
    flex 1
  .details-wrap
    .product-list
      .likeproduct
        width 100%
        overflow hidden
        padding 0 0.425rem
      .product-wrapper
        margin-bottom 0.5rem
        width 50%
      .product-wrapper:nth-child(odd)
        padding-right 0.3125rem
      .product-wrapper:nth-child(2n)
        padding-left 0.3125rem
      .product
        height 17.5rem
        .picture
          height 10.8125rem
          position relative
        .info
          padding 0 0.375rem
          position relative
          .country
            font-size 10px
            color #646464
            text-align right
            display inline-block
            position absolute
            right 0.9375rem
            bottom 0
            .flag
              width 0.625rem
              height 0.625rem
              border-radius 50%
              margin-right 0.25rem
              vertical-align middle
          .price
            font-size 32px
            line-height 1
            font-size 16px
            color #c33
          .name
            height 2.125rem
            font-size 12px
            color #383838
            line-height 1.0625rem
            text-overflow ellipsis
            -webkit-line-clamp 2
            overflow hidden
            white-space normal
            margin 0.625rem 0 0
          .info-tag
            width 100%
            overflow hidden
            margin 0.4375rem 0 0.625rem
            font-size 0
            span
              display inline-block
              margin-right 0.25rem
              font-size 9px
              border 1px solid #c33
              color #c33
              padding 0.0625rem 0.1875rem
              margin 1px
              line-height 0.75rem
              border-radius 0.1875rem
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
          width 7.5rem
          height 7.5rem
          border 1px solid #d8d8d8
          position absolute
          background #d8d8d8
          top -2.1875rem
          left 0
          border-radius 0.125rem
          background-size cover
        .desc
          width 100%
          padding-left 8.125rem
          overflow hidden
          span
            display inline-block
            width 100%
            overflow hidden
            font-size 0
          .price
            font-size 1.125rem
            color #c33
            line-height 1.625rem
            height 1.625rem
            font-family STHeitiSC-Medium
          .stock
            width 100%
            overflow hidden
            font-size 0.75rem
            line-height 1rem
            color #646464
            height 1.4375rem
          .choosed
            font-size 0.75rem
            color #646464
            line-height 1.0625rem
            text-overflow ellipsis
            -webkit-line-clamp 2
            overflow hidden
            white-space normal
      .spec-wrap
        max-height 14.6875rem
        overflow scroll
        .spec
          padding 0.9375rem 0
          border-top 1px solid #dedede
          .title
            font-size 12px
            color #646464
          .options
            font-size 0
            .active
              background-color #c33
              color #fff
              border none
              position relative
              border 1px solid #c33
              &:after
                content ''
                display block
                width 0.4375rem
                height 0.1875rem
                border-width 2px
                border-style solid
                border-color transparent transparent #fff #fff
                transform rotate(-45deg)
                position absolute
                right 0.0625rem
                bottom 0.25rem
          .sku
            display inline-block
            background-color #fff
            padding 0 0.8125rem
            line-height 1.6875rem
            color #646464
            font-size 12px
            text-align center
            border 1px solid #646464
            border-radius 0.1875rem
            margin 0.625rem 0.625rem 0 0
      .purchase-amount
        display flex
        justify-content space-between
        align-items center
        padding 0.8125rem 0
        margin-bottom 0.625rem
        border-top 1px solid #dedede
        border-bottom 1px solid #dedede
        .modal-text
          float left
          display table
          height 1.875rem
        .van-coupon__amount
          float right
          font-size 0
          color #646464
        input
          border 0
          font-family inherit
          font-size inherit
          font-weight inherit
          resize none
          outline 0
          box-shadow none
          -webkit-appearance none
        .btn-plus, .btn-minus
          padding 0
          margin 0
          display inline-block
          width 1.875rem
          height 1.875rem
          line-height 1.875rem
          font-size 16px
          text-align center
          color #646464
          background-color #e8e8e8
        .num
          display inline-block
          width 2.8125rem
          height 1.875rem
          line-height 1.875rem
          font-size 12px
          text-align center
    .spec-confirm
      width 100%
      text-align center
      color #fff
      font-size 0
      span
        display inline-block
        font-size 1rem
        line-height 2.8125rem
        &:first-child
          background-color #f28f25
        &:nth-child(2)
          background-color #c33
      .half
        width 50%
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
  .buyer-rate
    width 100%
    // overflow: hidden;
    margin-top 0.625rem
    .b-title
      width 100%
      background-color #fff
      padding 0.625rem 0.75rem 0.5rem
      position relative
      overflow hidden
      font-size 0
      .name
        display inline-block
        font-size 0.8125rem
        padding-right 0.3125rem
        font-family STHeitiSC-Medium
        float left
        line-height 1.375rem
      .rate
        display inline-block
        float left
        margin 0 0.125rem
        margin-top 0.25rem
        i
          display inline-block
          width 0.75rem
          height 0.75rem
          margin-right 0.1875rem
        .full
          background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAAm9JREFUSA2tVk1oE0EUnpltDA1WW9qsJ39QtNL2Jh4Ee+lB9NKKQksPCQWlF0EQf04e9ezNixRy0HYTWhSrCHrw7EW8BFQKRg8ioVYxkjCxu+P3MLtMdhZ2UlwI8+bN975v3r43s2Gsh6c+N3cHv3s9hDBuC94qFg9sS7nBlOIZIY4OeV7NJlbYgAgD8ptKqYxirG9bqVu2cVYZNAoFtyllDaT9HWLJc7lDbqn0LU3IKoNWu31NIyfOLG82r6eR03pqBj8WFgb/tFqf8Xr26IQI/J0dGDi4d2lpS/fH7dQMQH4jTk4kqMVu2Wik1sLIQFUqzuba2hHO+bgfBGcwLkIgcSNYCyD0AHovRSZTHZme3uCzs76eBa/Pz59mvj+pOJ+A2jjIjgOQ1UE92BKi7yFaxVjtc5x1joPzBaT7eyCxhkLkq3CEuIQIaR1lDyTOy2J4ZeUVd5zz/1mkLYS46JbLL6IioxZnle8/gdBO33+YG5FfyHvec3JEAjRBPc6hHo9h7lSki5w4uwTIQSK40NbRCQ7NbR9qWZDN5MvlZ3qM0d/03hjnj3SQla3Uapyc4gyBDtlHK1INRH2vTSMzWUCpwxHC0kDtEmOSBTgfteSNYLgJEmMSBVDgRHDElmDwf1eMsWII/CoWh9FFI3EkdQl8DzHexViPr2NTg/RhivsNAXxcjN2D9DVznBP7KpUCuuz2rlxuFL77HdGIsyUlXZRdjyGAXj4WImB/wKmcAemUu7z8LvQPlUo/4buC9ZNo6Tehn+HPQGR3DFMgCL4jqIbdXc2PjU3gyD+NB4Vz9P1b1/NOYROL8H0SSm2Ga+H4FwgBzaCgOy8CAAAAAElFTkSuQmCC')
          background-size contain
          background-position 50%
          background-repeat no-repeat
      .num
        display inline-block
        font-size 0.75rem
        margin-right 0.125rem
        line-height 1.375rem
        font-family STHeitiSC-Medium
        color #e95656
        float left
      .more
        display inline-block
        font-size 0.75rem
        color #999
        float right
        padding-right 0.625rem
        position relative
        line-height 1.375rem
        &:after
          right 0
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
    .tag-content
      padding 0.625rem 0.75rem 0
      background #fff
      .tag-name
        width 100%
        overflow hidden
        font-size 0.75rem
        color #999
    .note-list
      width 100%
      padding 0.9375rem 0 0.9375rem 0.75rem
      height 9.125rem
      white-space nowrap
      overflow hidden
      overflow-x scroll
      background #fff
      font-size 0
      vertical-align middle
      .note-item
        overflow hidden
        width 17.25rem
        height 7.25rem
        display inline-block
        box-shadow 0 1px 8px 0 rgba(0, 0, 0, 0.1)
        margin-right 0.625rem
        .content
          display flex
          display -webkit-flex
          overflow hidden
          font-size 0
          .info
            flex 1
            -webkit-flex 1
            padding 0.625rem
            overflow hidden
            .buyer
              width 100%
              overflow hidden
              display flex
              display -webkit-flex
              align-items center
              -webkit-align-items center
              .avg
                width 1.5625rem
                height 1.5625rem
                overflow hidden
                border-radius 100%
                margin-right 0.3125rem
                img
                  width 100%
                  height 100%
                  display inline-block
              .name
                margin-right 0.3125rem
                flex 1
                -webkit-flex 1
                line-height 1.5625rem
                text-overflow ellipsis
                -webkit-line-clamp 1
                overflow hidden
                white-space normal
                font-size 0.6875rem
                color #666
              .grade
                width 1.125rem
                height 0.75rem
                overflow hidden
                z-index -999px
              .lever2
                background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAYCAYAAACSuF9OAAAABGdBTUEAALGPC/xhBQAABABJREFUSA3tVk1sVFUUPue+mWFK3pQUjcLKGGjLQP0nYiDEAgZBa1woiVEWpCuJtDMm1YU/hA2JiShlggsjgQ0kAglxiQtjMCEQDMRqy8y0ogEtRkMjYWbakrbv+N3X3tvb15npho0JTdpz7nd+3nfPOffeEt3/qV8Brm++N1Y5tcMrDfe9zyQvCvPjJKKI6Zwi9bGfLf7sfmUeoXJv83si1GOdmPanskM5u3YU+b49VuobLrBQagbOp94dandcSA6veqA8EXwtJC8Q84+wjZDQBiJJMfGtWIyfbegq/m5ilFGs9LyzQvSQ+SXh160topT7htcj+Qrry3wu4kKlyaA3JKP481Tmzecas4PbmeUj7Qf8wakgeM2NmUfI7yr8wswF68SyXo6sWWrXjoLKvOwsidg77a4rudVPoU1vaSzVlNzLvC8I7cz/GD90Y4XRtZxHKDQKnTROCPAqlaltZu1KVMYSwibyqUy+37UHwdQuxMNEf1Jpyo4HsLXGD7ZrRteyOiEvfsp1Egk63LXWxw6nHwGhNQ4+pzrTuDwNOp/58USa3xkoa0wEY030kokLlLpgdC2rEkp1D1xFlN0tPrxND7AbODkR2KQhHmmXxuLsdWJmegwZjVUOpbeCVFrr6PFvjV3F89P69N+qhEITq9kqiTSFA+xEYiDrtku7JjP5ISeE5Mtn4kLBJwZTHu81upE1CcU9tnOknXF1vGKC5Fh7EsO62awhq7TLsc6o5fHSB6jOk3qJwfrG7y6eiHrVJJTcUxhE0E8mAEfVztHo7Zub0MYGY4ueLos7SjnX8gTO+YchxDzClHjbMVu1JiHtgdNg24adrRrPtYVHFGd3wXbZL+g8uXWNEshx5IhjNu8q5p1+tv9v18fodQklvIQlpAMmZSKskvDsKQFct116bsrBv2ewuTaQGWfyXvUzxbOGQFTWJZTs7r+Gtl02QdhlR+lgcxqle9Rg9dqFinBprHQUcgvIjCJXh58tfGtjqyh1CWl/DO/scDM9j2l8w+TBB+ZdhsamyWBuvgD5nXizhj3Fm/zM4HfGXksuSMiT2edAzwB+3aNatV0i+1TlUOtXEtBukDnPifjaxd2Dl2qRcHF7nbtgVL/T23IRO10XxVnFHos+F9rnzsHWT4mCHiQfw7yhKtwMfQnursUaw2m7hfv6Bt7CSzEVP9qQGbhhci9YIe2onNNmAtGuQjUyGOIlmoz2C68GoQ5sphWVXQagEcP98MyTs5FY/sKc/mFyajnnOXANrq4SidMycfcAkrkVnXMCjf/oeGUlvG6z8BVgv7KiEbTOB73lwFfj35kW4D/EYl5nw578dcq6KU2Weyijb140teS2L9IDH8Xvr/+3FfgP4zl5Ker3ytUAAAAASUVORK5CYII=')
                background-size cover
            .desc
              margin-top 0.625rem
              width 100%
              line-height 1.125rem
              font-size 0.75rem
              text-overflow ellipsis
              -webkit-line-clamp 3
              overflow hidden
              white-space normal
              color #292929
      .pic
        width 7.25rem
        height 7.25rem
        overflow hidden
        background-image url('//s1.ymatou.com/itemm/static/img/placeholder.bb77734.png') // s1.ymatou.com/itemm/static/img/placeholder.bb77734.png);
        background-size cover
        position relative
    .note-more
      margin 0
      overflow hidden
      width 7.25rem
      height 7.25rem
      display inline-block
      box-shadow 0 1px 8px 0 rgba(0, 0, 0, 0.1)
      margin-right 0.625rem
      font-size 0.75rem
      text-align center
      vertical-align top
      span
        color #666
        display inline-block
        padding-top 2.1875rem
        line-height 1.25rem
        font-size 0.75rem
  .seller-wrap
    margin-top 0.625rem
    width 100%
    padding 0.9375rem 0.75rem
    overflow-x hidden
    background #fff
    .seller-info
      width 100%
      overflow-x hidden
      display flex
      display -webkit-flex
      align-items flex-start
      -webkit-align-items flex-start
      .pic
        margin-right 0.3125rem
        width 1.875rem
        height 1.875rem
        overflow-x hidden
        border-radius 100%
        background-size cover
      .info
        flex 1
        -webkit-flex 1
        padding-right 0.75rem
        overflow hidden
        font-size 0
        .name
          width 100%
          text-overflow ellipsis
          -webkit-line-clamp 1
          overflow hidden
          white-space normal
          font-family STHeitiSC-Medium
          font-size 0.875rem
          color #292929
        .type-coutry
          width 100%
          overflow hidden
          color #999
          font-size 0.625rem
          span
            display inline-block
            margin-right 0.3125rem
            line-height 0.875rem
            font-size 0
            i
              font-size 0.625rem
              font-style normal
            .hign
              color #e95656
          .contry
            font-size 0.625rem
            img
              width 0.8125rem
              height 0.8125rem
              overflow hidden
              display inline-block
              float left
              border-radius 100%
              margin 0 0.3125rem 0 0
      .btn-follow
        width 4.375rem
        overflow hidden
        display inline-block
        border 1px solid #c33
        color #c33
        border-radius 0.25rem
        text-align center
        line-height 1.625rem
        font-size 0.75rem
        .follow
          display inline-block
          width 0.625rem
          height 0.625rem
          position relative
          vertical-align text-bottom
          margin-right 0.3125rem
          top 0.125rem
          &:before
            content ''
            height 2px
            width 0.625rem
            display block
            background-color #c33
            border-radius 2px
            position absolute
            top 0
            left 0
          &:after
            content ''
            height 2px
            width 0.625rem
            display block
            background-color #c33
            border-radius 2px
            position absolute
            top 0
            left 0
            transform rotate(90deg)
            -webkit-transform rotate(90deg)
    .seller-point
      margin-top 0.9375rem
      width 100%
      overflow hidden
      display flex
      display -webkit-flex
      justify-content space-between
      -webkit-justify-content space-between
      align-items flex-start
      -webkit-align-items flex-start
      font-family PingFangSC-Regular
      .item
        flex 1
        -webkit-flex 1
        text-align center
        font-size 0
        position relative
        border-right 1px solid hsla(0, 0%, 87%, 0.5)
        height 4.0625rem
        &:last-child
          border 0
        span
          font-size 0.75rem
          width 100%
          display inline-block
          overflow hidden
          .hign
            padding-left 0.3rem
            color #e95656
        .name
          color #999
          line-height 1.125rem
        .val
          color #051b2b
          padding-top 0.3125rem
          line-height 1rem
        .torst-pop
          background-color #e95656
          width auto
          margin-top 0.3125rem
          display inline-block
          font-size 0.625rem
          color #fff
          padding 0 0.1875rem
          border-radius 0.125rem
          position relative
          overflow inherit
          &:after
            border-bottom 0.375rem solid #e95656
            content ''
            display inline-block
            width 0
            height 0
            border-left 0.3125rem solid transparent
            border-right 0.3125rem solid transparent
            position absolute
            top -5px
            left 50%
            transform translate(-50%)
            -webkit-transform translate(-50%)
    .seller-btn
      width 100%
      overflow hidden
      text-align center
      margin 1.25rem 0 0.625rem
      a
        font-family PingFangSC-Regular
        padding 0 1.25rem
        display inline-block
        border-radius 0.5rem
        line-height 1.625rem
        border 1px solid #f28f25
        font-size 0.75rem
        color #f28f25
        text-indent 1.25rem
        position relative
        &:after
          position absolute
          content ''
          width 0.875rem
          height 0.75rem
          background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAYCAYAAADpnJ2CAAAABGdBTUEAALGPC/xhBQAAAzpJREFUSA3lVk1oE1EQfvM2SVvdiFV69WSTauIP2INFhPqDBxXxoiBqKVKtivYHLFo8VD0o4k9SWsV6Equg9eBFClJtBcHfQhFaQ1OFemgPGqq4m7bJZnect2U3MSSUtuvJd9h582beN+/NfG8SYBkj3uYvN3QMMYbliKwwwzTnKQBLIMIncEGz9/RwrwUA1gRvrylWEokvFGyZteaEBAZJN5eChfWREYHnskBVLXnKDAbsrVf27IaaoQnLNh+JXRVFynjsESLuSaF+ljBqBI55Q2FUx2PfKI0lHFw75IZIz3yCZO9RQqWrKMIQrScYl1d46wZ+cOGkjk1Ui2AUv9+pYALX2zgSoTp2m3zAyeNijWPXPgkZnhEK4+yyKR38AOPXTTjEk9gV8IDS6t+PhvGYWPVZro8GSX/GEHcuKCZA95KG6C4LQwn7+qmWGziHKs4MPCoMxKarAICW04IkpSxzPwC/KXQ0WLVg6XqhGEWsW8jMkwndibFYYs8VgwICW2eSRoBKTHLnA59uL/OJ/Oezm0+gfXUgn30SsUDYKH/IEfCdUIwp45yQ2UNp9bUkNX1YHdNGTZpnOYg1dSw2ipo2SPNLWWZTpe51Xkwo1huYDJVV6KC/JupK9Cgfci6FFskYnYrzQMrQa4lA1eYu8QH2iwE0uTm8ZClAjRvbyX6NKrbU9mHQyVzQ4U0VDU1JiTLd0OuIMAeIIylJkjabDz8e8h8xAO+QIUdaIQ4cm+l4W8m+Nw2cnhHZnpLWS0y5QgeQ05aZmWhvwLBWbhy5Z/dSNexfazBsojxvIbcSuk2MkvDKDa4LVh9Uw74qysQxKkVQQBHQID2nu3JD9L7Qp28FViY1rYXAK+nWy5HBd3LqA5BueOsjg8LnPxq/w75OYtkDp6+shEv7qNO8sHDtd0jFPkRFP0jEsOtqOc1XCiyqeSXJbRZGOqC18o9ljoAXHbthrrPbAYnefzXcXM5OrNkBCYzaK4229zkev2mZ++dJ0MSilM1gE4L9n4au95H0jarxdYAY+zONPiuJ8pZAGdeKBQ4hfLDw7IAet+ewltQ6yLyJkmt2d8spW86afvv3EBPUaXrcvOCEhfEHxJdJP9k5i2sAAAAASUVORK5CYII=')
          background-size cover
          left 1.25rem
          top 0.375rem
  .zhengpin
    width 100%
    margin 0.625rem 0
    overflow hidden
    font-size 0
    img
      width 100%
      display inline-block
      overflow hidden
  .m-title
    width 100%
    overflow hidden
    text-align center
    padding-bottom 0.625rem
    background-color #f1f1f1
    span
      display inline-block
      padding 0 0.9375rem
      color #999
      font-size 0.75rem
      position relative
      &:before, &:after
        content ''
        position absolute
        top 50%
        width 2.1875rem
        height 1px
        transform translateY(-50%)
        -webkit-transform translateY(-50%)
      &:after
        left -2.1875rem
        background-color #dedede
      &:before
        right -2.1875rem
        background-color hsla(0, 0%, 87%, 0.5)
  .image-text-wrap
    background-color #fff
    margin-top 0.625rem
    .title
      font-size 0.8125rem
      color #292929
      margin-bottom 0.5rem
      padding 0.625rem 0 0.625rem 0.75rem
      border-bottom 1px solid hsla(0, 0%, 87%, 0.5)
      display inline-block
      font-family PingFangSC-Medium
      width 100%
    .list
      width 100%
      overflow hidden
      padding 0 0.75rem
      .item
        width 100%
        overflow hidden
        margin-bottom 0.3125rem
        .name
          width 100%
          padding 1.25rem 0 0.9375rem
          overflow hidden
          h2
            width 100%
            overflow hidden
            text-align center
            span
              display inline-block
              line-height 1.125rem
              font-size 0.875rem
              position relative
              padding 0 1.25rem
              color #646464
              font-family PingFangSC-Medium
              &:before
                content ''
                position absolute
                right -1.5625rem
                top 0.5625rem
                width 2.1875rem
                height 1px
                background-color #e95656
              &:after
                content ''
                position absolute
                left -1.5625rem
                top 0.5625rem
                width 2.1875rem
                height 1px
                background-color #e95656
      .keylist
        width 100%
        overflow hidden
        .keyitem
          width 100%
          overflow hidden
          display flex
          margin-bottom 0.625rem
          .key
            margin-left 1.25rem
            width 4.375rem
            overflow hidden
            font-size 0.75rem
            padding-right 0.625rem
            color #9b9b9b
            line-height 1.125rem
          .value
            flex 1
            overflow hidden
            font-size 0.75rem
            line-height 1.125rem
            word-break break-all
            color #383838
      .pics
        img
          width 100%
          display inline-block
          border 0
  .detailsFooter
    // position fixed
    width 100%
    // bottom 0
    height 2.8125rem
    background-color #fff
    display flex
    .left
      flex 1
      width 40%
      height 2.8125rem
      display -webkit-flex
      border-top 1px solid #dedede
      .collection
        display flex
        flex-direction column
        justify-content center
        align-items center
      span
        flex 1
        -webkit-flex 1
        text-align center
        font-size 0
      .icon-collect
        display inline-block
        background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAA8lJREFUWAnFl8kvbFEQxquvJuYgiIUQMQ8JMS2IMQgLCwvxR1pYSMwRQ1iYQowxBokIghBDTO/51Xv35tKud9vTrRLd1zmn6vvuOXWqvvb8ejX5QTN+EFuhve8JsCHb29uyt7cnZ2dncnd3J6GhoRIXFydpaWmSl5cn4eHh7930//v7e9nY2JCDgwO5vLyUx8dHiYiIkMTERMnIyJCsrCzxeDxvfD32Izg+PpaJiQl1ZhVAkZGR8vDwIDc3NwI5yFRUVEhRUdGbQCsrKzI7O6uggERFRUlYWJjc3t4KxDBeora2VlJSUixfiwBvPTY2Ji8vL8q2rKxMEhISrIXsxOrqqiwuLuqa/Px8qamp0fnJyUlZX18XwzCkpKRECgsL9c1N5/Pzc5mfn9ddZU1DQ4NkZmbqtBI4OTmR3t5eCQkJkerqasnOzjZ9fb7Z2pGRESFoVVWVzk9PTyvZpqYmfUsfp78DW1tbMjU1Jc/Pz9Le3i7JycmiBLq7u+Xi4kIaGxv1nJwCmOMcR09Pj7W1HFVHR4duu7nG6ZudHh0dlfj4eOns7BRjd3dXwdPT012BE5jzbW1tlZiYGP3jmTE3RiKCxQuD7SXbMRLLHyOzu7q6/HGx1oK1v7//JydOT081YewJZ60M0ANYXE+wDa5JdHR0gKCcw4IJ9uutMPRaOS8NzAzXHWyDDOaOB9vABNugOrEVXK1gGVhggm2kpqYq7uHhYbDwxcQC2+BOchbLy8tBIwAWmIpNMaE4UBg2NzcDTgIMsMAEW/UAjYcuR02/uroKGAligwEWmJgSgAlNiLZLo6GPf7cRk9hggAUmZiminJwcyc3NVREyODioHeu7SND9iInAAQMs0ywCDCAWSIyjoyPp6+v7lp3gzYlFTGKDYTdLkJiDsGWraBZJSUna9ajbXzGKzcDAgNZ8wNELaA67+RBgEumFOkJAcFZtbW2fCg17QPMZ4dLf3y/X19cqcOrr6330IGs/JGAGmZubk4WFBdV2iBVEqRtDlCI6SLjS0lIpLy93dPuUAF47OzsyPj6uSVlZWSnFxcWOwZhYWlqSmZkZ3eq6ujpL+zk5/ZMAjmjGoaEhrd/Ia7aTu2w3ko1jQ+CgpFtaWlTz2dd89OyKAI40kOHhYSVDE2lublZdxxyVjTnOHaHJnFuJ5poAQPRwKtna2pp4vV4tKIyjdJ+enqSgoECVMnXerflFwAxKXvADxqyYHAf329T65jo3318iQGDqOvUC437Hxsbqs78fXyYAEPUCe/97Twddfvj8OHXpp8v+B9jE+Q3W5+tsXCx8gQAAAABJRU5ErkJggg==')
        background-size 1.2rem 1.2rem
        background-position center center
      .icon
        width 1.2rem
        height 1.2rem
      .text
        padding-top 0.125rem
        font-size 0.75rem
        color #999
    .right
      flex 2
      width 60%
      display flex
      display -webkit-flex
      font-size 0
      span
        flex 1
        -webkit-flex 1
        color #fff
        font-size 0.9375rem
        text-align center
        line-height 2.8125rem
      .addCart
        background-color rgba(242, 143, 37, 0.8)
      .buy
        background-color #c33
</style>