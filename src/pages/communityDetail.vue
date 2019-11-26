<template>
  <div class="note-detail-content">
    <section class="pv-header">
      <!-- 标题 -->

      <!-- 用户 -->

      <section class="user-pannel">
        <!--头像-->
        <div
          class="user-photo"
          :style="{'backgroundImage': 'url('+Note.userlogo+')'}"
        ></div>
        <!--信息-->
        <div class="user-detail">
          <div class="user-name-level">
            <span class="user-name">{{Note.username}}</span>
            <span class="user-level user-level-l">
              V
              <i>2</i>
            </span>
          </div>
        </div>

        <!--关注-->
        <div class="user-focus" style="display: none;">
          <div
            class="btn-focus focused hide"
           
            style="display: none;"
          >
            <!-- <i class="icon icon-fcheck14x14"></i> -->
            <span class="focus-text">已关注</span>
          </div>

          <div
            class="btn-focus unfocused"
            style="display: none;"
          >
            <!-- <i class="icon icon-fadd14x14"></i> -->
            <span class="focus-text">关注</span>
          </div>
        </div>
      </section>
    </section>
    <section class="note-pannel" data-note-id="1001615742" data-note-type="1">
      <!--普通/视频文本-->
      <!--文本-->
      <div class="detail-text">
        <p>{{Note.info}}</p>
      </div>

      <!--图片区域(普通)-->

      <div class="new-pic-box" v-for="(pic,index) in Note.srcDetail" :key="index">
        <div class="img-wrapper">
          <img
            :src="pic.Pic"
            style="opacity: 1;"
          />
        </div>
      </div>
   
      <!--   -->
                
      <div class="pic-box" style="min-height:10rem; display: none" data-ready="1">
        <!-- 已经隐藏了,轮滑图的形式 代码上没有注释，放开display可查看 -->

        <div class="pic-main swiper-container swiper-container-horizontal no-bg">
          <div class="swiper-wrapper" style="transition-duration: 0ms; height: 1242px;">
            <div class="swiper-slide swiper-slide-active">
              <div class="img-wrapper">
                <img
                  class="swiperImg"
                  src="http://pic1.ymatou.com/G01/M00/87/95/CgzUCV3VW5SAJ0OFAAJOHZMhiA8018_3_4_w_o.jpg"
                  data-src="http://pic1.ymatou.com/G01/M00/87/95/CgzUCV3VW5SAJ0OFAAJOHZMhiA8018_3_4_w_t.jpg"
                  style="opacity: 1; height: 100%; width: auto;"
                  data-loaded="1"
                />
              </div>
            </div>

            <div class="swiper-slide swiper-slide-next">
              <div class="img-wrapper">
                <img
                  class="swiperImg"
                  src="http://pic1.ymatou.com/G01/M02/87/77/CgzUCF3VW5SAMqndAAKIE9l-JDs870_3_4_w_t.jpg"
                  data-src="http://pic1.ymatou.com/G01/M02/87/77/CgzUCF3VW5SAMqndAAKIE9l-JDs870_3_4_w_t.jpg"
                  style="opacity: 1; height: 100%; width: auto;"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          class="diagram-list swiper-container swiper-container-horizontal swiper-container-free-mode"
        >
          <ul class="swiper-wrapper" style="transition-duration: 0ms;">
            <li class="swiper-slide swiper-slide-active">
              <div
                class="img"
                style="background-image:url(http://pic1.ymatou.com/G01/M00/87/95/CgzUCV3VW5SAJ0OFAAJOHZMhiA8018_3_4_w_o.jpg)"
                data-img-index="0"
              ></div>
            </li>

            <li class="swiper-slide swiper-slide-next">
              <div
                class="img"
                style="background-image:url(http://pic1.ymatou.com/G01/M02/87/77/CgzUCF3VW5SAMqndAAKIE9l-JDs870_3_4_w_o.jpg)"
                data-img-index="1"
              ></div>
            </li>

            <div class="diagram-mask-wrapper">
              <div class="diagram-mask" style="left: 0%;"></div>
            </div>
          </ul>
        </div>
      </div>
    </section>
    <section class="involved-pannel" style="display: block;">
      <div class="invo-main">
        <!--买手信息-->
        <div
          class="seller-info" 
        >
          <div class="seller-photo"></div>
          <div class="seller-detail">
            <div class="seller-name">
              购自于洋码头买手:
              <span>优集馆海外专营店</span>
            </div>
          </div>
        </div>

        <!--商品信息-->
        <div
          class="goods-info"
         
        >
          <div class="goods-pic">
            <img
              class
              data-src="http://pic1.ymatou.com/G02/shangou/M09/39/D2/CgzUDF2NmxuARDkkAAY1itlSlJQ627_1_1_n_w_l.jpg"
              :src="noteProduct.Product.ProductPic"
              style="opacity: 1;"
            />
          </div>
          <div class="goods-detail">
            <div class="goods-name">{{noteProduct.Product.ProductDes}}</div>
            <div class="goods-price">
              <div class="price">
                <i>¥</i>
                {{noteProduct.Product.Price}}
              </div>
              <div class="involved-collect-btn collect-btn version-1" data-iscollect="false">
                <i class="like-icon-base like-icon-off"></i>收藏
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="publication">
      <div class="c-right">
          <span class="location"></span>
          <span class="date">2天前</span>
      </div>
    </div>
    <section
      class="discuss-pannel"
      id="discussPannel"
      data-discuss-text-unclick="1"
      data-user-photo-unclick="1"
      style="display: block;"
      >
      <!--评论标题-->
      <div class="discuss-title">
        <span class="title-text">评论</span>
        <!--  -->
      </div>

      <!--输入框-->

      <div class="input-box">
        <div class="user-photo-wrapper">
          <img class="user-photo" src="//img.ymatou.com/portal/images/user_02.png" alt />
        </div>
        <div
          class="input-button"
          action_type="click"
          module_name="gocomment"
          module_index="1"
          note_id="1001615742"
        >点赞是顺手，评论才是真爱</div>
      </div>

      <div class="input-mask">
        <div class="input-body">
          <!-- <textarea class= "input-comment" cols="4"></textarea>  -->
          <input class="input-comment" type="text" />
          <div class="sent-comment" type="button">发送</div>
        </div>
      </div>
    </section>
    <section class="related-goods-pannel" style="display: block;">
        <div class="rg-title">
            <span>相似商品</span>
        </div>
        <div class="rg-list">
            <div class="scroll-wrapper">
                <ul> 
                        <li class="product" v-for="(product) in similarProduct" :key="product.ProductId">
                            
                            <div class="product-pic-body">
                                <img class="product-pic " :src="product.ProductPic" style="opacity: 1;">
                            </div>
                            <div class="product-tip">
                                <p class="product-title">
                                   {{product.ProductDes}}
                                </p>
                                <span><em>¥</em>  {{product.Price}}</span>
                            </div>
                        </li>
                        
                        
                        
                </ul>

            </div>
        </div>
        </section>
  </div>
</template>

<script>
import Vue from "vue";
import {get} from '../utils/http'
export default Vue.extend({
  created(){
    console.log(this.$store.state.communityDetail.currentNote)
  },
  data(){
      return {
      noteProduct:{
        Product:{}
      },
      similarProduct:[]
      }
  },
  async mounted() {
    let result = await get({
      url:'/ajax/note/api/GetSellerInfoByNoteIdAsync',
      params:{
          NoteId: this.Note.NoteId,
          UserId: this.Note.userid,
          Channel: 3,
      }
    })
    this.noteProduct=result.data.Result
    console.log(this.noteProduct)
    
    let similarResult = await get({
      url:'/ajax/note/api/GetSimilarProductAndNoteAsync',
      params:{
        Page: 0,
        pageSize: 10,
        NoteId: this.Note.NoteId,
        Channel: 3,
        NoteType: 1,
      }
    })
      this.similarProduct = similarResult.data.Result.Products
      console.log(this.similarProduct)
  },
  computed:{
    Note(){
      return this.$store.state.communityDetail.currentNote
    }
  },
  methods:{
    handleDetail(){
      // this.$router.push(`/details/${this.item.id}`)
    }
  },
  components: {}
});
</script>

<style scoped lang="stylus">
.note-detail-content
  height 100%
  overflow auto
.pv-header
  background #ffffff
  padding-left 0.32rem
  padding-right 0.32rem
  .user-pannel
    height 1.6rem
    display -ms-flexbox
    display flex
    -ms-flex-flow row nowrap
    flex-flow row nowrap
    -ms-flex-pack start
    justify-content flex-start
    -ms-flex-align center
    align-items center
    .user-photo
      width 1.0666666667rem
      height 1.0666666667rem
      position relative
      border-radius 50%
      background-size cover
      background-repeat no-repeat
      background-position 50% 50%
      border 1px solid #e6e6e6
  .user-detail
    -ms-flex 1
    flex 1
    margin-left 0.2133333333rem
    .user-name
      font-size 0.3733333333rem
      color #383838
      margin-right 0.16rem
    .user-level-l
      font-size 0.32rem
      color #f28f25
      font-weight bold
.note-pannel
  background #ffffff
  padding-top 0.2666666667rem
  .detail-text
    margin 0 0.32rem 0
    font-size 0.4266666667rem
    p
      line-height 0.64rem
      letter-spacing 0.0266666667rem
      color #383838
      word-break break-word
      white-space pre-wrap
  .new-pic-box
    padding 0 0.32rem
    .img-wrapper
      margin-top 0.5333333333rem
      min-height 1.3333333333rem
      width 100%
      background url('https://m.ymatou.com/note/images/default-fb781a4e7d.png') center center no-repeat
      background-size contain
      img
        display block
        opacity 0
        width 100%
.involved-pannel
  background #ffffff
.invo-main
  border-radius 0.1066666667rem
  margin 0 0.4rem
  padding-bottom 0.1333333333rem
  .seller-info
    display -ms-flexbox
    display flex
    -ms-flex-flow row nowrap
    flex-flow row nowrap
    -ms-flex-pack start
    justify-content flex-start
    -ms-flex-align center
    align-items center
    padding-top 0.5333333333rem
    .seller-photo
      position relative
      width 0.2933333333rem
      height 0.3466666667rem
      background url('https://m.ymatou.com/note/images/buycar@2x-6b7ce1a3ef.png') center center no-repeat
      background-size auto 100%
    .seller-detail
      -ms-flex 1
      flex 1
      margin-left 0.16rem
      color #646464
      font-size 0.32rem
      line-height 0.4266666667rem
      span
        margin-left 0rem
        color #3cb5ff
  .goods-info
    display flex
    -ms-flex-flow row nowrap
    flex-flow row nowrap
    -ms-flex-pack start
    justify-content flex-start
    -ms-flex-align start
    align-items flex-start
    margin 0.2666666667rem 0 0
    background #fff
    box-shadow 0rem 0.0266666667rem 0.1866666667rem 0 #ccc
    .goods-pic
      width 2.9333333333rem
      height 2.9333333333rem
      background url('http://pic1.ymatou.com/G02/shangou/M09/39/D2/CgzUDF2NmxuARDkkAAY1itlSlJQ627_1_1_n_w_l.jpg') center center no-repeat
      background-size contain
      img
        width 100%
        height 100%
    .goods-detail
      flex 1
      padding 0.4266666667rem 0.32rem 0.48rem
      .goods-name
        font-size 0.3733333333rem
        font-weight 500
        line-height 0.56rem
        height 1.12rem
        color #383838
        white-space normal
        word-break break-word
        overflow hidden
        text-overflow ellipsis
        -webkit-line-clamp 2
        -webkit-box-orient vertical
        word-wrap break-word
        word-break break-all
      .goods-price
        margin-top 0.48rem
        display flex
        flex-flow row nowrap
        justify-content space-between
        align-items flex-start
        width 100%
        font-size 0.32rem
        font-weight 500
        color #646464
        line-height 0.4rem
        .price
          -ms-flex 1
          flex 1
          font-size 0.4266666667rem
          color #c33
        .involved-collect-btn
          position relative
          .like-icon-base
            width 0.4266666667rem
            height 0.3733333333rem
            position relative
            right 0.1066666667rem
            top -0.0266666667rem
            background-image: url('https://m.ymatou.com/note/images/discovery/like-01-off-d98cae44dd.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: 0 0;
            display: inline-block;
            vertical-align: middle;
            width: .3466666667rem;
            height: .3466666667rem;
            margin-right: .0533333333rem;
.publication  
  background: #fff;
  padding: .32rem .32rem .32rem;
  color: #9b9b9b;
  font-size: 10px;
  .c-right 
    text-align: right;
.discuss-pannel 
    margin-top: .2666666667rem;
    background: #ffffff;
    .discuss-title  
      height: 1.12rem;
      line-height: 1.12rem;
      font-size: .4266666667rem;
      font-weight: 600;
      letter-spacing: .016rem;
      color: #292929;
      position: relative;
      border-bottom: 1px solid #eee;
      margin-left: .32rem;
    .input-box 
      display: flex;  
      align-items: center;
      padding: .48rem .32rem .4266666667rem;
      border-bottom: 1px solid #eee;
      .user-photo-wrapper  
        position: relative;
        width: .8rem;
        height: .8rem;
        margin-right: .2133333333rem;
        .user-photo  
          width: 100%;
          height: 100%;
          -o-object-fit: cover;
          object-fit: cover;
          border: .0266666667rem solid #e6e6e6;
          border-radius: 50%;
      .input-button 
        color: #9b9b9b;
        width: 8.3466666667rem;
        height: 1.0666666667rem;
        line-height: 1.0666666667rem;
        padding: 0 .2133333333rem;
        background: #f8f8f8;
        border-radius: .08rem;
    .input-mask   
      display none
      width: 100vw;
      height: 100vh;
      position: fixed;
      bottom: 0;
      background-color: RGBA(0, 0, 0, 0.3);
      z-index: 1;
.related-goods-pannel  
    background: #ffffff;
    margin-top: .2666666667rem;
    .rg-title 
      height: 1.12rem;
      line-height: 1.12rem;
      font-size: .4266666667rem;
      font-weight: 600;
      letter-spacing: .016rem;
      color: #383838;
      position: relative;
      span  
         padding-left: .2666666667rem;
    .rg-list  
      padding-bottom: .3733333333rem;
      overflow: hidden;
      .scroll-wrapper  
        overflow-x: auto;
        overflow-y: hidden;
        ul  
          width: 100%;
          white-space: nowrap;
          font-size: 0;
          .product  
            position: relative;
            display: inline-block;
            margin-left: .1333333333rem;
            width: 3.4933333333rem;
            vertical-align: top;
            &:nth-child(1)
              margin-left: .2666666667rem;
            &:last-child
              margin-right: .2666666667rem;
            .product-pic-body 
              width: 3.4933333333rem;
              height: 3.4933333333rem;
              background: url( 'https://m.ymatou.com/note/images/default-fb781a4e7d.png') center center no-repeat;
              background-size: contain;
              overflow: hidden;
              .product-pic 
                width: 3.4933333333rem;
            .product-tip  
              text-align: left;
              .product-title  
                font-size: .32rem;
                color: #383838;
                line-height: .48rem;
                display: -webkit-box;
                white-space: normal;
                word-break: break-word;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                word-wrap: break-word;
                word-break: break-all;
                margin: .16rem 0 .2133333333rem;
              span  
                display: block;
                font-size: .3733333333rem;
                height: .3733333333rem;
                line-height: .3733333333rem;
                color: #c33;
                em  
                  font-size: .3733333333rem;
</style>