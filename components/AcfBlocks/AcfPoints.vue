<template lang="pug">
div.points(:class="[padding_top, padding_bottom, layout_color]")
  div.container(:class="[container_size]")
    revealBlock(v-if="title" type="slidein")
      h1.titleH(v-if="title && use_h1_title" v-html="title")
      h2.titleH(v-else-if="title" v-html="title")
    .items(v-if="items && items.length")
      revealBlock(v-for="(item,index) in items" :key="index"  :delay="index*0.1" type="slidein" )
        .item
          .number(v-if="item.number" v-html="item.number")
          h3.t(v-if="item.title" v-html="item.title")
</template>

<script>

import revealBlock from '@/components/Elements/revealBlock.vue';
export default {

  name: 'AcfPoints',
  props: ['title','use_h1_title', 'items','layout_color','padding_top', 'padding_bottom', 'container_size'],
  components: {
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

.points {

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
  max-width: 1000px;
  margin: 0 auto 60px;
}
.items {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 -60px -60px;
  :deep() {
    .c {
      height: 100%;
    }
  }

  > * {
    width: 25%;
    margin-bottom: 60px;
    .item {

      border-right: 1px solid #8E9EA7;
      padding: 32px 60px;
    }
    &:nth-child(4n) {
      .item {

        border-color: transparent;
      }
    }

    &:last-child {
      .item {

        border-color: transparent;
      }
    }
  }
}

.item {
  text-align: center;
  height: 100%;
  .t {
    margin-bottom: 0;
    text-transform: uppercase;
  }

  .number {
    font-size: 200px;
    line-height: 200px;
    font-weight: 700;
    font-family: 'MyriadPro';
    color: #DA85B6;
    margin-bottom: -20px;
  }
}
@media screen and (max-width: 1200px) {
  .items {
    margin: 0 -30px -60px;

    > * {
      .item {
        padding: 30px;
      }
    }
  }

  .item {
    .number {
      font-size: 150px;
      line-height: 150px;
    }
  }
}
@media screen and (max-width: 991px) {
  .items {
    margin: 0 -20px -30px;

    > * {
      margin-bottom: 30px;
      .item {

        padding: 20px;
      }
    }
  }
  .item {
    .number {
      font-size: 100px;
      line-height: 100px;
      margin-bottom: 0;
    }

    .t {
      font-size: 20px;
      line-height: 20px;
    }
  }
}
@media screen and (max-width: 768px) {
  .points {

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
    text-align: left;
  }

  .items {
    margin: 0;
    > * {
      width: 100%;
      margin: 0;
      .item {

        border-right: none;
        border-bottom: 1px solid #8E9EA7;
        padding: 0 0 20px;
      }

      + * {
        margin-top: 20px;
        margin-bottom: 0;
      }
      &:last-child {
        .item {

        border-bottom: none;
        }
      }
    }
  }

  .item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: left;

    .number {
      width: 70px;
      margin-right: 20px;
      font-size: 60px;
      line-height: 52px;
    }

    .t {
      width: calc(100% - 90px);
      font-size: 16px;
      line-height: 16px;
    }
  }
}
</style>
