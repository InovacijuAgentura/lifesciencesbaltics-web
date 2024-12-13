<template lang="pug">
div.links(:class="[padding_top, padding_bottom, layout_color]")
  .container
    .items(v-if="links && links.length")
      NuxtLinkOrA(v-for="(item,index) in links" :key="index" v-if="item.link" :url="item.link.url" :target="item.link.target")
        span(v-html="item.link.title")
</template>

<script>

import NuxtLinkOrA from '@/components/Elements/NuxtLinkOrA.vue';
export default {

  name: 'AcfSitemapLinks',
  props: ['links','layout_color','padding_top', 'padding_bottom', 'container_size'],
  components: {
    NuxtLinkOrA
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

.items {
  display: flex;
  flex-direction: column;
  > * {
    +* {
      margin-top: 4px;
    }
  }
  :deep() {
    a {
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .links {

    padding-top: 50px;
    padding-bottom: 50px;

    &.pt-big {

      padding-top: 100px;
    } 

    &.pt-bigr {

      padding-top: 100px;
    } 

    &.pt-small {

      padding-top: 20px;
    } 
    
    &.pb-small {

      padding-bottom: 20px;
    }
  }
}
</style>
