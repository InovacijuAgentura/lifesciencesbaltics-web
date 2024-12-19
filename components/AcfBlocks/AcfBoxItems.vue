<template lang="pug">
div.items(:class="[padding_top, padding_bottom, layout_color]")
  div.container(:class="[container_size]")
    revealBlock(v-if="title" :delay="0")
      h1.titleH(v-if="title && use_h1_title" v-html="title")
      h2.titleH(v-else-if="title" v-html="title")
    .grid(v-if="items && items.length")
      revealBlock(v-for="(item,index) in items" :key="index"  :delay="index*0.1" )
        .item
          NuxtLinkOrA(v-if="item.link" :url="item.link.url" :target="item.link.target")
          .img(v-if="item.image")
            wpImageSmall(:image="item.image" :width="844" :height="400" :cover="true" alt="Image")
          h3.t(v-if="item.title" v-html="item.title")
</template>

<script>

import revealBlock from '@/components/Elements/revealBlock.vue';
import NuxtLinkOrA from '@/components/Elements/NuxtLinkOrA.vue';
import wpImageSmall from '@/components/Elements/wpImageSmall.vue';
export default {

  name: 'AcfBoxItems',
  props: ['title','use_h1_title','items','layout_color','padding_top', 'padding_bottom', 'container_size'],
  components: {
    wpImageSmall,
    NuxtLinkOrA,
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

.items {

  padding-top: 100px;
  padding-bottom: 100px;
  &.pink {
    background: #DA85B6;
    .titleH {
      color: #fff;
    }

    .item {
      &:hover {
       background: #005C85;
      }
    }
  }

  &.blue {
    background: #005C85;
    .titleH {
      color: #fff;
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
  margin: 0 -10px -20px;

  > * {
    width: calc(33.333% - 20px);
    margin: 0 10px 20px;
  }
  :deep() {
    .c {
      height: 100%;
    }
  }
}

.item {
  background: #fff;
  position: relative;
  height: 100%;
  transition: 0.3s all;

  a {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .img {
    overflow: hidden;
    height: 200px;
    :deep() {
      img {
        transition: 0.3s all;
      }
    }
  }

  &:hover {
    background: #DA85B6;
    .t {
      color: #fff;
    }
    :deep() {
      img {
        transform: scale(1.1);
      }
    }
  }

  .t {
    padding: 30px 30px 40px;
    text-transform: uppercase;
    margin-bottom: 0;
    transition: 0.3s all;
  }
}

@media screen and (max-width: 991px) {
  .grid {

    > * {
      width: calc(50% - 20px);
    }
  }
}

@media screen and (max-width: 768px) {
  .items {

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

  .item {
    .t {
      padding: 25px 20px;
      font-size: 16px;
      line-height: 16px;
    }
  }

}

@media screen and (max-width: 568px) {
  .grid {
    margin: 0;

    > * {
      width: 100%;
      margin: 0;

      + * {
        margin-top: 10px;
      }
    }
  }
}
</style>
