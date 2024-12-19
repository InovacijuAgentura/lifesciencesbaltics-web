<template lang="pug">
div.header(:class="[{min:min}, headerStyle]")
  div.full-container
    div.left
      n-link(to="/").logo
        logoICO
    div.right
      Button(v-if="options && options.general.tickets_page" :to="options.general.tickets_page.url" :href="options.general.tickets_page.url" :text="options.general.tickets_page.title"  :target="options.general.tickets_page.target")
        template(slot="left")
          ticket
      div.hamburger-container
        div.hamburgerc
          .hamburger.hamburger--collapse(@click="openHamburgerMenu" :class="{active:hamburgerOpen}")
            div.inner
              span.bar
              span.bar
              span.bar
    transition(name="menu" v-bind:duration="{ enter: 300, leave: 300 }")
      div.hamburgerMenu(v-if="hamburgerOpen")
        .wrp(v-on-clickaway="closeHamburger")
          ul(v-if="menu && menu.primary && menu.primary.length").menu
            li(v-for="(item, index) in menu.primary"  :class="{active: subulactive && subulactive.some(e => e === index)}" :key="index")
              NuxtLinkOrA(:url="item.url" :target="item.target")
                span(v-html="item.title")
                .ic
                  arrow_right_menu
            //- div.i(v-if="item.target && item.target === '_blank'")
            //-   a(v-bind:href="item.url" target="_BLANK") {{item.title}}
            //-   div.arrow(v-if="item.children && item.children.length > 0"  @click="triggerOpen(index)")
            //-     arrowICO
            //- div.i(v-else-if="item.url != '#/'")
            //-   NuxtLink( v-bind:to="item.url") {{item.title}}
            //-   div.arrow(v-if="item.children && item.children.length > 0"  @click="triggerOpen(index)")
            //-     arrowICO
            //- div.i(v-else)
            //-   span {{item.title}}
            //-   div.arrow(v-if="item.children && item.children.length > 0"  @click="triggerOpen(index)")
            //-     arrowICO
            //- ul(v-if="item.children && item.children.length > 0").subul
            //-   li(v-for="i in item.children")
            //-     NuxtLinkOrA(:url="i.url" :target="i.target")
            //-       span(v-html="i.title")
</template>

<script>


import { mapGetters } from 'vuex';
import logoICO from '~/assets/svg/logo_date.svg';
import ticket from '~/assets/svg/ticket.svg';
import Button from '@/components/Elements/Button.vue';
import NuxtLinkOrA from '@/components/Elements/NuxtLinkOrA.vue';
import { directive as onClickaway } from 'vue-clickaway';
import arrow_right_menu from '~/assets/svg/arrow_right_menu.svg';

export default {

  name: 'HeaderMain',
  components: {
    logoICO,
    ticket,
    Button,
    NuxtLinkOrA,
    arrow_right_menu
  },
    directives: {
        onClickaway,
    },
  created() {
    if (process.client) {
      window.onscroll = () => { // eslint-disable-line
        this.scroll();
      }
    }
  },
  mounted() {
    this.scroll();
  },
  data() {
    return {
      min: false,
      hamburgerOpen: false,
      subulactive: [],
    };
  },
  computed: {
    ...mapGetters('Options', [
      'options',
      'headerStyle'
    ]),
    ...mapGetters('Menu', {
      menu: 'menu',
    }),
  },
  methods: {
    scroll() {
      if (window.scrollY <= 0) { // eslint-disable-line
        this.min = false;
      } else {
        this.min = true
      }
    },
    openHamburgerMenu() {
      this.hamburgerOpen = !this.hamburgerOpen;
    },
    closeHamburger() {
      this.hamburgerOpen = false
    },
    triggerOpen(val) {
      const index = this.subulactive.findIndex(e => e === val);

      if (index !== -1) {
        this.subulactive.splice(index, 1);
      } else {
        this.subulactive.push(val);
      }
    },
  },
  watch: {
    '$route'() {
      this.hamburgerOpen = false;
      this.min = false;
      this.scroll();
    },
  },

};
</script>

<style scoped lang="scss">
$hamburger-color:                        #000;
$hamburger-size:                         32px;
$hamburger-thickness:                    1px;
$hamburger-background:                   transparent;
$hamburger-color-active:                    #DA85B6;
$hamburger-background-transition-speed:  0.1s;
$hamburger-opacity-transition-speed:     0.1s;
$hamburger-animation-speed:              1;
$hamburger-padding:                      4px;
@import "~delicious-hamburgers/scss/base";
@import "~delicious-hamburgers/scss/animations/collapse";
.header {

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 115px;
  background: #fff;
  z-index: 50;
  transition: 0.3s all;

  &.min {
    height: 80px;

    .logo {
      svg {
        transform: none;
      }
    }
  }

  &:not(.min) {

    &.trans {

      background: transparent;

      .logo {
        svg {
          fill: #fff;
        }
      }


      .hamburger {

        span.bar {

          &:before {

            background-color: #fff;
          }
          &:nth-child(1),
          &:nth-child(3) {
            background: none;
          }
        }

        &.active {
          span.bar {

            &:before {

              background-color: #DA85B6;
            }
          }
        }
      }
    }
  }

  .full-container {

    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 100%;
  }

  .logo {

    display: flex;
    align-items: center;
    width: 80%;
    svg {
      transition: 0.3s all;
      transform: scale(1.3);
      transform-origin: left center;
    }
  }
  .hamburger-container {
    position: relative;
    z-index: 100;
  }

  .right {

    display: flex;
    flex-wrap: wrap;
    align-items: center;
      width: calc(100% - 200px);
      justify-content: flex-end;

    .btn {
      margin-right: 16px;
      min-height: 38px;
    }
  }

  .left {

    width: 200px;
  }

}

.menu {

  font-size: 35px;
  line-height: 35px;

  > * {

    + * {
      margin-top: 20px;
    }
  }

  > li {
    position: relative;
    &:hover {
      .subul {
        transform: scaleX(1) scaleY(1);
      }   
    }
    > a,
    > span {

      transition: .3s all;
      cursor: pointer;
      display: flex;
      align-items: center;

      &:hover,
      &.nuxt-link-exact-active {
        color: #DA85B6;

        .ic {
          opacity: 1;
          transform: translateX(0);
        }
      }

      .ic {

        margin-left: 8px;
        opacity: 0;
        transition: .3s all;
        transform: translateX(-8px);
        display: flex;
      }
    }
  }
}

.menu-enter-active, .menu-leave-active{
  transition: all 0.3s;
}
  
.menu-enter, .menu-leave-to {
  transform: translateX(100%);
}

.hamburgerMenu {

  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 99;
  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.2);
  .wrp {
    background: #fff;
    width: 50%;
    margin-left: auto;
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    padding: 100px 70px;
  }
}
@media screen and (max-width: 1200px) {
  .hamburgerMenu {

    .wrp {
      width: 600px;
    }
  }

  
}

@media screen and (max-width: 768px) {
  .header {
    height: 80px;

    .left {
      width: 170px;
      margin-right: 10px;
    }
    .logo {
      svg {
        transform: none;
      }
    }
    .right {
      width: calc(100% - 180px);
      justify-content: flex-end;
    }
  }
  .hamburgerMenu {
    .wrp {
      max-width: 600px;
      width: 100%;
      padding: 100px 20px 40px;
    }
  }
  .menu {
    font-size: 25px;
    line-height: 25px;
    > li {
      > a,
      > span {
        .ic {
          display: none;
        }
      }
    }
  }
}
@media screen and (max-width: 480px) {
  .header {
    .right {
      .btn {
        :deep() {

          .ico {
            margin-right: 0;
          }
          .text {
            display: none;
          }
        }
      }
    }
  }
}
</style>
