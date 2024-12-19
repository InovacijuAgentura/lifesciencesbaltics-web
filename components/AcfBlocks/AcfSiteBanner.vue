<template lang="pug">
div.banner(:class="[layout_color]")
  div.full-container
    .grid(:class="{odd:content_on_right}")
      .main
        revealText(v-if="title")
          h1.titleH(v-if="title && use_h1_title" v-html="title")
          h2.titleH(v-else-if="title" v-html="title")
        revealBlock(type="slidein")
          .bb
        .info(v-if="text_left || text_right")
          revealBlock(v-if="text_left")
            div( v-html="text_left")
          revealBlock(v-if="text_right" :delay="0.8")
            div( v-html="text_right")
        .numbers(v-if="number_left || number_right")
          revealBlock(v-if="number_left" :delay="0.2") {{number_left}}
          revealBlock(v-if="number_right && number_left" :delay="0.4") -
          revealBlock(v-if="number_right" :delay="0.6") {{number_right}}

      .right(v-if="image || video_file")
        wpImageFull(v-if="image && !use_video" :image="image" :cover="true" :width="1368" alt="Image")
        .video(v-else-if="video_file && use_video")
          video(preload="metadata" autoplay muted loop)
            source(:src="video_file.url" :type="video_file.mime_type")
</template>

<script>

import wpImageFull from '@/components/Elements/wpImageFull.vue';
import revealBlock from '@/components/Elements/revealBlock.vue';
import revealText from '@/components/Elements/revealText.vue';
export default {

  name: 'AcfSiteBanner',
  props: ['title','use_h1_title','layout_color', 'text_left', 'text_right','number_left','number_right','content_on_right','use_video','video_file','image'],
  components: {
    wpImageFull,
    revealBlock,
    revealText
  },
  data() {
    return {

    };
  },
  computed: {
  },
  created() {
  },
  methods: {

  },
};
</script>

<style scoped lang="scss">

.banner {

  padding-top: 160px;
  padding-bottom: 50px;
  min-height: calc(100vh - 115px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: #005C85;
  position: relative;

  .trans & {
    min-height: 100vh;
  }

  &.pink {

    background: #DA85B6;
    .numbers {
      color: #fff;
    }

    .bb {
      border-color: #fff;
    }
  }
}

.grid {
  display: flex;
  flex-wrap: wrap;
  > * {
    width: 50%;
  }

  &.odd {
    justify-content: flex-end;

    .main {
      padding-left: 28px;
      padding-right: 0;
    }

    .right {
      left: 0;
      right: auto;
    }
  }
}
.video {
  width: 100%;
    height: 100%;
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

.main {
  padding-right: 28px;
  color: #fff;

  .titleH {
    max-width: 536px;
    margin-bottom: 0;
  }
  .bb {
    border-top: 1px solid #B2D6F4;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .info {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
  }

  .numbers {

    display: flex;
    justify-content: space-between;
    font-size: 255px;
    line-height: 255px;
    font-weight: 700;
    color: #DA85B6;
    font-family: 'MyriadPro'; 
  }
}

.right {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 5;
}

@media screen and (max-width: 1380px) {

  .main {
    .numbers {
      font-size: 200px;
      line-height: 200px;
    }
  }
}

@media screen and (max-width: 1100px) {

  .main {
    .numbers {
      font-size: 145px;
      line-height: 145px;
    }
  }
}
@media screen and (max-width: 991px) {

  .main {
    .numbers {
      font-size: 135px;
      line-height: 135px;
    }
  }
}

@media screen and (max-width: 768px) {
  .grid {
    > * {
      width: 100%;
    }

    &.odd {
      .main {
        padding-left: 0;
      }
    }
  }

  .banner {
    min-height: auto;

    .trans & {

      min-height: auto;
    }
  }

  .main {
    padding-right: 0;
    .bb {
      margin-top: 16px;
      margin-bottom: 16px;
    }
  }

  .right {
    position: relative;
    height: 450px;
    margin: 0 -20px -50px;
    top: auto;
    width: calc(100% + 40px);
  }
}

@media screen and (max-width: 568px) {
  .right {
    height: 350px;
  }
}

@media screen and (max-width: 480px) {
  .main {
    .info {
      font-size: 12px;
      line-height: 18px;
    }

    .numbers {
      font-size: 125px;
      line-height: 125px;
    }
  }
}
</style>
