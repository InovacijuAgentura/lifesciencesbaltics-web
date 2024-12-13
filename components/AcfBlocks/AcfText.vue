<template lang="pug">
div.text(:class="[padding_top, padding_bottom, layout_color, {center:centered}]")
  .videowrap(v-if="video && background_type === 'video'")
    video(preload="metadata" width="100%" autoplay muted loop)
      source(:src="video.url" :type="video.mime_type")
  .bgimg(v-if="background_image && background_type === 'image'")
    wpImageSmall(:image="background_image" :cover="true" :width="1920")
  div.container(v-if="title || text" :class="[container_size]")
    .grid(:class="{on:title_grid_left}")
      .twrap(v-if="title")
        h1.titleH(v-if="title && use_h1_title" v-html="title")
        h2.titleH(v-else-if="title" v-html="title")
      .content(v-if="text" )
        Wyswyg(:html="text")
</template>

<script>
import Wyswyg from '@/components/Elements/Wyswyg.vue';
import wpImageSmall from '@/components/Elements/wpImageSmall.vue';

export default {

  name: 'AcfText',
  props: ['title','use_h1_title','centered','video','background_image','background_type','title_grid_left', 'text','layout_color','padding_top', 'padding_bottom', 'container_size'],
  components: {
    Wyswyg,
    wpImageSmall
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

.text {

  padding-top: 100px;
  padding-bottom: 100px;
  position: relative;
  
  &.pink {
    background: #DA85B6;
    color: #fff;
    .videowrap {
      &:before {
        background: #DA85B6;
      }
    }
    .bgimg {
      &:before {
        background: #DA85B6;
      }
    }
  }

  &.blue {
    background: #005C85;
    color: #fff;
    .videowrap {
      &:before {
        background: #005C85;
      }
    }
    .bgimg {
      &:before {
        background: #005C85;
      }
    }
  }

  &.center {
    text-align: center;
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
  position: relative;
  z-index: 5;
  &.small {

    max-width: 940px;
  }
}

.bgimg {

  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
  right: 0;

  &:before {
    content: '';
    position: absolute;
    z-index: 3;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    opacity: 0.7;
  }
}
.videowrap {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
  right: 0;

  &:before {
    content: '';
    position: absolute;
    z-index: 3;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    opacity: 0.7;
  }
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
.grid {
  &.on {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -20px;

    > * {
      width: calc(50% - 40px);
      margin: 0 20px;
    }
    .titleH {
      max-width: 550px;
    }

    .content {
      max-width: 550px;
      margin: 0 auto;
    }
  }
}

@media screen and (max-width: 768px) {
  .text {

    padding-top: 50px;
    padding-bottom: 50px;

    &.center {
      text-align: left;
    }

    &.pt-big {

      padding-top: 100px;
    } 

    &.pt-bigr {

      padding-top: 100px;
    } 

    &.pt-small {

      padding-top: 20px;
    } 
    
    &.pb-small {

      padding-bottom: 20px;
    }
  }
  .grid {
    &.on {
      margin: 0;

      > * {
        width: 100%;
        margin: 0;
      }
      .titleH {
        max-width: none;
      }

      .content {
        max-width: none;
      }
    }
  }
}
</style>
