<template lang="pug">
div.videoblock(:class="[padding_top, padding_bottom, layout_color]")
  div.container(:class="[container_size]")
    VideoEl(v-if="youtube_video_id || video_file" :type="video_type" :id="youtube_video_id" :file="video_file" :image="preview_image" :text="video_description")
</template>

<script>
import VideoEl from '@/components/Elements/VideoEl.vue';

export default {

  name: 'AcfVideo',
  props: ['video_type','youtube_video_id','video_file','preview_image','video_description','padding_top','layout_color', 'padding_bottom', 'container_size'],
  components: {
    VideoEl,
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

.videoblock {

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

.container {

  &.small {

    max-width: 940px;
  }
}
@media screen and (max-width: 768px) {
  .videoblock {

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
}
</style>
