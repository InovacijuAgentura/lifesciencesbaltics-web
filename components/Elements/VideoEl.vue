<template lang="pug">
.video
	.videowrap(v-if="type === 'youtube' && id" @click="showVideo")
		youtube(v-if="show" :video-id="id" :player-vars="playerVars")
		Loader(v-if="show")
		div(v-else)
			.img
				wpImageSmall(v-if="image" :image="image" :height="724" :width="1286" :cover="true" alt="Image")
				wpImageSmall(v-else :image="`https://img.youtube.com/vi/${id}/maxresdefault.jpg`" :height="724" :width="1286" :cover="true" alt="Image")
			.ic
				play
	.videowrap(v-else-if="type === 'file' && file" @click="showVideo")
		video(v-if="show" preload="metadata" controls autoplay)
			source(:src="file.url" :type="file.mime_type")
		div(v-else)
			.img(v-if="image")
				wpImageSmall(:image="image" :height="724" :width="1286" :cover="true" alt="Image")
			.ic
				play
	Wyswyg(v-if="text" :html="text")
</template>

<script>
import Loader from '@/components/Elements/Loader.vue';
import wpImageSmall from '@/components/Elements/wpImageSmall.vue';
import play from '~/assets/svg/play.svg';
import Wyswyg from '@/components/Elements/Wyswyg.vue';
export default {

  name: 'VideoEl',
  props: ['type','id','file','image', 'text'],
  components: {
	Loader,
	wpImageSmall,
	play,
    Wyswyg
  },
  data() {
    return {
      show: false,
      playerVars: {
        autoplay: 1
      }
    };
  },
  computed: {
  },
  methods: {

		showVideo() {
			this.show = true
		}
  },
};

</script>

<style scoped lang="scss">
.video {
	max-width: 900px;
	margin: 0 auto;

    .html {
        margin-top: 30px;
        text-transform: uppercase;
        max-width: 474px;
        font-size: 25px;
        line-height: 25px;
        font-family: 'MyriadPro';
    }
}
.videowrap {
    padding-bottom:56.25%; position:relative; display:block; width: 100%;
    overflow: hidden;
    cursor: pointer;

    .loader {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      top: 50%;
      z-index: 2;
    }


    .img {
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
    }
	video {

		position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
	z-index: 3;
	}

      :deep() {
          iframe {
          position: absolute;
          top: 0;
          width: 100%;
          left: 0;
          height: 100%;
          right: 0;
          z-index: 3;
        }
      }

      .ic {
        
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 2;
        transform: translate(-50%, -50%);
        display: flex;
        height: 100px;
        width: 100px;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        background: #DA85B6;

      }

    &:hover {
      :deep() {
        img {
          transform: scale(1.1);
        }
      }
    }
  .img {
    overflow: hidden;

    :deep() {
        img {
          transition: 0.3s all;
        }
      }
  }
}


@media screen and (max-width: 768px) {

    .video {
        .html {
            font-size: 16px;
            line-height: 16px;
            margin-top: 20px;
        }
    }
	.videowrap {

		.ic {
			height: 50px;
			width: 50px;
			:deep() {
				svg {
					transform: scale(0.7);
				}
			}
		}
	}
}
</style>
