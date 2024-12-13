<template lang="pug">
div.outer
  div#main
    HeaderMain
    div.main_page_content(:class="{trans: headerStyle==='trans'}")
      Nuxt
    FooterMain
  PhotoSwipeContainer
  //- ClientOnly
  //-   Cookie 
  modals-container(ref="modal")
</template>

<script>

import { mapGetters } from 'vuex';
import HeaderMain from '@/components/Layout/HeaderMain.vue';
import FooterMain from '@/components/Layout/FooterMain.vue';
import Cookie from '@/components/Layout/Cookie/Cookie.vue';
import PhotoSwipeContainer from '@/components/Layout/PhotoSwipeContainer.vue';
import { openSitePopUp } from '@/components/Modal/SitePopUp/openModal.js';

export default {
  name: 'app',
  components: {
    HeaderMain,
    FooterMain,
    Cookie,
    PhotoSwipeContainer
  },
  data() {
    return {
    };
  },
  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      htmlAttrs: {
        ...i18nHead.htmlAttrs
      },
    }
  },
  computed: {
    ...mapGetters('Options', [
      'options',
    ]),
    ...mapGetters('Layout', [
      'windowHeight',
      'windowWidth'
    ]),
    ...mapGetters('Options', [
        'headerStyle'
    ]),
  },
  created() { 
    if (process.client) {
      this.onResize();
      window.addEventListener('resize', this.onResize);
    }
  },  
  mounted() {
    this.$axios.interceptors.response.use(response => response, (err) => {
      if (err.message !== 'refresh') {
      this.$store.dispatch('Error/show');
      }
      return Promise.reject(err);
    });
    this.$store.commit('User/getInfoFromCookie');

    if(this.options && this.options.general.enable_pop_up && this.options.general.pop_up_image && !sessionStorage.getItem("sitePopup")) {
      setTimeout(()=>{
        this.openPopUp()
      },2000);
    }
  },
  methods: {
    onResize() {
      if (process.client) {
        if (window.innerWidth != this.windowWidth) {
          this.$store.commit('Layout/setHeight', window.innerHeight);
          this.$store.commit('Layout/setWidth', window.innerWidth);
        }
      }
    },
    openPopUp() {
      sessionStorage.setItem("sitePopup", 1);
      openSitePopUp(this.$vfm, this.options.general.pop_up_image ).then(() => {
      });
    },
  },
  watch: { 
  },
  beforeDestroy() {
    if (process.client) {
      window.removeEventListener('resize', this.onResize); 
    }
  },
}
</script>

<style scoped lang="scss">
</style>