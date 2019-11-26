<template>
  <div>
    <ul class="product-list">
      <productItem 
      v-for="(item,index) in productList" 
      :key="index" 
      :index="index" 
      :item="item"
      :productId="item.id"
      
     ></productItem>
    </ul>
    <!-- 查看更多 -->
    <div class="btn-like-more" v-if="!loadMore">加载更多</div>
    <!-- 查看更多 end -->
    <!-- 已加载完 -->
    <div class="btn-like-more-over">已加载完~</div>
    <!-- 已加载完 end -->
    <!-- loading -->
    <!-- <div class="load-more" v-if="loadMore">
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
    </div> -->
    <loading v-if="loadMore"></loading>
  </div>
</template>

<script>
import Vue from "vue";
import BScroll from "better-scroll";
import productItem from "./productItem";
import { get } from "../utils/http";
import  loading from 'components/loading'

export default Vue.extend({
  
  data() {
    return {
      productList: [],
      loadMore: true
    };
  },
  methods:{
   
  },
  async mounted() {
    let page = 2;
    let result = await get({
      url: "/ajax/home/api/getLikeList",
      params: {
        pageNub: 1,
        pageSize: 20
      }
    });
    this.productList = [...this.productList, ...result.data.likeProductInfo];
    this.loadMore = false;
    this.$store.state.all=[...this.productList]
    await this.$nextTick();
    let bscroll = new BScroll(".bscroll", {
      pullUpLoad: true,
      // click: true,
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
        this.$store.state.all=[...this.productList]
        
      } else {
      }
      bscroll.finishPullUp();
      this.loadMore = false;

      
    });
  },
  components: {
    productItem,
    loading
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

</style>