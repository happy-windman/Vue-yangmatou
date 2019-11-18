<template>
  <div>
    <ul class="product-list">
      <productItem 
      v-for="(item,index) in productList" 
      :key="item.Id" 
      :index="index" 
      :item="item"></productItem>
    </ul>
    <!-- 查看更多 -->
    <div class="btn-like-more" v-if="!loadMore">加载更多</div>
    <!-- 查看更多 end -->
    <!-- 已加载完 -->
    <div class="btn-like-more-over">已加载完~</div>
    <!-- 已加载完 end -->
    <!-- loading -->
    <div class="load-more" v-if="loadMore">
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
  </div>
</template>

<script>
import Vue from "vue";
import BScroll from "better-scroll";
import productItem from "./productItem";
import { get } from "../utils/http";

export default Vue.extend({
  data() {
    return {
      productList: [],
      loadMore: true
    };
  },

  async mounted() {
    let page = 2;
    let result = await get({
      url: "ajax/home/api/getLikeList",
      params: {
        pageNub: 1,
        pageSize: 20
      }
    });
    this.productList = [...this.productList, ...result.data.likeProductInfo];
    this.loadMore = false;
    let bscroll = new BScroll(".bscroll", {
      pullUpLoad: true,
      click: true,
      probeType: 2,
      preventDefault: false,
      pullUpLoad: true
    });

    bscroll.on("pullingUp", async () => {
      // await this.$nextTick();
      // bscroll.refresh()
      this.loadMore = true;
      let result = await get({
        url: "ajax/home/api/getLikeList",
        params: {
          pageNub: page,
          pageSize: 20
        }
      });
      if (result.data.likeProductInfo.lengh != 0) {
        this.productList = [
          ...this.productList,
          ...result.data.likeProductInfo
        ];

        await this.$nextTick();
        bscroll.refresh();
        page++;
      } else {
      }
      bscroll.finishPullUp();
      this.loadMore = false;
    });
  },
  components: {
    productItem
  }
});
</script>

<style lang="stylus" scoped>
.product-list
  display flex
  flex-flow wrap
  margin-top 0.5333333333rem
  .product-wrapper
    width 50%
    margin-bottom 0.2133333333rem
  .product-wrapper:nth-child(2n+1)
    padding-right 0.1066666667rem
.load-more
  width 100%
  height 1.3333333333rem
  overflow hidden
  text-align center
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