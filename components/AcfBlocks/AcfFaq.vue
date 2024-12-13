<template lang="pug">
div.faq(:class="[padding_top, padding_bottom, layout_color]")
  div.container(:class="[container_size]")
    h1.titleH(v-if="title && use_h1_title" v-html="title")
    h2.titleH(v-else-if="title" v-html="title")
    Tabs(v-if="items && items.length" :items="items")
</template>

<script>
import Tabs from '@/components/Elements/Tabs.vue';

export default {

  name: 'AcfText',
  props: ['title','use_h1_title','items','layout_color','padding_top', 'padding_bottom', 'container_size'],
  components: {
    Tabs
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

.faq {

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

.titleH {
  margin-bottom: 40px;
}

@media screen and (max-width: 768px) {
  .faq {

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
  }
}
</style>
