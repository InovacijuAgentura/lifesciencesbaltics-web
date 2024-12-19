<template lang="pug">
div.image(:class="[padding_top, padding_bottom, layout_color, height]")
  .bg
  .img(v-if="image" :class="{odd:fixed_image}" v-bind:style="{ 'background-image': 'url(' + image + ')' }")
  div.container(:class="[container_size]")
    h1.titleH(v-if="title && use_h1_title" v-html="title")
    h2.titleH(v-else-if="title" v-html="title")
    Wyswyg(v-if="text" :html="text")
    .btnc(v-if="button")
      Button(:to="button.url" :href="button.url" :text="button.title" :target="button.target")
</template>

<script>
import Wyswyg from '@/components/Elements/Wyswyg.vue';
import Button from '@/components/Elements/Button.vue';

export default {

  name: 'AcfImage',
  props: ['title','use_h1_title','image','height', 'fixed_image','button', 'text','layout_color','padding_top', 'padding_bottom', 'container_size'],
  components: {
    Wyswyg,
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

.image {

  padding-top: 100px;
  padding-bottom: 100px;
  min-height: calc(100vh - 80px);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;

  &.h-half {
    min-height: 500px;
  }

  &.blue {
    .bg {
      background: #005C85;
      opacity: 0.8;
    }
  }

  &.pink {
    .bg {
      background: #DA85B6;
      opacity: 0.8;
    }
  }

  &.blur {
    .bg {

      backdrop-filter: blur(4px);
      background: rgba(0, 0, 0, 0.2);
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
  position: relative;
  z-index: 5;

  &.small {

    max-width: 940px;
  }
}

.html {
  font-size: 18px;
  line-height: 25px;
}
.img {
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &.odd {

  background-attachment: fixed;
  }

}

.btnc {
  margin-top: 20px;
}

.bg {

  position: absolute;
  z-index: 3;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

@media screen and (max-width: 768px) {
  .image {

    padding-top: 100px;
    padding-bottom: 100px;
    min-height: 350px;

    &.h-half {
      min-height: 350px;
    }


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

  .html {
    font-size: 16px;
    line-height: 22px;
  }
}
</style>
