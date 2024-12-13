<template lang="pug">
div.herotitle(v-if="title" :class="[padding_top, padding_bottom, layout_color]")
  div.container(:class="[container_size]")
    revealBlock
      h1.titleH(v-if="title && use_h1_title" v-html="title")
      h2.titleH(v-else-if="title" v-html="title")
</template>

<script>

import revealBlock from '@/components/Elements/revealBlock.vue';
export default {

  name: 'AcfTitle',
  props: ['title','use_h1_title','layout_color','padding_top', 'padding_bottom', 'container_size'],
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

.herotitle {

  padding-top: 100px;
  padding-bottom: 100px;

  &.blue {
    background: #005C85;

    color: #fff;
  }
  &.pink {
    background: #DA85B6;
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
  margin-bottom: 0;
}

@media screen and (max-width: 768px) {
  .herotitle {

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
    text-align: center;
  }
}
</style>
