<template lang="pug">
div.team(:class="[padding_top, padding_bottom, layout_color]")
  div.container(:class="[container_size]")
    h1.titleH(v-if="title && use_h1_title" v-html="title")
    h2.titleH(v-else-if="title" v-html="title")
    .items(v-if="members && members.length" :class="{odd:type === 'various'}")
      .item(v-for="item in members" :key="item.id")
        NuxtLink.link(v-if="item.url" :to="item.url")
        .img(v-if="item.image")
          wpImageSmall(:image="item.image" :width="460" :height="516" :cover="true")
        .wrp(:class="{odd:item.email}")
          h3.t(v-html="item.title")
          .content(v-if="item.job_title" v-html="item.job_title")
          //- .content(v-else-if="item.content" v-html="item.content")
          a.btn(v-if="item.email" :href="`mailto:${item.email}`") {{$t('teamcontact')}}
</template>

<script>
import wpImageSmall from '@/components/Elements/wpImageSmall.vue';

export default {

  name: 'AcfTeam',
  props: ['title','use_h1_title', 'members','type','layout_color','padding_top', 'padding_bottom', 'container_size'],
  components: {
    wpImageSmall,
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

.team {

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
  margin-bottom: 60px;
  text-align: center;
}

.items {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -60px -60px;

  &.odd {
    > * {
      &:nth-child(odd) {
        .img {
          order: 2;
          margin-bottom: 0;
          margin-top: 20px;
        }
      }
    }
  }

  > * {
    width: 25%;
    border-right: 1px solid #8E9EA7;
    margin-bottom: 60px;
    padding: 0 60px;
    &:nth-child(4n) {
      border-color: transparent;
    }

    &:last-child {
      border-color: transparent;
    }
  }
}

.item {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  .link {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 5;
  }

  .wrp {
    &.odd {

      position: relative;
      z-index: 6;
    }
  }
  .t {
    text-transform: uppercase;
    margin-bottom: 0;
  }
  .img {
    margin-bottom: 20px;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #DA85B6;
    border: 1px solid #DA85B6;
    color: #fff;
    text-transform: uppercase;
    min-height: 34px;
    padding: 7px 20px 4px;
    font-size: 14px;
    line-height: 14px;
    border-radius: 17px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-align: center;
    font-family: "MyriadPro";
    margin-top: 20px;
    &:hover {
        background-color: #c478a4;
        border: 1px solid #c478a4;
    }
  }

  .content {
    margin-top: 5px;
  }
}
@media screen and (max-width: 1200px) {
  .items {
    margin: 0 -30px -60px;

    > * {
      padding: 0 30px;
    }
  }
}
@media screen and (max-width: 991px) {
  .items {
    margin: 0 -20px -30px;

    > * {
      padding: 0 20px;
      margin-bottom: 30px;
    }
  }
}

@media screen and (max-width: 768px) {
  .team {

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

  .titleH {
    margin-bottom: 30px;
  }

  .items {
    > * {
      width: 50%;
      &:nth-child(2n) {
        border-color: transparent;
      }
    }
  }

  .item {
    .btn {
      margin-top: 5px;
    }
    .t {
      font-size: 25px;
      line-height: 25px;
    }
  }
}

@media screen and (max-width: 480px) {
  .items {
    margin: 0 0 -30px;

    &.odd {
      > * {
        &:nth-child(odd) {
          .img {
            order: 1;
            margin-bottom: 20px;
            margin-top: 0;
          }
          .wrp {
            order: 2;
          }
        }
      }
    }
    > * {
      width: 100%;
      border-right: none;
      border-bottom: 1px solid #8E9EA7;
      padding: 0 0 30px;
      &:nth-child(2n),
      &:nth-child(4n) {
        border-color: #8E9EA7;
      }
      &:last-child{
        border-color: transparent;
      }
    }
  }

  .item {
    .img {
      padding: 0 45px;
    }
  }
}
</style>
