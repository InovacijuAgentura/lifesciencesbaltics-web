<template lang="pug">
div.text(:class="[padding_top, padding_bottom, layout_color]")
  div.container(:class="[container_size]")
    h1.titleH(v-if="title && use_h1_title" v-html="title")
    h2.titleH(v-else-if="title" v-html="title")
    .grid(v-if="texts && texts.length")
      .item(v-for="(item,index) in texts" :key="index" v-if="item.text" )
        Wyswyg(:html="item.text")
</template>

<script>
import Wyswyg from '@/components/Elements/Wyswyg.vue';

export default {

  name: 'AcfText',
  props: ['title','use_h1_title', 'texts','layout_color','padding_top', 'padding_bottom', 'container_size'],
  components: {
    Wyswyg,
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
  margin: 0 -20px -30px;

  > * {
    width: calc(50% - 40px);
    margin: 0 20px 30px;

    &:nth-child(even) {
      .html {
        margin: 0 auto;
      }
    }
  }
}

.item {
  .html {
    max-width: 550px;
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

  .grid {
    margin: 0;

    > * {
      width: 100%;
      margin: 0;

      + * {
        margin-top: 20px;
      }
    }
  }

  .item {
    .html {
      max-width: none;
    }
  }
}
</style>
