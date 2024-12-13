<template lang="pug">
.home
  div(v-if="data && data.blocks")
    DynamicBlokcs(:blocks="data.blocks")
</template>

<script>
import DynamicBlokcs from '@/components/AcfBlocks/_DynamicBlokcs.vue';

export default {
  asyncData({$axios,app}) {
    return $axios.get(`/wp-json/data/v1/get_home/?lang=${app.i18n.locale}`).then(res => {
      return { data: res.data }
    })
  },
  name: 'Index',
  head() {
    let image = '';
    if (this.data.image) {
      image = this.data.image;
    }
    return {
      title: this.data.meta_title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          property: 'og:title',
          content:  this.data.meta_title
        },
        {
          hid: 'description',
          name: 'description',
          property: 'og:description',
          content: this.data.meta_desc
        },
        {
          hid: 'image',
          name: 'image',
          property: 'og:image',
          content: image
        }
      ]
    }
  },
  // jsonld() {
  //   return [
  //     {
  //       "@context": "https://schema.org",
  //       "@type": "Organization",
  //       "url": "https://vue-starter.netlify.app/",
  //       "logo": "https://vue-starter.netlify.app/imgs/logo.svg"
  //     }
  //   ];
  // },
  components: {
    DynamicBlokcs,
  },
  data() {
    return {

    };
  },
  computed: {
  },
  mounted() {
    this.$store.commit('Options/setHeaderStyle', this.data.header_style);
  },
  methods: {

  },
};
</script>

<style scoped lang="scss">

</style>
