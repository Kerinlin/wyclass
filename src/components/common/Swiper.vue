<template>
  <swiper :options="swiperOption" id="pa" ref="mySwiper" class="swipper-wrapper">
    <swiper-slide v-if="listImg.length>0" v-for="(item,index) in listImg" :key='index' class="swiper-item">
      <router-link to="/detail"><img class="image" :src="item.imgUrl"></router-link>  
      <span class="tag">{{item.tag}}</span>
      <p class="title">{{item.title}}</p>
    </swiper-slide>
    <div class="swiper-pagination" id="pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  props: ["listImg"],
  data() {
    return {
      swiperOption: {
        pagination: {
          el:'.swiper-pagination',
          type:'bullets',
        },
        type: 'bullets',
        notNextTick: true,
        autoplay:{
          autoplay:true,
          delay:2000,
          disableOnInteraction:true
        },    
        grabCursor: true,
        setWrapperSize: true,
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        loop: true,
        on: {
          // 使用es6的箭头函数，使this指向vue对象
          click: () => {
            // 通过$refs获取对应的swiper对象
            let swiper = this.$refs.mySwiper.swiper;
            let i = swiper.activeIndex;
            console.log(i);   
            let flag = this.listImg[i];
            location.href = flag.url;
          }
        }
      }
    };
  }
};
</script>
<style lang="stylus">
@import '../../common/stylus/mixin.styl'
@import 'swiper/dist/css/swiper.min.css'
  .swiper-wrapper
    // position relative
    width 100%
    .swiper-item
      position relative
      wh(100%,20vh)
      .image
        wh(100%,100%)
      .tag
        display inline-block
        position absolute
        top 50%
        left .8rem
        background-color #286a46
        padding .3rem
        fsc(12px,#fff)
        border-radius 12%
        font-weight lighter
      .title
        position absolute
        left 0.8rem
        top 58%
        fsc(15px,#ffffff)
        font-weight 600
/*   #pa >>> .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color:#000;
    opacity: 1;
    background: rgba(0,0,0,0.2);
  }
  #pa >>> .swiper-pagination-bullet-active {
    color:#fff;
    background: #ff51d6;
  }
 */


         

      



</style>
