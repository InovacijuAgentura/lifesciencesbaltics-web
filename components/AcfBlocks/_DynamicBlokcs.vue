<template lang="pug">
div.blocks(v-if="blocks && blocks.length > 0")
  div.block(v-for="(item, index) in blocks")
    component(:is="item.acf_fc_layout" v-bind="item")
</template>

<script>
import AcfText from '@/components/AcfBlocks/AcfText.vue';
import AcfTitle from '@/components/AcfBlocks/AcfTitle.vue';
import AcfNewsletter from '@/components/AcfBlocks/AcfNewsletter.vue';
import AcfPartners from '@/components/AcfBlocks/AcfPartners.vue';
import AcfNewsQuick from '@/components/AcfBlocks/AcfNewsQuick.vue';
import AcfTimeCountdown from '@/components/AcfBlocks/AcfTimeCountdown.vue';
import AcfLinks from '@/components/AcfBlocks/AcfLinks.vue';
import AcfSiteBanner from '@/components/AcfBlocks/AcfSiteBanner.vue';
import AcfTextAbout from '@/components/AcfBlocks/AcfTextAbout.vue';
import AcfTicketsList from '@/components/AcfBlocks/AcfTicketsList.vue';
import AcfTextSlider from '@/components/AcfBlocks/AcfTextSlider.vue';
import AcfTextColumns from '@/components/AcfBlocks/AcfTextColumns.vue';
import AcfVideo from '@/components/AcfBlocks/AcfVideo.vue';
import AcfImage from '@/components/AcfBlocks/AcfImage.vue';
import AcfTextImage from '@/components/AcfBlocks/AcfTextImage.vue';
import AcfFaq from '@/components/AcfBlocks/AcfFaq.vue';
import AcfBoxItems from '@/components/AcfBlocks/AcfBoxItems.vue';
import AcfTeam from '@/components/AcfBlocks/AcfTeam.vue';
import AcfPoints from '@/components/AcfBlocks/AcfPoints.vue';
import AcfGallery from '@/components/AcfBlocks/AcfGallery.vue';
import AcfNews from '@/components/AcfBlocks/AcfNews.vue';
import AcfPrograms from '@/components/AcfBlocks/AcfPrograms.vue';
import AcfSitemapLinks from '@/components/AcfBlocks/AcfSitemapLinks.vue';

export default {

  name: 'DynamicBlokcs',
  props: ['blocks'],
  components: {
    AcfText,
    AcfTitle,
    AcfNewsletter,
    AcfPartners,
    AcfNewsQuick,
    AcfTimeCountdown,
    AcfLinks,
    AcfSiteBanner,
    AcfTextAbout,
    AcfTicketsList,
    AcfTextSlider,
    AcfTextColumns,
    AcfVideo,
    AcfImage,
    AcfTextImage,
    AcfFaq,
    AcfBoxItems,
    AcfTeam,
    AcfPoints,
    AcfGallery,
    AcfNews,
    AcfPrograms,
    AcfSitemapLinks
  },
  created() {
  },
  data() {
    return {

    };
  },
  computed: {
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
</style>
