<template lang="pug">
div.links(:class="[padding_top, padding_bottom, layout_color]")
  div.container(:class="[container_size]")
    revealBlock(v-if="title" type="slidein" :delay="0")
      h1.titleH(v-if="title && use_h1_title" v-html="title")
      h2.titleH(v-else-if="title" v-html="title")
    .grid(v-if="links && links.length")
      revealBlock(v-for="(item,index) in links" :key="index" :delay="index*0.1" type="slidein")
        NuxtLinkOrA.item(:url="item.link.url" :target="item.link.target" :key="index") 
          h3.t {{item.link.title}}
          .more(v-if="item.read_more_text" v-html="item.read_more_text")
    revealBlock.btnc(v-if="button" type="slidein")
      Button(:to="button.url" :href="button.url" :text="button.title" :target="button.target")
</template>

<script>
import Button from '@/components/Elements/Button.vue';
import NuxtLinkOrA from '@/components/Elements/NuxtLinkOrA.vue';
import revealBlock from '@/components/Elements/revealBlock.vue';


export default {

  name: 'AcfLinks',
  props: ['title','use_h1_title','button','links','layout_color','padding_top', 'padding_bottom', 'container_size'],
  components: {
    Button,
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

.links {

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
  margin: 0 -25px -50px;

  > * {
    width: calc(50% - 50px);
    margin: 0 25px 50px;
  }
  .reveal {
    :deep() {
      .c {
        height: 100%;
      }
    }
  }
}

.item {
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #8E9EA7;
  text-transform: uppercase;
  align-items: flex-start;
  padding-bottom: 15px;
  height: 100%;
  .t {
    margin-bottom: 0;
    margin-right: 15px;
  }

  .more {
    color: #DA85B6;
    font-family: 'MyriadPro'; 
    margin-top: 4px;
  }
}
@media screen and (max-width: 768px) {
  .links {

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
    padding: 15px 0;
    align-items: flex-end;

    .t {
      width: calc(100% - 60px);
      margin-right: 0;
    }
    .more {
      width: 60px;
      text-align: right;
      font-size: 12px;
      margin-top: 0;
      line-height: 16px;
    }
  }
  .grid {
    margin: 0;

    > * {
      width: 100%;
      margin: 0;

      &:first-child {
        .item {

          border-top: 1px solid #8E9EA7;
        }
      }
    }
  }
}
</style>
