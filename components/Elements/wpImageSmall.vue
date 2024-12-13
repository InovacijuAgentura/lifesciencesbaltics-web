<template lang="pug">
figure.picture(:class="{cover:cover, contain:contain}")
  picture
    source(type="image/webp" :data-srcset="full.webp+' 1x, '+full.webp2x+' 2x'")
    img(:src="placeholder" :data-srcset="full.jpg2x+' 1x, '+full.jpg2x+' 2x'" :height="height" :width="width" :alt="alt").lazyload
</template>

<script>

export default {

  name: 'wpImageSmall',
  props: ['image', 'cover', 'contain', 'width', 'height', 'alt', 'forceType'],
  components: {
  },
  data() {
    return {

    };
  },
  computed: {
    full() {
      let format = false;
      if (this.forceType) {
        format = this.forceType;
      }
      return {
        jpg: this.$img(this.image, { width: this.width, quality: 80, format  }),
        webp: this.$img(this.image, { width: this.width, quality: 80, format: 'webp'  }),
        jpg2x: this.$img(this.image, { width: this.width*2, quality: 80, format  }),
        webp2x: this.$img(this.image, { width: this.width*2, quality: 80, format: 'webp'  }),
      }
    },
    placeholder() {
      return this.$img(this.image, { width: 40, quality: 50, blur: true,   })
    },
  },
  created() {
  },
  methods: {

  },
};
</script>

<style scoped lang="scss">
.picture {
    &.cover {

        width: 100%;
        height: 100%;

         img {
            width: 100%;
            height: 100%;
            object-fit: cover;        
        }
        
    }
    &.contain {

        width: 100%;
        height: 100%;

         img {
            width: 100%;
            height: 100%;
            object-fit: contain;        
        }
    }
    img {

        display: block;
        height: auto;
        max-width: 100%;
    }
}
</style>
