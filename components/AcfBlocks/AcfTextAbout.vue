<template lang="pug">
div.text(:class="[padding_top, padding_bottom, layout_color]")
  div.container(:class="[container_size]")
    .grid(:class="{odd:image_on_left}")
      .left
        .wrp
          h1.titleH(v-if="title && use_h1_title" v-html="title")
          h2.titleH(v-else-if="title" v-html="title")
          Wyswyg(v-if="text" :html="text")
          .items(v-if="items && items.length")
            .item(v-for="(item,index) in items" :key="index")
              h3.t(v-if="item.number")
                NumberCounter(:number="item.number")
              .content(v-if="item.text" v-html="item.text")
          .btnc(v-if="button")
            Button(:to="button.url" :href="button.url" :text="button.title" :target="button.target")
      .right
        .img(v-if="image")
          wpImageSmall(:image="image" :width="825" :height="900"  :cover="true")
</template>

<script>
import Wyswyg from '@/components/Elements/Wyswyg.vue';
import wpImageSmall from '@/components/Elements/wpImageSmall.vue';
import Button from '@/components/Elements/Button.vue';
import NumberCounter from '@/components/Elements/NumberCounter.vue';

export default {

  name: 'AcfTextAbout',
  props: ['title','use_h1_title', 'text','items','button','image_on_left','image','layout_color','padding_top', 'padding_bottom', 'container_size'],
  components: {
    Wyswyg,
    wpImageSmall,
    Button,
    NumberCounter
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

.text {

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

.titleH {
  margin-bottom: 10px;
}

.html {
  font-size: 18px;
  line-height: 25px;
}

.items {

  display: flex;
  flex-wrap: wrap;
  margin: 40px -20px -50px;
  > * {
    width: calc(50% - 40px);
    margin: 0 20px 50px;
  }
}

.item {
  text-align: center;

  .t {
    font-size: 75px;
    line-height: 70px;
    color: #DA85B6;
    font-weight: 700;
    font-family: 'MyriadPro'; 
    margin-bottom: 0;
  }

  .content {
    text-transform: uppercase;
    font-family: 'MyriadPro'; 
    font-size: 25px;
    line-height: 25px;
  }
}

.grid {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;

  > * {
    width: calc(50% - 40px);
    margin: 0 20px;
    display: flex;
    align-items: center;
    height: auto;
  }

  &.odd {
    .left {
      order: 2;
    }

    .right {
      order: 1;
    }
  }
}
.btnc {
  margin-top: 30px;
}
.img {

  max-width: 550px;
  margin: 0 auto;
  height: 100%;
}
.wrp {
  max-width: 550px;
}

@media screen and (max-width: 991px) {
  .item {
    .t {
      font-size: 60px;
      line-height: 56px;
    }

    .content {
      font-size: 16px;
      line-height: 16px;
    }
  }
}

@media screen and (max-width: 768px) {
  .text {

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

  .img {

    max-width: none;
  }
  .wrp {
    max-width: none;
  }

  .titleH {
    margin-bottom: 20px;
  }
  .grid {
    margin: 0;
    > * {
      width: 100%;
      margin: 0;

      + * {
        margin-top: 40px;
      }
    }

    &.odd {

      .left {
        order: 2;
      }

      .right {
        order: 1;
      }
      > * {
       
        + * {
          margin-top: 0;
          margin-bottom: 40px;
        }
      }
    }
  }
  .items {

    display: flex;
    flex-wrap: wrap;
    margin: 40px -10px -40px;
    > * {
      width: calc(50% - 10px);
      margin: 0 5px 40px;
    }
  }
}
</style>
