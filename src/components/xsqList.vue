<template>
  <div class="bscroll-x">
    <div class="xsq-wrap">
      <xsqItem v-for="(item,index) in xsqList" :key="item.Id" :index="index" :item="item"></xsqItem>
    </div>
  </div>
</template>

<script >
import Vue from "vue";
import VueJsonp from "vue-jsonp";
import xsqItem from "./xsqItem";

Vue.use(VueJsonp);
export default Vue.extend({
  data() {
    return {
      xsqList: []
    };
  },
  mounted() {
    this.$jsonp(
      "https://jsapi.ymatou.com/evt/api/FlashSale/GetFlashSaleProductList/16761/d14852f5-b772-4c9c-acd0-f20f2af1e3f0_65c22f4c96326644ccb999204a9012f3/0?ProductId=0100d2a4-b4c8-4770-aa20-d4eaf2ae4939&callback=ymatou_at_0",
      {
        callbackQuery: "callback",
        callbackName: "ymatou_at_0"
      }
    ).then(json => {
      this.xsqList = [...this.xsqList, ...json.Data.List];
    });
  },
  components: {
    xsqItem
  }
});
</script>

<style lang="stylus" scoped>
.xsq-wrap
  width 100%
  white-space nowrap
  overflow-x scroll
  background #fff
  padding 0.4266666667rem 0.2133333333rem
.bscroll-x
  overflow hidden
</style>