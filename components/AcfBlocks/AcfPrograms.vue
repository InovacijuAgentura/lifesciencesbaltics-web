<template lang="pug">
div.programs(:class="[padding_bottom, layout_color]")
  .top(:class="[padding_top]")
    div.container(:class="[container_size]")
      .gridtop
        h1.titleH(v-if="use_h1_title" v-html="title")
        h2.titleH(v-else="title" v-html="title")
        .categories(v-if="stages && stages.length")
          .cat(v-for="(stage, index) in stages" :class="{active: activeStage === stage.id }" @click="triggerStage(stage.id)" :key="stage.id")
            .name {{ stage.title }}
            .img(v-if="stage.image")
              wpImageSmall(:image="stage.image" :width="100" :contain="true")
  .main
    .container
      .grid
        .left
          .tabs
            .tab(v-if="dates && dates.length" v-for="date in dates" :class="{active: activeDate === date.id }" :key="date.id" @click="triggerDate(date.id)") 
              span {{date.title}}
            .tab(@click="triggerWish" :class="{active:showWishlist}") 
              span {{$t('wishlist')}}
              .nr {{wishlistCount}}
        .right
          .scrl(v-if="filteredPosts && filteredPosts.length > 0")
            QuickProgram(v-for="item in filteredPosts" :key="item.id" :data="item")
          .msg(v-else) {{$t('notfounprogram')}}
</template>

<script>

import QuickProgram from '@/components/Elements/QuickProgram.vue';
import wpImageSmall from '@/components/Elements/wpImageSmall.vue';
import { mapGetters } from 'vuex';
export default {

  name: 'AcfPrograms',
  props: ['title','use_h1_title','stages','dates','items','layout_color','padding_top', 'padding_bottom', 'container_size'],
  components: {
    QuickProgram,
    wpImageSmall
  },
  data() {
    return {
      activeStage: false,
      showWishlist: false,
      activeDate: false
    };
  },
  computed: {
    ...mapGetters('User', [
        'wishlist',
    ]),
    filteredPosts() {
      let p = this.items
      if(this.activeStage) {
        p = p.filter(item => {
          return item.stages_ids && item.stages_ids.includes(this.activeStage)
        })
      }
      if(this.activeDate) {
        p = p.filter(item => {
          console.log(item)
          return item.dates_ids && item.dates_ids.includes(this.activeDate)
        })
      }
      if(this.showWishlist && this.wishlist.length) {

        p = p.filter(item => {
          return this.wishlist.includes(item.id)
        })
      }
      return p
    },
    wishlistCount() {

      let p = this.items
      p = p.filter(item => {
        return this.wishlist.includes(item.id)
      })
      return p.length
    }
  },
  mounted() {
  },
  methods: {
    triggerStage(val) {
      if(val === this.activeStage) {
        this.activeStage = false
      } else {
        this.activeStage = val
      }
    },
    triggerDate(val) {
      if(val === this.activeDate) {
        this.activeDate = false
      } else {
        this.activeDate = val
        this.showWishlist = false
      }
    },
    triggerWish() {
      this.showWishlist = !this.showWishlist
      if(this.showWishlist) {
        this.activeDate = false
      }
    }
  },
};
</script>

<style scoped lang="scss">

.programs {

  padding-bottom: 50px;
  
  &.pb-small {

    padding-bottom: 40px;
  }

  &.pt-none {

    padding-top: 0;
  } 
  
  &.pb-none {

    padding-bottom: 0;
  }

  .top {

    background: #005C85;
    color: #fff;
    padding-top: 100px;

    &.pt-big {

      padding-top: 160px;
    } 

    &.pt-small {

      padding-top: 40px;
    } 
  }
}

.container {

  &.small {

    max-width: 940px;
  }
}

.titleH {
  margin-bottom: 0;
}

.gridtop {
  display: flex;
  flex-wrap: wrap;

  .titleH {
    width: 40%;
    padding-right: 40px;
  }
  .categories {
    width: 60%;
    display: flex;
    > * {
      flex: 1;
      &:not(:last-child) {
        margin-right: 12px;
      }
    }
  }
}

.cat {
  display: flex;
  min-height: 80px;
  background: rgba(255,255,255,0.1);
  padding: 15px;
  cursor: pointer;
  justify-content: space-between;

  &.active {
    background: #DA85B6;
  }
  .name {
    width: 44px;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 14px;
    margin-right: 10px;
    font-family: 'MyriadPro';
  }

  .img {
    max-width: 100px;
    width: 100%;
  }
}

.grid {
  display: flex;
  flex-wrap: wrap;
  .left {
    width: calc(40% - 100px);
    padding-right: 40px;
  }
  .right {
    width: calc(60% + 100px)
  }
  .scrl {
    max-height: calc(100dvh - 340px);
    overflow-y: scroll;
    padding-left: 100px;
    > * {
      + * {
        margin-top: 10px;
      }
    }
  }

  .msg {
    padding-left: 100px;
  }
}

.main {
  padding-top: 50px;
}

.tabs {
  display: flex;
  border-radius: 20px;
  border: 1px solid #8E9EA7;
  padding: 4px;
  flex-wrap: wrap;

  > * {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    min-height: 34px;
    padding: 4px 10px;
    margin: 0;
    flex: 1;
    cursor: pointer;
    font-family: 'MyriadPro';
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    text-transform: uppercase;
    text-align: center;

    &.active {

      background: #DA85B6;
      color: #fff;

      .nr {
        color: #DA85B6;
        background: #fff;
      }
    }
  }

  span {
    padding-top: 4px;
  }

  .nr {
    display: flex;
    min-height: 16px;
    min-width: 16px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #DA85B6;
    color: #fff;
    margin-left: 2px;
    font-size: 10px;
    line-height: 10px;
    padding-top: 2px;
    margin-left: 4px;
  }
}

@media screen and (max-width: 991px) {
  .cat {
    flex-direction: column;
    text-align: center;

    .name {
      margin-right: 0;
      width: 100%;
    }

    .img {
      margin: 10px auto 0;
    }
  }
}

@media screen and (max-width: 768px) {
  .programs {

    .top {

      padding-top: 50px;
      &.pt-big {

        padding-top: 100px;
      } 
    }

    &.pt-small {

      padding-top: 20px;
    } 
    
    &.pb-small {

      padding-bottom: 20px;
    }
  }

  .gridtop {
    .titleH {
      width: 100%;
      padding-right: 0;
      text-align: center;
      margin-bottom: 30px;
    }
    .categories {
      width: 100%;
    }
  }

  .cat {
    .name {
      font-size: 12px;
    }
  }

  .grid {
    .left {
      width: 100%;
      padding-right: 0;
    }

    .right {
      width: 100%;
      margin-top: 30px;
    }

    .scrl {
      max-height: none;
      overflow: hidden;
      padding-left: 46px;
    }
    .msg {
      padding-left: 46px;
    }
  }
}
</style>
