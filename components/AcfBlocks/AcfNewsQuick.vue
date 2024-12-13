<template lang="pug">
div.news(:class="[padding_top, padding_bottom, layout_color]")
  div.container(:class="[container_size]")
    .grid(v-if="main_new")
      revealBlock.img(v-if="main_new.image" type="slidein")
        NuxtLink(:to="main_new.url").link
        wpImageSmall(:image="main_new.image" :width="950" :cover="true")
      revealBlock.info(type="slidein" :delay="0")
        .date {{main_new.date}}
        h2.title(v-html="main_new.title")
        Wyswyg(v-if="main_new.excerpt" :html="main_new.excerpt")
        Button(:to="main_new.url" :text="$t('readmore')" color="simple")
          template(slot="right")
            arrow_right_menu
    .items(v-if="items")
      revealBlock(v-for="(item,index) in items" :key="item.id" :delay="index*0.1" type="slidein")
        NuxtLink.item(:to="item.url")
          .date {{item.date}}
          h3.t
            span(v-html="item.title")
          .ic(v-if="$mq != 'xs'")
            arrow_right_menu
          .more(v-if="$mq === 'xs'") {{$t('readmore')}}
    revealBlock.btnc(v-if="button" type="slidein")
      Button(:to="button.url" :href="button.url" :text="button.title" :target="button.target")
</template>

<script>
import Wyswyg from '@/components/Elements/Wyswyg.vue';
import Button from '@/components/Elements/Button.vue';
import arrow_right_menu from '~/assets/svg/arrow_right_menu.svg';
import wpImageSmall from '@/components/Elements/wpImageSmall.vue';
import revealBlock from '@/components/Elements/revealBlock.vue';

export default {

  name: 'AcfNewsQuick',
  props: ['button','items','main_new','layout_color','padding_top', 'padding_bottom', 'container_size'],
  components: {
    Wyswyg,
    Button,
    arrow_right_menu,
    wpImageSmall,
    revealBlock
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

.news {

  padding-top: 100px;
  padding-bottom: 100px;
  background: #005C85;
  color: #fff;

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
}

.grid {
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  .link {
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
  }

  > * {
    width: 50%;
  }

  .img {
    position: relative;

    + .info {
      padding-left: 66px;
    }
  }
  + .items {
    margin-top: 100px;
  }

  .date {
    margin-bottom: 15px;
    color: #B2D6F4;
    font-size: 14px
  }

  .t {
    margin-bottom: 15px;
  }

  .html {
    font-size: 18px;
  }

  .btn {
    font-size: 16px;
    margin-top: 15px;

    &:hover {

      :deep() {
        .ico {
          transform: translateX(8px);
        }
      }
    }
  }
}

.items {
  > * {

    .item {
      border-top: 1px solid #B2D6F4;
    }
    &:last-child {
      .item {
        border-bottom: 1px solid #B2D6F4;
      }
    }
  }
}
.item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 84px;
  padding: 30px 0;

  &:hover {
    .ic {
      transform: translateX(8px);
    }
  }

  .date {
    width: 160px;
    margin-right: 24px;
    color: #B2D6F4;
    font-size: 14px
  }

  .t {
    width: calc(100% - 214px);
    margin-bottom: 0;
    text-transform: uppercase;
    span {
      max-width: 590px;
      display: block;
    }
  }

  .ic {
    display: flex;
    width: 30px;
    transition: 0.3s all;
  }

  .more {
    text-transform: uppercase;
    font-size: 12px;
    color: #DA85B6;
    font-family: 'MyriadPro'; 
  }
}
@media screen and (max-width: 991px) {
  .grid {
    .img {

      + .info {
        padding-left: 20px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .news {

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

  .btnc {
    text-align: center;
  }

  .item {
    justify-content: space-between;
    align-items: flex-start;
    min-height: auto;
    padding: 15px 0;
    .t {
      order: 1;
      width: 100%;
      margin-bottom: 8px;
    }

    .date {
      order: 2;
      width: auto;
      font-size: 12px;
    }

    .more {
      order: 3;
    }
  }

  .grid {

    + .items {
      margin-top: 35px;
    }
    > * {
      width: 100%;

      + * {
        margin-top: 15px;
      }
    }
    .img {

      + .info {
        padding-left: 0;
      }
    }

    .date {
      font-size: 12px;
    }

    .html {
      font-size: 16px;
    }

    .btn {
      font-size: 12px;
      :deep() {
        .ico {
          display: none;
        }
      }
    }
  }
}
</style>
