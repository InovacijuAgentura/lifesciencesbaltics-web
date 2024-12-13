<template lang="pug">
.item(:class="[data.color,{odd:ended}]")
    .clock(:class="{on:isactive}") 
      .ic
        clock
      span {{time}}
    .l
        .time(v-if="data.time") {{data.time}}
        .info
            .date(v-if="data.date") {{data.date}}
            .stages(v-if="data.stages")
              span(v-for="stg in data.stages" :key="stg.term_id") {{stg.name}}
        h3.t(v-html="data.title")
        .members(v-if="data.members")
            .memb(v-for="memb in data.members" :key="memb.id")
              NuxtLink(v-if="memb.url" :to="memb.url" v-html="memb.title")
              span(v-else v-html="memb.title")
    .r
        .wish
            Button(@click.native.prevent="triggerWish" :class="{active:wishlist.includes(data.id) }" color="pinktrans" :text="btnText")
                template(slot="left")
                    heart
        .more(@click="openInfo") {{$t('readmore')}}
</template>

<script>

import Button from '@/components/Elements/Button.vue';
import heart from '~/assets/svg/heart.svg';
import clock from '~/assets/svg/clock.svg';
import { openProgramModal } from '@/components/Modal/ProgramModal/openModal.js';
import { mapGetters } from 'vuex';
import moment from 'moment';
export default {

  name: 'QuickProgram',
  props: ['data'],
  components: {
    Button,
    heart,
    clock
  },
  data() {
    return {
      time: false,
      ended: false,
      isactive: false

    };
  },
  computed: {
    ...mapGetters('User', [
        'wishlist',
    ]),
    btnText() {
      if(this.wishlist.includes(this.data.id)) {
        return this.$t('wishlist')

      } else {
        return this.$t('addwishlist')
      }
    },
  },
  created() {
    setInterval(this.currentTime, 1000);
  },
  methods: {
    triggerWish() {
      this.$store.commit('User/setWishlist', { id: this.data.id});
    },
    openInfo() {
      openProgramModal(this.$vfm, this.data ).then(() => {
      });
    },
    currentTime() {
      this.time = moment().format('HH:mm')
      this.ended = moment(this.data.end_date_time).isBefore(moment())
      this.isactive = moment().isBetween(moment(this.data.start_date_time), moment(this.data.end_date_time))
    }
  },
};
</script>

<style scoped lang="scss">

.memb {
  :deep() {
    a {
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
.item {
  background: #FFFFFF;
  padding: 30px 35px 40px 53px;
  display: flex;
  flex-wrap: wrap;
  transition: 0.3s all;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    width: 18px;
    background: #10A7DE;
  }

  &.dark-blue {
    &:before {
      background: #005C85;
    }
  }
  &.pink {
    &:before {
      background: #DA85B6;
    }
  }
  &.odd {
    &:before {
      opacity: 0.3;
    }
  }

  .clock {
    display: flex;
    align-items: center;
    min-height: 30px;
    color: #fff;
    background: #DA85B6;
    border-radius: 15px;
    padding: 4px 8px;
    position: absolute;
    left: -100px;
    top: 41px;
    z-index: -1;
    width: 78px;
    transition: 0.3s all;
    transform: translateX(100px);
    opacity: 0;

    &.on {
      opacity: 1;
      transform: translateX(0);
    }

    &:after {
      content: '';
      position: absolute;
      height: 1px;
      width: 22px;
      z-index: 2;
      background: #DA85B6;
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
    }

    .ic {
      display: flex;
      margin-right: 4px;
    }
  }

  &.odd {
    background: rgba(220, 231, 238, 0.5);
  }

  .t {
    max-width: 435px;
    margin-bottom: 0;
    text-transform: uppercase;
  }

  .r {
    width: 190px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .l {
    width: calc(100% - 210px);
    margin-right: 20px;
  }

  .more {
    text-transform: uppercase;
    color: #DA85B6;
    font-family: 'MyriadPro';
    text-align: right;
    cursor: pointer;
    font-weight: 400;
  }

  .time {
    color: #005C85;
    font-size: 18px;
    line-height: 18px;
    max-width: 150px;
    width: 100%;
    border-bottom: 1px solid #8E9EA7;
    padding-bottom: 8px;
    margin-bottom: 8px;
  }

  .info {

    font-size: 12px;
    line-height: 16px;
    margin-bottom: 32px;
  }

  .members {
    margin-top: 10px;
  }
  .stages {
    display: flex;
    flex-wrap: wrap;

    > * {

      &:not(:last-child) {
        margin-right: 4px;
        &:after {
          content: ',';
        }
      }
    }
  }

  .wish {
    text-align: right;
    :deep(){
        .btn {
            &:hover {
                svg {
                    fill: #fff;
                }
            }

            &.active {
              background: #DA85B6;
              color: #fff;

              &:hover {
                background: #c478a4;
              }
              svg {
                  fill: #fff;
              }
            }
        }
    }
  }
}



@media screen and (max-width: 768px) {
  .item {
    padding: 20px 20px 20px 30px;

    &:before {
      width: 10px;
    }
    .l {
        width: 100%;
        margin-right: 0;
    }
    .r {
        width: 100%;
        margin-top: 15px;
        flex-direction: row;
        align-items: center;
    }

    .time {
        border: none;
        max-width: 100%;
        padding-bottom: 0;
    }

    .info {
        border-bottom: 1px solid #8E9EA7;
        max-width: 100%;
        padding-bottom: 15px;
        margin-bottom: 15px;
        display: flex;
        flex-wrap: wrap;
    }

    .date {
        margin-right: 4px;
    }

    .members {
        margin-top: 15px;
        font-size: 12px;
        line-height: 16px;
    }
    .more {
        font-size: 12px;
        line-height: 16px;
    }

    .clock {
      flex-direction: column;
      width: 36px;
      left: -46px;
      font-size: 12px;
      line-height: 12px;
      padding: 10px 2px;
      border-radius: 18px;

      .ic {
        margin-right: 0;
        margin-bottom: 4px;
      }

      &:after {
        width: 10px;
      }
    }
  }
}
</style>
