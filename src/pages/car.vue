<template>
  <div class="car-content">
    <header class="topbar">
      <div class="top-title">
        购物车({{allCount}})
        <i></i>
      </div>
      <div class="top-home">
        <a href="/home">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAA/CAYAAAC2NAWOAAAAAXNSR0IArs4c6QAAB0JJREFUeAHtm31MVlUcx3kgQChIy1LWelvGXH9URgvSpW7QnGtEqENqM9kyRF4CzGXlZmSrOaOQ8aLQnEE5lVKmZpFCujItxcr+cLXW5jRB7cVsvMVrn9Oec3e4Hnwenue5F8R7t8P5ne8553d+v+/53XPOvc/FFTSCV3Z29pTe3t4PMWEqaW11dfXaETTHGNplSDYLy5YtS+rv768bGBiYIId2uVx1kZGRGSUlJZ0SG4l8REhZunRpHmSU4HCIxunvwsPDU8rKyn7T1NkC2UpKUVFRWEtLSwWeLfHg3XmiJrWqquqIh3aWVAdbolWjNC8v7xYIaaJqECE4Xws2h/SH0m0S8oGsrKwMBbNNtCVSuF0e4HbZhVd3Ss8gox/sZRbXtwUGAXexxog298s27vydpKSklWlpaX0m3LKi5aTg7HycrcGD6xUvLoWEhDy9YcOGzxQsiN3ohr6+vlrISlVxCGwAS4fASypulaxb6AIyFk64zp07t5q8EoVhUikO/oKcyHrxjcRkfuzYse7m5ua6vXv3CrtmSpx8Cv1SExIS9tHmTwW3RLQkUjIzMyNxogZCFqhWg+0PDg5eSIRcVHGdTISlEWGbqYtU6v+mf/rGjRs/V7CAiwEnBULuwEqxNjyoWgshZYmJiYXDWRsgZhrE7iLdrugSa8sKbqX1ChZQMaCk4MQMHNhJulWxshtCsrldNimY12J+fv6kzs7OnXSYrnZC5+aYmJgstvluFQ+EHDBS2GGegwzz+nEBbD6zesgfY8X5prW1tQpdGSY9hyMiIuaVlpaeN+F+Ff0mpa6uLqSpqakYgwtMlvxAOQVCTptwn4sQv5xx1qHA2CCImDOkFNaZ731WbOroFyk8v0xgMdyOoY+b9O6Ijo5eXFxc3G7C/S5yi85hzG0oGq8o60DOYAI+UjCfRZ9JYUGdygzthpB7ldEH2B3WsLu8Tt2AggdUzMnJie3p6dmD0lhVMWOuIWKK/B3bJ1KIkLkcsrZi0I2KUe0QshijdiiYZWJBQcF4FuBtTIp4RDAuCKmPiopa5E+UDpsUIuRFBl6HMepz02mwJ9lhThjW2SCI9ayxsVE8JhSahvuRCRLrzCkT7lXRa1J4oAvv7u6uhoxnTZoPYcB8DLhgwm0rss5ksM5UMaBxckb+nYlawER9OVxDvCKFZ5LJ3C71EJKgDsCgmzgrZPtyVnBvs2InkSTXouslX3QJm7BxOm/xxHlGPGHLq4cJy2HC3pOAN7mxtQ3VmPUjjlk4ACH3KW36IGQ5s7Dq4MGDPj29xsbGvou+fFKEOyW0tbVFHz9+vEEZx2uRZ6Iz8fHx27F1Fp1i3B1DsDs5Li5uYnJy8n5s7fdGobouXNaesExnkK9QfJushIyLpLkQUioxX3J0LNL0k1GjqfIMVVZWnqHVY+iuM7XO5fDXUFhYeJMJ1xa1pECCC0LehJCtyGIm5fUTQjyE7JfAaMs5q3Rg30LsWk0yjgX4kdje3n6UA6Aa8VrzLyNFvNOAkHoIeVXtAfufUk5gQPHoH4irVqNEh2maeYYg5w2xAWB3m9L6HuQj7KBPKNhl4iBScnNz72ZBPQKrKWpLFBezCCYz0CUV90cOCwtbid5SkrgdRSoVC60/Os19WWDrIWYGuk/JOnyLprybiR9yLGP3odFsOnxMulkqoPO/pOdR/oHErsacyJiIHzvwbaZqP9gWJmIJO17XIFwUuM+yyMrodJ1S2YqcSnR8q2BXrQgxoZBQjo+ZqhNgR0NDQ1PLy8tbJC4W1CLWj9ckIHIaNpOeIkLOqvhYkCEnB9/WqwFA+SwpXvobTOWgIzKVW/mVbqZsMBaIUH0g8ivwUTwv/SVxOBBHjjRZFgvtYXdBbF+r2F2eGemfLaVxVuVM+BfofgRyTooxyHvJjgpZXMFExTzyNCqmweJb/6PXwB98/RXfH8bvdCLlIYj6+hpw23cXjS1Zp0Icizs6OsRx/ORoPsXqbJeYLz4MOrxJRTLnWLyH0BIr9T62bfMrR9lsVOe++HBFUvD2UcVjVVbgUS+qdqvykIZ7IsW4vViQPLUdcpARrhi2D1ero5by7JCiodchxSFFw4AGUp+KNdWBgcSLb14qv4I29Xcij8pZ3AdIjZw2t3hsHMAGtpDiJuSF4drN+SiItJhfBBsqKios/1hH2mfXmjKsCJHGuXMXbwOjTJilRVsiRfWABzHj3KDiZln3nsfcxqqyXZFilf2W6HVI0dDqkOKQomFAAzmR4pCiYUADOZHikKJhQAM5keKQomFAAzmR4pCiYUADOZEyUqTwoqjTPfag70A09hgQ71FknyD++9SQjQYWCra8OuBrovW8E5kMOZ9468u4cePe7+rqmkb7E4H+Lw1PNthCCt/q/4whqZ6MUevdRKSrmF2y16TwYc9s8eLHLsMCNQ52D1uV16SgeRYDiA93x/x1xd2HNeCfMcaAV193eiJlxRghRnylJf61rsabSf4PS7K7vtYfdhoAAAAASUVORK5CYII="
          />
        </a>
      </div>
      <div class="top-user">
        <a href="//m.ymatou.com/myorder/page/personalcenter">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABPVJREFUWAm9mGtoW2UYx5tLSzNa2g6dbRLsqA5UFMW6yr5YpjUqm34QVjeGitg2abvQdUhBEU39MF0N9EPtvVOng3lBmQ6lTtQP3l0rzqkfBAVrm8Q6V5i01qQXf8/hZJ5kPW9Oos0LL+/leZ7/83+f93qOrSCH1N7eXp1IJO5dWVnZYbPZrlhdXa0EZoEcof2V3W4/Tt/4yMhIIlt4WzYGwWDw0sXFxRA2LTh0qmwh9hPyx0ZHR19T6aXLLBPy+/03LS8vvwWAWwd5H6dvQuwU7d+obyAy1ejcQXuPQe8Fr9cbCIVCcd1OWVgiBJltTM8HOHfh+AyO/cPDw5+bIXd2drrm5+cPoB/SIznu8/l2NjY2LpvZJPszEgoEAp6lpaUJDCoh805ZWdl94XB4PgmgKpuamm5Ffpxcim0v03dApS8yeyYFpuBZdITM1yUlJbuskhHcsbGxDx0Ox15sV4jU/paWlhsz+VMSYqquB2i3AAL0QG9v71+ZANPlTO0J+l4k28A6mC5PbysJAbBXgMivEu7v042ttgsLC0P6oG7v6Oi4TGWXidDdYgxYVls33eHAwMCv9H3BAO0LCws70uXGtikhtqkdgC268idGoxzrGgaDu0plb0podnZ2E4YOABKsgz9UIFZkDC4qehwfVSp9U0JCRAwlzN3d3RmPB5UTkYGnneyUSypdU0L9/f0SFTldHbFYTDkqlQODzCt1CEUMfRdVTQnpxqel5GC87SLLLDuIdBLjG5VpJkJyd8mo7leBZJI1NzffgM615Hh5efm4Sl9JCMOXIfM3o2vQrwEVlqkM+6dFCNYrPT09f5oqIlAS4j0zBdhzOthLHP1ZryWiI/fXnTKwoqKiJ1RkRKYkJAqAhAA7AzEPW/Ykl+1m6beSiGo7dj267n42yi+Z7CxtZyHBJfsx4F7InSU/7na7D3N4rrmFW1tba9gIz6C/Swigf5q81coL0hIhAW1ra6vk2SpP05ulTZLn6tuUp3gfxSC8gfZm5D7K7ZQpL0r6fkC3mTvxMzE2S0pCzP9WDPfxBmqTZwcRcUYikYdx9iTZdD3hPIH8KE+PMES3gfEU2U2/RDQIqSHKNZMpIcjUA3oCkPPFxcXX9PX1nU8iCLFoNFovj3z6aoQcenKIyqH3Jbf76/qFqpl0dXWVzs3NjaC3W+soKAjxVurW6ynFmoQgcxdab5BjTqezYXBw8OcUqxwb7NIuBnFIzJnmIGtK28FGOIexIXXWypUYfUR1ipBvHxoamkrXybU9OTn5aW1t7SL2DWRfXV3dexMTEzNGvJRtT0ht8Xj8sCgwBTshk6JsNMy1zvo5BPYxfDlZX0eZ/mIjVgohQroP4S0YPEo45btqXVJFRYUfH9OQ2jI9PR0wOrmwhoQpwiiK30FGSK0aFf/vOu/1h4jQ8/iZ9Xg81fiXqfz3pJ6ZmbmHdjmsw+tNRhxXVVUdwY9cTZs4SrSnsvRfmDIED6JwltX/rgjWOxER+TQ6In4o9yT9aYRYO5fQIZ/Ax6wc70nj/1oyePmIFEL1SSyNENv8ajrkCJDtnrfEffgtsyJ/TTbKcSOONUJ0Xi4NmE5Jma/EtMlV8qP44zKukVIjRKkRcrlceSUkBAiC9kVDuVHaSUKl1M9xX/0unXlO2hcxs3RO/GqEuAwP8hBLPivyyoeF/Qj35XVsppN5dWzV2T/Y7//hq6F8rwAAAABJRU5ErkJggg=="
          />
        </a>
      </div>
    </header>
    <div class="main">
      <div class="notice">海外买手会根据现行国家政策要求，通过不同的物流方式分别发货，其实对你没有影响啦~</div>
      <div class="seller-wrap">
        <div class="seller" v-for="(seller,i) in carList" :key="i">
          <div class="seller-info">
            <div class="checkboxp">
              <van-checkbox v-model="seller.checked" @click="checkShop(seller)"></van-checkbox>
            </div>
            <div class="info">
              <div class="head-img">
                <span
                  class="img lazyload transition"
                  :style="{'backgroundImage': 'url('+seller.avatarUrl+')'}"
                ></span>
              </div>
              <div class="desc">
                <span class="name">{{seller.shopTitle}}</span>
                <span class="country">
                  <img :src="seller.countryIconUrl" class="img" />
                  {{seller.countryName}}
                </span>
              </div>
            </div>
            <div class="spacing"></div>
          </div>
          <div class="promotion-wrap">
            <div class="promotion">
              <div class="product-list">
                <div class="product" v-for="(product,i) in seller.productList" :key="i">
                  <div class="content">
                    <div class="checkboxp">
                      <van-checkbox @click="ischeck(seller,product)" v-model="product.isChecked"></van-checkbox>
                    </div>
                    <div class="prod-warp">
                      <div class="prod-info">
                        <div class="pic">
                          <img class="lazyload transition" :src="product.pic" style="opacity: 1;" />
                        </div>
                        <div class="desc">
                          <div class="name">
                            <i class="tag-taxes">包邮包税</i>
                            <span>{{product.productTitle}}</span>
                          </div>
                          <div class="sku">{{product.category}}</div>
                          <div class="preadd-desc">黑五狂欢价 9小时后恢复原价</div>
                          <div class="serve">
                            <span class="tag-py">拼邮</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="operation">
                      <div class="price">¥ {{product.price}}</div>
                      <van-tag type="warning">活动价</van-tag>
                      <div class="amount">
                        <span class="mini" @click="cut(product)">一</span>
                        <span class="num">{{product.count}}</span>
                        <span class="plus" @click="add(product)">+</span>
                      </div>
                      <div class="delete">
                        <i></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <van-submit-bar :price="allPrice" :button-text="'去结算('+allCount+')'">
      <span style="width:10px;"></span>
      <van-checkbox v-model="isCheckAll" @click="allChecked()">全选</van-checkbox>
      <span slot="tip">
        你的收货地址不支持同城送,
        <span @click="aa">修改地址</span>
      </span>
    </van-submit-bar>
  </div>
</template>

<script>
import _ from "lodash";
import Vue from "vue";
import { Tag, SubmitBar, Checkbox, CheckboxGroup } from "vant";
import { SETCAR, LOADCAR } from "../store/modules/action-types";
Vue.use(Tag)
  .use(SubmitBar)
  .use(Checkbox)
  .use(CheckboxGroup);
export default Vue.extend({
  mounted() {
    var docEl = document.documentElement;
    var html = document.querySelector("html");
    var rem = docEl.clientWidth / 23.4;
    html.style.fontSize = rem + "px";
    this.carList = this.$store.state.car.car;

    this.allShops = this.carList.length;
  },
  data() {
    return {
      carList: {},
      price: "",
      result: [],
      sellId: "",

      isCheckAll: "",
      allPrice: 0,
      allShops: 0,
      allCount: 0
    };
  },
  watch: {
    carList: {
      deep: true,
      handler(val, oldval) {
        this._allPrice();
      }
    }
  },
  methods: {
    aa() {
      console.log(this.result);
    },
    add(pro) {
      if (pro.count < 99) pro.count++;
    },
    cut(pro) {
      if (pro.count > 1) pro.count--;
    },
    allChecked() {
      this.isCheckAll = !this.isCheckAll;
      this.isCheckAll
        ? this.carList.forEach(item => {
            this._shopTrue(item);
          })
        : this.carList.forEach(item => {
            this._shopFalse(item);
          });
    },
    checkShop(seller) {
      !seller.checked ? this._shopTrue(seller) : this._shopFalse(seller);
    },
    _shopTrue(seller) {
      for (let i = 0; i < seller.productList.length; i++) {
        if (seller.productList[i].isChecked == false) {
          this._checkTrue(seller, seller.productList[i]);
        }
      }
    },
    _shopFalse(seller) {
      for (let i = 0; i < seller.productList.length; i++) {
        console.log(seller.productList[i].isChecked);
        if (seller.productList[i].isChecked == true) {
          this._checkFalse(seller, seller.productList[i]);
        }
      }
    },
    ischeck(seller, pro) {
      !pro.isChecked
        ? this._checkTrue(seller, pro)
        : this._checkFalse(seller, pro);
    },
    _checkTrue(seller, pro) {
      pro.isChecked = true;
      ++seller.checkCount;
      if (seller.checkCount == seller.productList.length) {
        seller.checked = true;
      }
      console.log(this.allShops);
      if (seller.checked) {
        if (++this.allShops === this.carList.length) {
          this.isCheckAll = true;
        } else {
          this.isCheckAll = false;
        }
      }
    },
    _checkFalse(seller, pro) {
      pro.isChecked = false;
      --seller.checkCount;
      if (seller.checked) {
        seller.checked = false;
        this.allShops--;
      }
      this.isCheckAll = false;
    },
    _allPrice() {
      let result = 0;
      let allCount = 0;
      this.carList.forEach(seller => {
        seller.productList.forEach(pro => {
          if (pro.isChecked) {
            result = pro.count * pro.price + result;
            allCount += pro.count;
          }
        });
      });
      this.allPrice = result * 100;
      this.allCount = allCount;

      console.log(this.allPrice, this.allCount);
      this.$store.commit("car/" + LOADCAR, this.carList);
    }
  }
});
</script>

<style lang="stylus" scoped >
.checkboxp
  padding 0 10px
  display flex
  justify-content center
.car-content
  height 100%
  overflow auto
  display flex
  flex-direction column
.main
  flex 1
  height 100%
.topbar
  background #fff
  width 100%
  position sticky
  top 0
  z-index 999
  .top-title
    width 100%
    color #515151
    font-size 1.0625rem
    text-align center
    line-height 2.5rem
    display inline-block
    i
      display inline-block
  .top-home
    position absolute
    width 2.5rem
    height 2.5rem
    right 2.5rem
    top 0
  .top-user
    position absolute
    width 2.5rem
    height 2.5rem
    top 0
    right 0
  img
    display inline-block
    height 1.0625rem
    margin-top 0.8125rem
    margin-left 0.625rem
.notice
  width 100%
  padding 0.625rem
  overflow hidden
  font-size 0.75rem
  line-height 1.125rem
  color #9b9b9b
.seller-wrap
  background #fff
  margin-bottom 84px
  .seller
    width 100%
    overflow hidden
    min-height 10rem
    padding-bottom 0.625rem
    position relative
    &:before
      position absolute
      content ''
      width 100%
      height 0.6875rem
      left 0
      bottom 0
      z-index 2
      background #f1f1f1
    .seller-info
      display flex
      width 100%
      overflow hidden
      padding 0.3125rem 0
      height 3.125rem
      border-bottom 1px solid #dedede
      justify-content space-between
      -webkit-justify-content space-between
      .checkbox-box
        padding-left 0.625rem
        padding-top 0.5625rem
        width 2.625rem
        .switch
          display inline-block
          width 1.375rem
          height 1.375rem
          border-radius 50%
          border 1px solid #9b9b9b
          background-color #fff
          position relative
          vertical-align middle
      .info
        display flex
        -ms-flex 1
        flex 1
        .head-img
          width 3.125rem
          height 2.5rem
          .img
            display inline-block
            width 2.5rem
            height 2.5rem
            border-radius 50%
            overflow hidden
            background-size cover
            background-repeat no-repeat
            border 1px solid #dedede
        .desc
          position relative
          height 2.5rem
          .name
            overflow hidden
            white-space normal
            padding-top 0.3125rem
            font-size 0.75rem
            color #646464
            line-height 1.0625rem
            position relative
            padding-right 0.625rem
            min-width 4.375rem
            max-width 6.25rem
            &:before
              right 0.125rem
              top 0.8125rem
              content ''
              display block
              position absolute
              width 0.3125rem
              height 0.3125rem
              border-width 1px
              border-style solid
              border-color #9b9b9b #9b9b9b transparent transparent
              transform translateY(-50%) rotate(45deg)
              -moz-transform translateY(-50%) rotate(45deg)
              -ms-transform translateY(-50%) rotate(45deg)
              -webkit-transform translateY(-50%) rotate(45deg)
          .country
            position absolute
            left 0
            bottom 0.25rem
            padding 0 0 0 0.9375rem
            font-size 0.75rem
            color #646464
            line-height 0.875rem
            vertical-align center
            text-overflow ellipsis
            -webkit-line-clamp 1
            overflow hidden
            white-space normal
            .img
              position absolute
              left 0
              top 0.0625rem
              display inline-block
              width 0.75rem
              height 0.75rem
              border-radius 50%
    .promotion
      width 100%
      overflow hidden
      position relative
      border-bottom 1px solid #dedede
      .product
        width 100%
        overflow hidden
        padding 0.875rem 0 0.625rem
        .content
          display flex
          width 100%
          overflow hidden
          .checkbox-box
            padding-left 0.625rem
            padding-top 0.625rem
            width 2.625rem
            height 4.375rem
            overflow hidden
            .switch
              display inline-block
              width 1.375rem
              height 1.375rem
              border-radius 50%
              border 1px solid #9b9b9b
              background-color #fff
              position relative
              vertical-align middle
          .prod-warp
            overflow hidden
            flex 1
            .prod-info
              width 100%
              overflow hidden
              display flex
              .pic
                width 4.375rem
                margin-right 0.625rem
                overflow hidden
                img
                  height 4.375rem
                  width 4.375rem
              .desc
                flex 1
                overflow hidden
                padding-right 0.3125rem
                .name
                  width 100%
                  // height 1.85rem
                  line-height 0.875rem
                  white-space normal
                  font-size 0.75rem
                  color #383838
                  overflow hidden
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  text-overflow: ellipsis;
                  -webkit-line-clamp 2 
                  i
                    display inline-block
                    position relative
                    top -1px
                    margin 1px 0
                  .tag-taxes
                    vertical-align middle
                    font-size 0.625rem
                    border 1px solid #c33
                    padding 0.0625rem 0.125rem
                    margin-right 0.1875rem
                    color #c33
                    line-height 0.625rem
                    border-radius 3px
                .sku
                  margin 0.375rem 0
                  overflow hidden
                  min-height 0.75rem
                  font-size 0.75rem
                  color #9b9b9b
                .preadd-desc
                  margin 0.375rem 0
                  min-height 0.75rem
                  font-size 0.6875rem
                  color #c33
                  text-overflow ellipsis
                  -webkit-line-clamp 2
                  overflow hidden
                  white-space normal
                .serve
                  width 100%
                  overflow hidden
                  font-size 0.75rem
                  span
                    display inline-block
                    line-height 0.75rem
                    padding-left 0.9375rem
                    position relative
                    color #646464
                    background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAdVJREFUeNpiZICCfzk6CkCqHogDgFiAgTzwAYg3AHEj05QrD0ACjFDDDYDUfgoMxmaRI9CSC4xQl5+nouHIlhgyQYOF2oYzQM2sZ4KGOfGAk5eBQUgKwZfRwKc6gAmf6xknXwZjmCGMXlkMjF3HGBjz58MtYyxfDRGLacHqCxaiXP3kBpj6//YpJFWAfKDnBPEN1KL/l/Zh1cpEUvCc3MjA8O4ZxDdAXzE6xEDEQYbjsACUiv5jCxoMcPs0A4OqKV77/09Kgqgj6AOQImSFIPbTm5hiUN8wfP8M4YNoYnyA7pP/ubqQcAcaiCwGinQGz0yw4WDXkxsHjHnzGBgbd5KVGTB9AHQp2GWg8EZO78QALD7B7gNzfxTD/8/Ox4g8YgGmBaCIAya5/2s7EWIgPtBl/+vdEZaC4mX7dITLgXxs8YDVB2AXH1iCKQFLplhSC/E+wBdhyBmLSIC1qABHsooJSgHHGFwOL5P+Y/MdKT74j5ZrwRaCIh4kB4obaNlErA8+YJSoIAOgEQguxIB8RlCBBhJHcj3IIYzQQhBXpQPKB6CyN4GBNmABKIgaob6gNvgArvyhtb8jlS2BVfoPwJEMqv1BFTTISxRa9AFqhiHUTAaAAAMAsOi0UGoVLXUAAAAASUVORK5CYII=')
                    background-size contain
                    background-repeat no-repeat
          .operation
            width 5rem
            overflow hidden
            padding-right 0.625rem
            text-align right
            .price
              text-align right
              line-height 0.875rem
              color #c33
              font-size 0.875rem
            .amount
              width 5.625rem
              position relative
              right 0.9375rem
              margin-top 0.625rem
              vertical-align middle
              font-size 0
              span
                width 1.25rem
                display inline-block
                border 1px solid #cecece
                line-height 1.25rem
                font-size 1rem
                text-align center
                color #cdcdcd
                vertical-align top
              .mini
                font-size 0.625rem
                border-top-left-radius 0.125rem
                border-bottom-left-radius 0.125rem
              .num
                width 1.875rem
                line-height 1.25rem
                color #383838
                font-size 0.75rem
                vertical-align middle
                border-top 1px solid #cecece
                border-bottom 1px solid #cecece
                text-align center
              .plus
                border-top-right-radius 0.125rem
                border-bottom-right-radius 0.125rem
            .delete
              width 1.25rem
              height 1.25rem
              position relative
              display inline-block
              margin 0.625rem 0 0
              i
                width 0.875rem
                height 0.9375rem
                position absolute
                left 50%
                top 50%
                margin-top -0.46875rem
                margin-left -0.4375rem
                background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAeCAYAAAA/xX6fAAAAAXNSR0IArs4c6QAAArpJREFUSA3dlj1oU1EUx33JI2kWBXEwCFKSgjhI28Wl4KJ2CEVbHLRQMMlLJgcHK1QRXEX8GHTLpyCICgaXKOoiOkgHh6pdNFBFDUVcOkgLyYu/W7yX++4LaMlLBi/cnHPP/d/zP+fcjxdr219apVIZarfbFzqdzinLsvYiLX0JNkydL9ju2bZ9JZPJrOvzpm6bBnPcarUeYpuiuzj+Kgh0zJ8ARrBdBjuGnNbnTV1FKxZWq9URFm2XoFAodMB13QokP7A5YL7LOV2C2wOuhG0X+mn0D3KerNfS6fQnGegmYaFQyGC4hsOdEhikxPdP/J3L5XJ3rFKpNENEjzBsMPEM0rUgyfC1g36UHg2Hw9M2BAuCgFIccRzntdCDbsVi8RA8Lzl8Cxbl/CUIyO560ESGv3nGbZvMLlLSm0RwyQD0Y3jWTiQStxuNxjcyHIb4Kixv0G8ExDZPIgfxdx5/n5PJZE1dC+o8zuRbJh7k8/mTQRCyXeIwztBH8bkkfIbEj96IxtXHQes+QrL0vCRBE3Z72lSG5XJ5in29xf2Z5I38KMkp1X1RCS7yrLRxn/cR61P6GcpXl3ZT+jLUS8riCfow90e8kaqBmWQgumoENiawGCaUsYviIwSjMuyC79nkI9Qz7Nl7Fwc+Qkrzn2dIFQabISetr/fQt4cDPzQDL2m/M/Q9bca1WCSAVbb1vXGlXmHzHC6ev3esXeX7umhgPUMfoZ4hfzlqoEX3NN7QYx4Dg2w2u4zYbdrNsTo0RLh5OiEM7JTiS31vJbEixLAiyCjLuJzsRVJy4Xu/8BmLxVakL08EfPVfADwM6C6yhtyQwK1I1g2xfpZ+Av05W6C+LOYeOgCeAJyDYA65FR6FlevwtRyJRHJqAsWToZio1+vRZrN5nNKOcuKiOvhfdQjXIVuKx+OPU6mUp0q/AcxRJUgmF2YrAAAAAElFTkSuQmCC')
                background-size contain
                background-repeat no-repeat
</style>