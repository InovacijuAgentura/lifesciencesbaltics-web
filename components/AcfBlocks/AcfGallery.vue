<template lang="pug">
div.gallery(:class="[padding_top, padding_bottom, layout_color]")
  div.container(:class="[container_size]")
    revealBlock(v-if="title" :delay="0")
      h1.titleH(v-if="title && use_h1_title" v-html="title")
      h2.titleH(v-else-if="title" v-html="title")
    .items(v-if="gallery && gallery.length && type === 'simple'")
      revealBlock(v-for="(item,index) in gallery" :key="index" :delay="index*0.1" )
        .img( @click="openGal(index)")
          wpImageSmall(:image="item.image" :width="634" :height="412"  :cover="true" alt="Image")
    div.swiper(v-else-if="gallery && gallery.length" ref="gallery")
      div.navigation
        div.prev(ref="prevgf")
          slider_prev
        .current {{current}}
        .total {{gallery.length}}
        div.next(ref="nextgf")
          slider_next
      div.swiper-wrapper
        .swiper-slide.item(v-for="(item, index) in gallery" :key="index" @click="openGal(index)")
          wpImageSmall(:image="item.imagebig" :cover="true" :height="849" :width="1305" alt="Image")
</template>

<script>

import wpImageSmall from '@/components/Elements/wpImageSmall.vue';
import revealBlock from '@/components/Elements/revealBlock.vue';
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css';
import { Navigation, Autoplay } from 'swiper/modules';
import slider_prev from '~/assets/svg/slider_prev.svg';
import slider_next from '~/assets/svg/slider_prev.svg';
export default {

  name: 'AcfGallery',
  props: ['title','use_h1_title', 'gallery','type','layout_color','padding_top', 'padding_bottom', 'container_size'],
  components: {
    wpImageSmall,
    revealBlock,
    slider_next,
    slider_prev
  },
  data() {
    return {
      current: 1

    };
  },
  computed: {
  },
  created() {
    this.Swiper = false;
  },
  mounted() {
    this.buildSwiper();
  },
  methods: {
    buildSwiper() {
        let that = this
        if (this.gallery && this.gallery.length && this.type == 'slider') {
            this.Swiper = new Swiper(this.$refs.gallery, {
                modules: [Navigation, Autoplay],
                loop: true,
                speed: 400,
                spaceBetween: 10,
                slidesPerView: 'auto',
                autoplay: {
                  delay: 5000,
                },
                navigation: {
                    nextEl: this.$refs.nextgf,
                    prevEl: this.$refs.prevgf,
                },
                breakpoints: {
                    769: {
                        spaceBetween: 20,
                    },
                }
            });

          this.Swiper.on('slideChange', function () {
            that.current = this.realIndex + 1
          });
        }
    },

    openGal(index) {
      this.$store.dispatch('PopUpImages/set', Object.freeze({images: Object.freeze(this.gallery.map(e => e.fullimage)), index}) );
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

.gallery {

  padding-top: 100px;
  padding-bottom: 100px;

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

.items {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px -20px;

  > * {
    cursor: pointer;
    width: calc(33.333% - 20px);
    margin: 0 10px 20px;
  }
}

.img {
  overflow: hidden;
  :deep() {
    img {
      transition: 0.3s all;
    }
  }

  &:hover {
    :deep() {
      img {
        transform: scale(1.1);
      }
    }
  }
}

.swiper {
  overflow: visible;
}
.navigation {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 30px;
  svg {
    stroke: #DA85B6;
  }
  .current {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 1px solid #000000;
  }
  .total {
    display: flex;
    align-items: center;
    margin-right: 25px;

    &:before {
      content: '';
      display: flex;
      height: 1px;
      background: #000000;
      width: 80px;
      margin: 0 10px;
    }
  }

  .prev {
    margin-right: 25px;
    cursor: pointer;
    display: flex;
  }

  .next {
    display: flex;
    cursor: pointer;
    svg {
      transform: rotate(180deg);
    }
  }
}

.item {
  width: 870px;
  overflow: hidden;
  height: auto;
  cursor: pointer;
  :deep() {
    img {
      max-height: 566px;
    }
  }
}

@media screen and (max-width: 991px) {
  .item {
    width: 560px;
  }
}

@media screen and (max-width: 768px) {
  .gallery {

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
  .items {
    margin: 0 -5px -10px;

    > * {
      width: calc(50% - 10px);
      margin: 0 5px 10px;
    }
  }
}

@media screen and (max-width: 620px) {
  .item {
    width: 400px;
  }
}
@media screen and (max-width: 480px) {
  .item {
    width: 320px;
  }
}
</style>
