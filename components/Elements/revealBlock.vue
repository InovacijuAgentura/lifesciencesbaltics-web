<template lang="pug">
div.reveal(ref="trigger")
    div.c(ref="c")
        slot
</template>

<script>
import { gsap,Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default {

    name: 'revealBlock',
    components: {
    },
    props: {
        delay: {
            type: Number,
            default: 0.3
        },
        type: {
            type: String,
            default: 'slideup'
        },
    
    },
    data() {
    return {

    };
    },
    computed: {
    },
    created() {
        this.timelines = [];
    },
    mounted() {

            this.buildScrolltrigger();
    },
    methods: {
        buildScrolltrigger() {
            //let animation = gsap.timeline({paused: true});


                const main_tl = gsap.timeline({
                scrollTrigger: {
                    trigger: this.$refs.trigger,
                    start: "0% 100%",
                    //pin: false,
                    //end: "100% 100%",
                    //scrub: 2,
                    toggleActions: "play none none none",
                    //onEnter: () => animation.play()
                },
                });
                if(this.type === 'slidein') {
                    main_tl.fromTo(this.$refs.c,{x:-40,opacity:0},{x:0, opacity:1, duration:1}, this.delay);
                }
                if(this.type === 'slideup') {
                    main_tl.fromTo(this.$refs.c,{y:40,opacity:0},{y:0, opacity:1, duration:1}, this.delay);
                }
                if(this.type === 'slidedown') {
                    main_tl.fromTo(this.$refs.c,{y:-20,opacity:0},{y:0, opacity:1, duration:1}, this.delay);
                }

                this.timelines.push(main_tl);
                this.$emit('init', main_tl);
        },
    },
    beforeDestroy() {
        if (this.timelines.length > 0) {
            this.timelines.forEach((el) => {
                if (el.scrollTrigger) {
                    el.scrollTrigger.kill(false);
                }
                el.pause().kill(false);
            });
        }
    },
};
</script>

<style scoped lang="scss">
.reveal {
    .c {
        opacity: 0;
    }
}
</style>
