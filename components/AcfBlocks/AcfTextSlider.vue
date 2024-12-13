<template lang="pug">
div.text(:class="[padding_top, padding_bottom, layout_color]")
  div.container(:class="[container_size]")
    .grid(:class="{odd:image_on_left}")
      .left
        .wrp
          h1.titleH(v-if="title && use_h1_title" v-html="title")
          h2.titleH(v-else-if="title" v-html="title")
          div.swiper(v-if="items && items.length"  @swiperslidechange="onSlide" ref="textslider")
            div.swiper-wrapper
              .swiper-slide.item(v-for="(item, index) in items" :key="index" v-if="item.text")
                Wyswyg(:html="item.text")
            .foot
              .number {{realNumber}}
              div.navigation
                div.prev(ref="prevtext")
                  slider_prev
                div.next(ref="nexttext")
                  slider_next
      .right(v-if="image || video")
        .img(v-if="image && use_image")
          wpImageSmall(:image="image" :width="1026" :height="1115"  :cover="true")
        .video(v-if="video && !use_image")
          video(preload="metadata" width="100%" autoplay muted loop)
            source(:src="video.url" :type="video.mime_type")
</template>

<script>



import Swiper from 'swiper'
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import Wyswyg from '@/components/Elements/Wyswyg.vue';
import wpImageSmall from '@/components/Elements/wpImageSmall.vue';
import slider_next from '~/assets/svg/slider_next.svg';
import slider_prev from '~/assets/svg/slider_prev.svg';

export default {

  name: 'AcfTextSlider',
  props: ['title','use_h1_title', 'items','use_image','video','image','image_on_left','layout_color','padding_top', 'padding_bottom', 'container_size'],
  components: {
    Wyswyg,
    wpImageSmall,
    slider_next,
    slider_prev,
  },
  data() {
    return {
      number: 1
    };
  },
  computed: {
    realNumber() {
      let number = this.number
      if(number.toString().length > 1) {
        return number
      }
      return '0'+number
    }
  },
  created() {
    this.Swiper = false;
  },
  mounted() {
    this.buildSwiper();
  },
  methods: {
    onSlide(swiper) {
      this.number = swiper.realIndex + 1
    },
    buildSwiper() {
      let that = this
      if(this.items && this.items.length) {
        this.Swiper = new Swiper(this.$refs.textslider, {
            modules: [Navigation, Autoplay],
            loop: true,
            speed: 400,
            spaceBetween: 0,
            slidesPerView: 1,
            autoplay: {
              delay: 5000,
            },
            navigation: {
                nextEl: this.$refs.nexttext,
                prevEl: this.$refs.prevtext,
            },
        });
        this.Swiper.on('slideChange', function () {
          that.onSlide(this)
        });
      }
            
    },
    destroySwiper() {
      if (this.Swiper) {
        this.Swiper.destroy(true, true);
      }
    },
  },
  beforeDestroy() {
    this.destroySwiper();
  },
};
</script>

<style scoped lang="scss">

.navigation {
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  > * {
    cursor: pointer;
  }
  .next {

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;
    border: 1px solid #fff;
    border-radius: 50%;
  }
  .prev {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    margin-right: 25px;
  }
}

.foot {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 20px;
}

.text {

  padding-top: 100px;
  padding-bottom: 100px;
  position: relative;

  &.pink {
    background: #DA85B6;
    color: #fff;
  }

  &.blue {
    background: #005C85;
    color: #fff;

    .number {
      color: #DA85B6;
    }

    .next {
      svg {
        stroke: #DA85B6
      }
    }
  }

  &.pt-big {

    padding-top: 160px;
  } 

  &.pt-small {

    padding-top: 40px;
  } 
  
  &.pb-small {

    padding-bottom: 40px;
  }

  &.pt-none {

    padding-top: 0;
  } 
  
  &.pb-none {

    padding-bottom: 0;
  }
}

.container {

  &.small {

    max-width: 940px;
  }
}
.grid {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -30px;

  > * {
    width: calc(50% - 60px);
    margin: 0 30px;
  }

  &.odd {
    .left {
      order: 2;
    }

    .right {
      order: 1;
    }

    .img,
    .video {
      left: 0;
      right: 50%;
    }
  }
}
.video {

  video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
.swiper {
  overflow: visible;
}
.number {
  font-size: 200px;
  line-height: 200px;
  font-weight: 700;
  font-family: 'MyriadPro';
  margin-bottom: -46px;
}


.img,
.video {
  position: absolute;
  z-index: 2;
  left: 50%;
  right: 0;
  top: 0;
  bottom: 0;
}

.item {
  min-height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;

  .html {
    max-width: 326px;
    width: 100%;
    font-size: 26px;
    line-height: 26px;
    font-family: 'MyriadPro';
  }
}

@media screen and (max-width: 991px) {
  .number {
    font-size: 125px;
    line-height: 125px;
    margin-bottom: -28px;
  }
}

@media screen and (max-width: 768px) {
  
  .text {

    padding-top: 50px;
    padding-bottom: 50px;

    &.pt-big {

      padding-top: 100px;
    } 

    &.pt-small {

      padding-top: 20px;
    } 
    
    &.pb-small {

      padding-bottom: 20px;
    }
  }
  .titleH {
    margin-bottom: 30px;
  }
  .foot {
    margin-top: 40px;
  }

  .item {
    min-height: auto;
    justify-content: flex-start;
    align-items: flex-start;

    .html {
      font-size: 16px;
      line-height: 24px;
      font-family: 'Inter';
    }
  }

  .grid {
    margin: 0;
    > * {
      width: 100%;
      margin: 0;
    }

    &.odd {
      .left {
        order: 1;
      }

      .right {
        order: 2;
      }

      .img,
      .video {
        left: -20px;
        right: 0;
      }
    }
  }

  .navigation {
    .next {
      height: 82px;
      width: 82px;
    }

    .prev {
      margin-right: 0;
    }
  }

  .right {
    margin-bottom: -20px;
    margin-top: 30px;
  }
  .img {
    position: relative;
    left: -20px;
    width: calc(100% + 40px);
    max-height: 450px;
    height: 100%;
  }
  .video {

    position: relative;
    left: -20px;
    width: calc(100% + 40px);
    height: 450px;
  }
}
</style>
