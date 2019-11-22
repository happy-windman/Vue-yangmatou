<template>
  <div id="root">
    <myHeader path="community"></myHeader>
    <div id="main">
      <div id="content">
        <vue-waterfall-easy
          :imgsArr="imgsArr"
          @scrollReachBottom="fetchImgsData"
          :loadingTimeOut="300"
          @click="clickFn"
        >
          <div slot="waterfall-head">
            <section class="hot-field">
              <div class="title-bar">
                <div class="title">热门活动</div>
                <a
                  class="more"
                  href="javascript:YmtApi.openWin({url:'//m.ymatou.com/note/activityList', msgFlag:1,title:'全部活动',shareFlag:0,showWeiboFlag:1});"
                  module_index
                >查看全部</a>
              </div>

              <div class="scroll-wrapper">
                <ul>
                  <li class="banner-item item" data-id="104320">
                    <img
                      data-src="http://pic1.ymatou.com/G01/M00/83/E5/CgzUCV3VB7mAF7G0AAC4pE5dWAA316_1_1_w_o.jpg"
                      src="http://pic1.ymatou.com/G01/M00/83/E5/CgzUCV3VB7mAF7G0AAC4pE5dWAA316_1_1_w_o.jpg"
                    />
                    <div class="info item" data-id="104320">
                      <div class="text">黑五种草大赛</div>
                      <div class="tag">
                        <span class="tag-person">10893人</span>
                        <span class="tag-note">124篇</span>
                      </div>
                    </div>
                  </li>

                  <li class="banner-item item">
                    <img
                      data-src="http://pic1.ymatou.com/G01/M01/10/96/CgzUBl2_mY6AKrXpAAAPZhbvUGU409_1_1_w_o.png"
                      src="http://pic1.ymatou.com/G01/M01/10/96/CgzUBl2_mY6AKrXpAAAPZhbvUGU409_1_1_w_o.png"
                    />
                    <div class="info item" data-id="104312">
                      <div class="text">我要上推荐</div>
                      <div class="tag">
                        <span class="tag-person">1536人</span>
                        <span class="tag-note">44篇</span>
                      </div>
                    </div>
                  </li>

                  <li class="banner-item item">
                    <img
                      data-src="http://pic1.ymatou.com/G01/M02/17/F1/CgzUCF3A7QaAKMOrAAA1BfDg3hY186_1_1_w_o.jpg"
                      src="http://pic1.ymatou.com/G01/M02/17/F1/CgzUCF3A7QaAKMOrAAA1BfDg3hY186_1_1_w_o.jpg"
                    />
                    <div class="info item" data-id="104313">
                      <div class="text">中古直播间</div>
                      <div class="tag">
                        <span class="tag-person">1899人</span>
                        <span class="tag-note">2篇</span>
                      </div>
                    </div>
                  </li>

                  <li class="banner-item item">
                    <img
                      data-src="http://pic1.ymatou.com/G01/M03/0C/1E/CgzUBl2-iaKAJPvCAAccOeLNI7Y253_124_124_w_o.jpg"
                      src="http://pic1.ymatou.com/G01/M03/0C/1E/CgzUBl2-iaKAJPvCAAccOeLNI7Y253_124_124_w_o.jpg"
                    />
                    <div class="info item" data-id="104316">
                      <div class="text">我的新衣服</div>
                      <div class="tag">
                        <span class="tag-person">1848人</span>
                        <span class="tag-note">7篇</span>
                      </div>
                    </div>
                  </li>

                  <li class="banner-item item">
                    <img
                      data-src="http://pic1.ymatou.com/G01/M01/06/AD/CgzUBl29VNSAdOwUAABMjqWsO8o832_1_1_w_o.jpg"
                      src="http://pic1.ymatou.com/G01/M01/06/AD/CgzUBl29VNSAdOwUAABMjqWsO8o832_1_1_w_o.jpg"
                    />
                    <div class="info item" data-id="104315">
                      <div class="text">口红不嫌多</div>
                      <div class="tag">
                        <span class="tag-person">1229人</span>
                        <span class="tag-note">13篇</span>
                      </div>
                    </div>
                  </li>

                  <li class="banner-item item">
                    <img
                      data-src="http://pic1.ymatou.com/G01/M03/0C/25/CgzUBl2-inuAAyytAATICoq1sxY663_1_1_w_o.jpg"
                      src="http://pic1.ymatou.com/G01/M03/0C/25/CgzUBl2-inuAAyytAATICoq1sxY663_1_1_w_o.jpg"
                    />
                    <div class="info item" data-id="104318">
                      <div class="text">我的梳妆台</div>
                      <div class="tag">
                        <span class="tag-person">1364人</span>
                        <span class="tag-note">6篇</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div class="note-item" slot-scope="props">
            <p class="note-content">{{props.value.info}}</p>

            <div class="user-info">
              <div class="user-photo">
                <img class="user-logo" :src="props.value.userlogo" />
                <span class="user-name">{{props.value.username}}</span>
              </div>

              <div class="buttons">
                <i class="like-icon-base"></i>
                <span class="collection-num">1256</span>
              </div>
            </div>
          </div>
        </vue-waterfall-easy>
      </div>
    </div>
  </div>
</template>

<script >
import Vue from "vue";
import myHeader from "components/header";
import vueWaterfallEasy from "vue-waterfall-easy";
import { get } from "../utils/http";
export default Vue.extend({
  async created() {
    this.imgsArr = await this.initImgsArr();
  },

  data() {
    return {
      imgsArr: [],
      fetchImgsArr: [],
      page: 0,
      pageSize: 10
    };
  },
  components: {
    myHeader,
    vueWaterfallEasy
  },

  methods: {
    async initImgsArr() {
      let result = await get({
        url: "/ajax/note/api/GetSocialDiscoverList",
        params: {
          Page: this.page,
          pageSize: this.pageSize,
          AccessToken: "",
          UserID: "",
          Cookieid: ""
        }
      });
      //初始化图片数组的方法，把要加载的图片装入
      var arr = [];
      for (var i = 0; i < this.pageSize; i++) {
        let username = result.data.Result[i];
        arr.push({
          src: username.NoteInfo.TagImage[0].Pic,
          username: username.UserInfo.UserName,
          info: username.NoteInfo.Content,
          userlogo: username.UserInfo.UserLogo
        });
      }

      return arr;
    },

    async fetchImgsData() {
      //获取新的图片数据的方法，用于页面滚动满足条件时调用
      this.page++;
      let arr = await this.initImgsArr();
      this.fetchImgsArr = [...arr];
      this.imgsArr = this.imgsArr.concat(this.fetchImgsArr); //数组拼接，把下一批要加载的图片放入所有图片的数组中
    },

    clickFn(event, { index, value }) {
      // 阻止a标签跳转
      event.preventDefault();
      
      // console.log(this.$route.path='/community/communityDetail')
      this.$router.push('/community/communityDetail')
     
    }
  }
});
</script>

<style scoped lang="stylus">
#id
  height 100%
#main
  position relative
  height 100%
  width 100%
  #content
    position relative
    height 100%
    width 100%
.hot-field
  margin-top 0.2666666667rem
  background white
  overflow hidden
  .title-bar
    padding 0.2666666667rem
    display -ms-flexbox
    display flex
    -ms-flex-pack justify
    justify-content space-between
    background white
    .title
      position relative
      padding-left 0.4rem
      &:before
        top 0.0533333333rem
        left 0
        position absolute
        display inline-block
        width 0.2933333333rem
        height 0.32rem
        content ''
        background url('https://m.ymatou.com/note/images/discovery/Shape@2x-1b2125d62a.png') no-repeat
        background-size contain
    .more
      position relative
      font-size 0.32rem
      color #9B9B9B
      padding-right 0.2666666667rem
      display inline-block
      &:after
        top 0.2133333333rem
        right 0.0266666667rem
        content ''
        display block
        position absolute
        width 0.16rem
        height 0.16rem
        border-width 2px
        border-style solid
        border-color #9B9B9B #9B9B9B transparent transparent
        transform translate(0, -50%) rotate(45deg)
  .scroll-wrapper
    padding-bottom 0.2666666667rem
    overflow-x auto
    overflow-y hidden
    ul
      width 100%
      height 2.6666666667rem
      white-space nowrap
      li
        display inline-block
        height 2.6666666667rem
        position relative
        margin 0 0.1333333333rem
        img
          width 4rem
          height 2.6666666667rem
          opacity 1
        .info
          position absolute
          left 50%
          top 50%
          transform translate(-50%, -50%)
          width 3.84rem
          height 1.2rem
          padding 0.08rem 0.2666666667rem 0.2133333333rem 0.2666666667rem
          background white
          opacity 0.8
          background-position center
          background-size 100% 100%
          color #646464
        .text
          width 100%
          font-weight bold
          font-size 0.3733333333rem
          line-height 0.4266666667rem
          display -webkit-box
          white-space normal
          word-break break-word
          overflow hidden
          text-overflow ellipsis
          -webkit-line-clamp 1
          -webkit-box-orient vertical
          word-wrap break-word
          word-break break-all
          text-align center
        .tag
          margin-top 0.2133333333rem
          width 100%
          line-height 0.32rem
          overflow hidden
          text-align center
      li:first-child
        margin-left 0.2666666667rem
      li:last-child
        margin-right 0.2666666667rem
.note-item
  margin 0 0 0.16rem
  padding-bottom 0.08rem
  background-color #fff
  border 0.0266666667rem solid #f1f1f1
  .note-img
    width 100%
    border 0
    margin 0
    padding 0
    height 482.6666666666667
    transition opacity 0.5s ease
    font-size 0
    position relative
    background url('https://m.ymatou.com/note/images/default-fb781a4e7d.png') center center no-repeat
    background-size 100%
    max-height 6.1333333333rem
    overflow hidden
  .note-content
    margin-top 0.2666666667rem
    padding 0 0.2666666667rem
    max-height 1.28rem
    color #292929
    font-size 0.2933333333rem
    line-height 0.4266666667rem
    letter-spacing 0.0106666667rem
    display -webkit-box
    white-space normal
    word-break break-word
    overflow hidden
    text-overflow ellipsis
    -webkit-line-clamp 2
    -webkit-box-orient vertical
    word-wrap break-word
    word-break break-all
  .user-info
    margin-top 0.2666666667rem
    display -ms-flexbox
    display flex
    display -webkit-flex
    -ms-flex-flow row nowrap
    flex-flow row nowrap
    -webkit-flex-wrap nowrap
    -ms-flex-pack justify
    justify-content space-between
    -webkit-justify-content space-between
    -ms-flex-align start
    align-items flex-start
    -webkit-align-items flex-start
    .user-photo
      padding 0 0.2666666667rem
      display -ms-flexbox
      display flex
      display -webkit-flex
      -ms-flex-flow row nowrap
      flex-flow row nowrap
      -webkit-flex-wrap nowrap
      -ms-flex-pack start
      justify-content flex-start
      -webkit-justify-content flex-start
      -ms-flex-align start
      align-items flex-start
      -webkit-align-items flex-start
      .user-logo
        float left
        display block
        margin-top 0.1333333333rem
        margin-right 0.08rem
        width 0.5333333333rem
        -o-object-fit cover
        object-fit cover
        height 0.5333333333rem
        border-radius 50%
        border 0.0266666667rem solid #e6e6e6
      .user-name
        display inline-block
        width 1.6rem
        margin-left 0.08rem
        padding-top 0.2666666667rem
        color #666
        font-size 0.24rem
        display -webkit-box
        white-space normal
        word-break break-word
        overflow hidden
        text-overflow ellipsis
        -webkit-line-clamp 1
        -webkit-box-orient vertical
        word-wrap break-word
        word-break break-all
    .buttons
      display -ms-flexbox
      display flex
      -webkit-dispaly flex
      -ms-flex-align center
      align-items center
      vertical-align middle
      height 0.8rem
      margin-right 0.2666666667rem
      padding-top 0.0266666667rem
</style>