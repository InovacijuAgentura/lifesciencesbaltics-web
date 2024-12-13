<template lang="pug">
div.partners(:class="[padding_top, padding_bottom, layout_color]")
  div.container(:class="[container_size]")
    revealBlock(:delay="0")
      h1.titleH(v-if="title && use_h1_title" v-html="title")
      h2.titleH(v-else-if="title" v-html="title")
    .items(v-if="partners && partners.length")
      revealBlock.item(v-for="(item,index) in partners" :key="item.id" v-if="item.image" :delay="index*0.1")
          a(v-if="item.website" :href="item.website" target="_blank")
          .img
            wpImageSmall(:image="item.image[0]" :width="item.image[1]" :height="item.image[2]")
</template>

<script>

import wpImageSmall from '@/components/Elements/wpImageSmall.vue';
import revealBlock from '@/components/Elements/revealBlock.vue';
export default {

  name: 'AcfPartners',
  props: ['title','use_h1_title','layout_color', 'partners','padding_top', 'padding_bottom', 'container_size'],
  components: {
    wpImageSmall,
    revealBlock
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

.partners {

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

.titleH {
  text-align: center;
  margin-bottom: 50px;
}

.items {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px -20px;

  > * {
    width: calc(25% - 20px);
    margin: 0 10px 20px;
  }
}

.item {
  position: relative;
  :deep() {
    .c {
      padding-bottom: 100%;
    }
  }
  a {
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
  }

  .img {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    background: #fff;

  }
}
@media screen and (max-width: 768px) {
  .partners {

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
    text-align: left;
    margin-bottom: 30px;
  }
  .items {

    margin: 0 -5px -10px;
    > * {
      width: calc(33.333% - 10px);
      margin: 0 5px 10px;
    }
  }
}

@media screen and (max-width: 480px) {

  .items {

    > * {
      width: calc(50% - 10px);
    }
  }
}
</style>
