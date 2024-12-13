<template lang="pug">
div.text(:class="[padding_top, padding_bottom, layout_color]")
  div.container(:class="[container_size]")
    .grid(:class="{odd:image_on_left}")
      .left
        .img(v-if="image")
          wpImageSmall(:image="image" :width="825" :height="900"  :cover="true")
      .right
        .wrp
          h1.titleH(v-if="title && use_h1_title" v-html="title")
          h2.titleH(v-else-if="title" v-html="title")
          Wyswyg(v-if="text" :html="text")
          Countdown(v-if="end_time" :endDate="end_time")
          .btnc(v-if="button")
            Button(:to="button.url" :href="button.url" :text="button.title" :target="button.target")
</template>

<script>
import Wyswyg from '@/components/Elements/Wyswyg.vue';
import Countdown from '@/components/Elements/Countdown.vue';
import wpImageSmall from '@/components/Elements/wpImageSmall.vue';
import Button from '@/components/Elements/Button.vue';

export default {

  name: 'AcfTimeCountdown',
  props: ['title','use_h1_title', 'end_time','image_on_left','button','image','text','layout_color','padding_top', 'padding_bottom', 'container_size'],
  components: {
    Wyswyg,
    Countdown,
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

.btnc {
  margin-top: 30px;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;

  > * {
    width: calc(50% - 40px);
    margin: 0 20px;
    display: flex;
    align-items: center;
    height: auto;
  }

  .left {
    order: 2;
  }

  &.odd {
    .left {
      order: 1;
    }

    .right {
      order: 2;
    }
  }
}
.img {

  max-width: 550px;
  margin: 0 auto;
  height: 100%;
}
.wrp {
  max-width: 550px;
  margin: 0 auto;
}

.html {
  font-size: 18px;
  line-height: 25px;
}

.countdown {

  &:not(:first-child) {
    margin-top: 50px;
    padding-top: 40px;
    border-top: 1px solid #8E9EA7;
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
  .img {

    max-width: none;
  }
  .wrp {
    max-width: none;
  }

  .html {
    font-size: 16px;
    line-height: 22px;
  }
  .countdown {

    &:not(:first-child) {
      margin-top: 30px;
      padding-top: 30px;
    }
  }
  .grid {
    margin: 0;
    > * {
      width: 100%;
      margin: 0;
    }

    .left {
      margin-top: 30px;
    }

    &.odd {
      .left {
        margin-top: 0;
      }
      > * {
       
        + * {
          margin-top: 30px;
        }
      }
    }
  }
}
</style>
