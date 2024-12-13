<template lang="pug">
figure.picture(:class="{cover:cover, contain:contain}")
  picture
    source(type="image/webp" :data-srcset="max480.webp+' 1x, '+max480.webp2x+' 2x'" media="(max-width: 480px)")
    source(type="image/webp" :data-srcset="max768.webp+' 1x, '+max768.webp2x+' 2x'" media="(max-width: 768px)")
    source(type="image/webp" :data-srcset="max1200.webp+' 1x, '+max1200.webp2x+' 2x'" media="(max-width: 1200px)")
    source(type="image/jpg" :data-srcset="max480.jpg+' 1x, '+max480.jpg2x+' 2x'" media="(max-width: 480px)")
    source(type="image/jpg" :data-srcset="max768.jpg+' 1x, '+max768.jpg2x+' 2x'" media="(max-width: 768px)")
    source(type="image/jpg" :data-srcset="max1200.jpg+' 1x, '+max1200.jpg2x+' 2x'" media="(max-width: 1200px)")
    source(type="image/webp" :data-srcset="full.webp+' 1x, '+full.webp2x+' 2x'")
    img(:src="placeholder" :data-srcset="full.jpg+' 1x, '+full.jpg2x+' 2x'" :height="height" :width="width" :alt="alt").lazyload
</template>

<script>

export default {

  name: 'wpImageFull',
  props: ['image', 'cover', 'contain', 'width', 'height', 'alt'],
  components: {
  },
  data() {
    return {

    };
  },
  computed: {
    max480() {
      return { 
        jpg: this.$img(this.image, { width: 480, quality: 80, format: 'jpg'  }),
        webp: this.$img(this.image, { width: 480, quality: 80, format: 'webp'  }),
        jpg2x: this.$img(this.image, { width: 480*2, quality: 80, format: 'jpg'  }),
        webp2x: this.$img(this.image, { width: 480*2, quality: 80, format: 'webp'  }),
      }
    },
    max768() {
      return { 
        jpg: this.$img(this.image, { width: 768, quality: 80, format: 'jpg'  }),
        webp: this.$img(this.image, { width: 768, quality: 80, format: 'webp'  }),
        jpg2x: this.$img(this.image, { width: 768*2, quality: 80, format: 'jpg'  }),
        webp2x: this.$img(this.image, { width: 768*2, quality: 80, format: 'webp'  })
      }
    },
    max1200() {
      return { 
        jpg: this.$img(this.image, { width: 1200, quality: 80, format: 'jpg'  }),
        webp: this.$img(this.image, { width: 1200, quality: 80, format: 'webp'  }),
        jpg2x: this.$img(this.image, { width: 1200*2, quality: 80, format: 'jpg'  }),
        webp2x: this.$img(this.image, { width: 1200*2, quality: 80, format: 'webp'  }),
      }
    },
    full() {
      return {
        jpg: this.$img(this.image, { width: this.width, quality: 80, format: 'jpg'  }),
        webp: this.$img(this.image, { width: this.width, quality: 80, format: 'webp'  }),
        jpg2x: this.$img(this.image, { width: this.width*2, quality: 80, format: 'jpg'  }),
        webp2x: this.$img(this.image, { width: this.width*2, quality: 80, format: 'webp'  }),
      }
    },
    placeholder() {
      return this.$img(this.image, { width: 40, quality: 50, format: 'jpg', blur: true,   })
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
