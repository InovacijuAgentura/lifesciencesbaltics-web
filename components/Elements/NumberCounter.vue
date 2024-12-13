<template lang="pug">
.number(ref="trigger")
  .val {{counter}}
</template>

<script>
import { gsap,Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {

  name: 'NumberCounter',
  props: ['number'],
  components: {
  },
  data() {
    return {
      counter: 0
    };
  },
    created() {
      this.timelines = [];
    },
    mounted() {

      this.buildScrolltrigger();
    },
  computed: {
  },
  methods: {

    buildScrolltrigger() {
            //let animation = gsap.timeline({paused: true});


            const startCount = 0;
            const endCount = this.number;
            const num = {var:startCount};

            const b = gsap.timeline({ 
              paused: true,
            })
            .to(num, {var: endCount, duration: 5, onUpdate:()=>{
              this.counter = parseInt(num.var)
            }})
            this.timelines.push(b);


            const z = ScrollTrigger.create({
              trigger: this.$refs.trigger,
              pin: false,  
              start: "0% 90%",
              onEnter: self => {
                b.play();
              },
            });
            this.timelines.push(z);
          
        },
  },
    beforeDestroy() {
        if (this.timelines.length > 0) {
            this.timelines.forEach((el) => {
                if (el.scrollTrigger) {
                    el.scrollTrigger.kill(false);
                }
                el.kill();
            });
        }
    },
};

</script>

<style scoped lang="scss">
</style>
