<template lang="pug">
div.text(:class="[padding_top, padding_bottom, layout_color]")
  div.container(:class="[container_size]")
    .grid(:class="{odd:image_on_left}")
      .left
        .wrp
          h1.titleH(v-if="title && use_h1_title" v-html="title")
          h2.titleH(v-else-if="title" v-html="title")
          Wyswyg(v-if="text" :html="text")
          .btnc(v-if="button")
            Button(v-if="layout_color === 'pink'" :to="button.url" :href="button.url" :text="button.title" :target="button.target" color="whitetrans")
            Button(v-else :to="button.url" :href="button.url" :text="button.title" :target="button.target")
      .right
        .img(v-if="image")
          wpImageSmall(:image="image" :width="825" :height="900"  :cover="true" alt="Image")
</template>

<script>
import Wyswyg from '@/components/Elements/Wyswyg.vue';
import wpImageSmall from '@/components/Elements/wpImageSmall.vue';
import Button from '@/components/Elements/Button.vue';

export default {

  name: 'AcfTextImage',
  props: ['title','use_h1_title', 'image','text','button','image_on_left','layout_color','padding_top', 'padding_bottom', 'container_size'],
  components: {
    Wyswyg,
    wpImageSmall,
    Button
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
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  &.pink {
    background: #DA85B6;
    color: #fff;
  }

  &.blue {
    background: #005C85;
    color: #fff;
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

    .img {
      left: 0;
      right: 50%;
    }

    .wrp {
      margin: 0 auto;
    }
  }
}

.html {
  font-size: 18px;
  line-height: 25px;
}
.img {
  position: absolute;
  z-index: 2;
  left: 50%;
  right: 0;
  top: 0;
  bottom: 0;
}
.btnc {
  margin-top: 20px;
}

.wrp {
  max-width: 550px;
}


@media screen and (max-width: 768px) {
  .text {

    padding-top: 50px;
    padding-bottom: 0;

    &.pt-big {

      padding-top: 100px;
    } 

    &.pt-small {

      padding-top: 20px;
    } 
    
    &.pb-small {

      padding-bottom: 0;
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

      .img {
        left: -20px;
        right: 0;
      }
    }
  }
  .html {
    font-size: 16px;
    line-height: 22px;
  }
  .left {
    padding-bottom: 70px;
  }
  .img {
    position: relative;
    left: -20px;
    width: calc(100% + 40px);
    max-height: 450px;
    height: 100%;
  }
}
</style>
