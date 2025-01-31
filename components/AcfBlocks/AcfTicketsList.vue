<template lang="pug">
div.tickets(v-if="items && items.length" :class="[padding_top, padding_bottom, layout_color]")
  div.container(:class="[container_size]")
    .items
      revealBlock(v-for="(item,index) in items" :key="index" :delay="index*0.1")
        .item
          .twrap
            h3.t(v-if="item.title" v-html="item.title")
          .wrp
            Wyswyg(v-if="item.text" :html="item.text")
            .foot(v-if="item.button || item.price")
              .prc(v-if="item.price" v-html="item.price")
              .btnc(v-if="item.button")
                Button(:to="item.button.url" :href="item.button.url" :text="item.button.title" :target="item.button.target")
</template>

<script>
import Wyswyg from '@/components/Elements/Wyswyg.vue';
import revealBlock from '@/components/Elements/revealBlock.vue';
import Button from '@/components/Elements/Button.vue';

export default {

  name: 'AcfText',
  props: ['items','layout_color','padding_top', 'padding_bottom', 'container_size'],
  components: {
    Wyswyg,
    revealBlock,
    Button
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

.tickets {

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

.btnc {
  margin-top: 30px;

  .btn {
    width: 100%;
  }
}

.items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 -15px -30px;

  > * {
    width: calc(25% - 30px);
    margin: 0 15px 30px;
  }

  :deep() {
    .c {
      height: 100%;
    }
  }
}

.item {
  background: #fff;
  height: 100%;
  overflow: hidden;

  .t {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 120px;
    padding: 10px;
    color: #005C85;
    max-width: 254px;
    margin: 0 auto;
  }

  .twrap {
    border-bottom: 1px dashed #8E9EA7;
    position: relative;

    &:before,
    &:after  {
      content: '';
      position: absolute;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      background: #F7F7F7;
      z-index: 2;
      bottom: -15px;
      left: -15px;
    }

    &:after {
      left: auto;
      right: -15px;
    }
  }

  .wrp {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 18px 35px 40px;
  }

  .prc {
    text-align: center;
    text-transform: uppercase;
    margin-top: 30px;
    font-size: 25px;
    line-height: 25px;
    font-family: 'MyriadPro';
  }
}

@media screen and (max-width: 1100px) {
  .item {
    .wrp {

      padding: 18px 20px 20px;
    }
  }
}

@media screen and (max-width: 991px) {
  .items {
    margin: 0 -10px -20px;

    > * {
      width: calc(50% - 20px);
      margin: 0 10px 20px;
    }
  }
}

@media screen and (max-width: 768px) {
  .tickets {

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

  .item {
    .t {
      font-size: 25px;
      line-height: 25px;
    }
  }
}

@media screen and (max-width: 568px) {

  .items {
    margin: 0;

    > * {
      width: 100%;
      margin: 0;

      + * {
        margin-top: 10px;
      }
    }
  }
  .item {
    .wrp {
      padding: 18px 35px 40px;
    }
  }
}
</style>
