<template lang="pug">
div.page 
  component(:is="data.template" :data="data")
  client-only
    Preview(v-bind:id="data.id")
</template>

<script>
import Default from '@/components/PageTemplates/Default.vue';
import Preview from '@/components/Layout/Preview.vue'

export default {
  asyncData({ $axios, app, params, error, payload  }) {
    // const slug = params.slug;
    if (payload && typeof payload === 'object' && Object.keys(payload).length > 0) return { data: payload.data }
    const slugs = params.pathMatch.split('/').filter(e => e);
    return $axios.get(`/wp-json/data/v1/get_page/${slugs[slugs.length - 1]}/?lang=${app.i18n.locale}`).then(res => {
      if (res.data && res.data.status === true) {
        return { data: res.data.data }
      } else {
        error({ statusCode: 404, message: 'Page not found' })
      }
    }).catch(e => {
      error({ statusCode: 404, message: 'Page not found' })
    })
  },
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
  components: {
    Default,
    Preview
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
.page {
    
  width: 100%;
}
</style>
