<template lang="pug">
div.d 
  div(v-if="data && data.blocks")
    DynamicBlokcs(:blocks="data.blocks")
</template>

<script>
import DynamicBlokcs from '@/components/AcfBlocks/_DynamicBlokcs.vue';

export default {

  name: 'Default',
  components: {
    DynamicBlokcs,

  },
  props: ['data'],
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

</style>
