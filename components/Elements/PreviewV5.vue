<template lang="pug">
div

</template>

<script>
import PhotoSwipe from 'photoswipe';
import 'photoswipe/src/photoswipe.css';
//import PhotoSwipeCaptions from './PreviewV5Caption.js';

export default {

    name: 'PreviewV5',
    props: {
    list: {
        type: Array,
        required: true
    },
    index: {
        type: Number,
        default: 0
    },
    options: {
        type: Object,
        default() {
            return {};
        }
    }
    },
    data() {
        return {

        };
    },
    computed: {
    },
    mounted() {
        const pswp = new PhotoSwipe({dataSource: this.list, index: this.index, showHideAnimationType: 'none', bgOpacity: 1, ...this.options});
        pswp.on('destroy', () => {
            this.$emit('on-close');
        });
        // const captionPlugin = new PhotoSwipeCaptions(pswp, {
        //   // Plugins options, for example:
        //   type: 'below',
        //   captionContent: (slide) => {
        //     return slide.data.caption;
        //   }

        // });
        pswp.init()
    },
    methods: {

    },
};
</script>

<style>
.pswp__dynamic-caption {
    color: #fff;
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    transition: opacity 120ms linear !important; /* override default */
}

.pswp-caption-content {
    display: none;
}

.pswp__dynamic-caption a {
    color: #fff;
}

.pswp__dynamic-caption--faded {
    opacity: 0 !important;
}

.pswp__dynamic-caption--aside {
    width: auto;
    max-width: 300px;
    padding: 20px 15px 20px 20px;
    margin-top: 70px;
}

.pswp__dynamic-caption--below {
    width: auto;
    max-width: 700px;
    padding: 10px 0;
}

.pswp__dynamic-caption--on-hor-edge {
    padding-left: 15px;
    padding-right: 15px;
}

.pswp__dynamic-caption--mobile {
    width: 100%;
    background: rgba(0,0,0,0);
    padding: 10px 15px;

    right: 0;
    bottom: 0;

    /* override styles that were set via JS.
    as they interfere with size measurement */
    top: auto !important; 
    left: 0 !important;
}
.pswp--white .pswp__dynamic-caption{
    color: #2B2B2B;
}
.pswp--white  {
    --pswp-icon-color: #B5B1AE;
    --pswp-icon-color-secondary: #fff;
    --pswp-icon-stroke-color: #B5B1AE;
    --pswp-icon-stroke-width: 0;
}
.pswp--white  .pswp__counter{
    text-shadow: none;
}
</style>
