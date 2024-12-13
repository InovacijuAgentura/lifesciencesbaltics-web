<template lang="pug">
img(:data-src="fullsvg" :height="height" :width="width").lazyload
</template>

<script>

export default {

  name: 'wpImageSvg',
  props: ['image', 'height', 'width'],
  components: {
  },
  data() {
    return {

    };
  },
  computed: {
    fullsvg() {
      if(process && process.env && process.env.NODE_ENV === 'development') {
        return this.image;
      }
      return this.$img(this.image, { height: this.height, width: this.width })
    },
  },
  created() {
  },
  methods: {

  },
};
</script>

<style scoped lang="scss">
img {

    max-width: 100%;
}
</style>
