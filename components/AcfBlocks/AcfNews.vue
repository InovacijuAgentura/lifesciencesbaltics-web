<template lang="pug">
div.news(v-if="items && items.length" :class="[padding_top, padding_bottom, layout_color]")
  div.container(:class="[container_size]")
    .items
      NuxtLink.item(v-for="item in filteredNews" :to="item.url"  :key="item.id")
        .img(v-if="item.image")
          wpImageSmall(:image="item.image" :width="634" :height="300"  :cover="true")
        .wrap
          h3.t(v-html="item.title")
          .foot
            .date {{item.date}}
            .more {{$t('readmore')}}
    div.navigation(v-if="totalPages != 1")
      div.prev(ref="prevgf" @click="minusPage" :class="{off:page === 1}")
        slider_prev
      .current {{page}}
      .total {{totalPages}}
      div.next(ref="nextgf" @click="plusPage" :class="{off:page === totalPages}")
        slider_next
</template>

<script>
import wpImageSmall from '@/components/Elements/wpImageSmall.vue';
import slider_prev from '~/assets/svg/slider_prev.svg';
import slider_next from '~/assets/svg/slider_prev.svg';

export default {

  name: 'AcfNews',
  props: ['items','layout_color','padding_top','posts_per_page', 'padding_bottom', 'container_size'],
  components: {
    wpImageSmall,
    slider_prev,
    slider_next
  },
  data() {
    return {
      page: 1
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.items.length/this.posts_per_page) 
    },
    filteredNews() {
      let p = this.items

      const startIndex = this.posts_per_page * (this.page - 1);
      const endIndex = parseFloat(startIndex) + parseFloat(this.posts_per_page);
      
      return p.slice(startIndex, endIndex);
    },
  },
  created() {
  },
  methods: {

    minusPage() {
      if(this.page != 1) {
        this.page = this.page - 1
      }
    },

    plusPage() {
      if(this.page != this.totalPages) {
        this.page = this.page + 1
      }
    }

  },
  watch: {
    page() {

      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }
};
</script>

<style scoped lang="scss">

.news {

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

.items {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px -30px;

  > * {
    width: calc(33.333% - 20px);
    margin: 0 10px 30px;
  }
}

.item {
  background: #fff;

  .wrap {
    padding: 30px;
  }

  .t {
    text-transform: uppercase;
  }

  .foot {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .more {
    color: #DA85B6;
    text-transform: uppercase;
    font-family: 'MyriadPro';
    line-height: 18px;
  }

  .date {
    color: #8E9EA7;
    font-size: 14px;
  }
}

.navigation {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 45px;
  svg {
    stroke: #DA85B6;
  }
  .current {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 1px solid #000000;
  }
  .total {
    display: flex;
    align-items: center;
    margin-right: 25px;

    &:before {
      content: '';
      display: flex;
      height: 1px;
      background: #000000;
      width: 80px;
      margin: 0 10px;
    }
  }

  .prev {
    margin-right: 25px;
    cursor: pointer;
    display: flex;
  }

  .next {
    display: flex;
    cursor: pointer;
    svg {
      transform: rotate(180deg);
    }
  }
  .off {
    cursor: default;
    svg {
      stroke: #DCE7EE;
    }
  }
}
@media screen and (max-width: 991px) {
  .items {

    > * {
      width: calc(50% - 20px);
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

  .item {
    .wrap {
      padding: 20px;
    }
    .t {
      margin-bottom: 10px;
    }
  }

  .navigation {
    margin-top: 40px;
  }
}

@media screen and (max-width: 568px) {
  .items {
    margin: 0;

    > * {
      width: 100%;
      margin: 0;

      + * {
        margin-top: 20px;
      }
    }
  }
}
</style>
