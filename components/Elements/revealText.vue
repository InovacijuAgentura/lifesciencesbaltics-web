<template lang="pug">
span(ref="title").reftitle
    slot
</template>

<script>

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

export default {

    name: 'revealText',
    components: {
    },
    props: {
        type:{
            type: String,
            default: 'none'
        },
        delay: {
            type: Number,
            default: 0
        },
    },
    data() {
        return {

        };
    },
    created() {
    this.timelines = [];
    },
    computed: {
    },
    mounted() {
        
        this.mySplitText = new SplitText(this.$refs.title, {
            type: "chars,words, lines",
            charsClass: "char",
            wordsClass: 'word'
        });

        let main_tl2 = gsap.timeline({
            delay: this.delay,
            scrollTrigger: {
                trigger: this.$refs.title,
                start: "0 100%",
                toggleActions: "play none none none",
            // scrub: 0,\
            },
        });
        main_tl2.set(this.$refs.title, {opacity:1},0);
        main_tl2.from(this.mySplitText.chars,{ease: "expo.inOut",opacity: 0,x: 40,scale: 1.2,stagger: {each: 0.05} });
        this.timelines.push(main_tl2);
    },
    methods: {
    },
    beforeDestroy() {
        if (this.timelines.length > 0) {
            this.timelines.forEach((el) => {
                el.scrollTrigger.kill(false);
                el.kill(); 
            });
        }
    },
    watch: {
    },
};
</script>

<style scoped lang="scss">
.reftitle {
    opacity: 0;
}
</style>
