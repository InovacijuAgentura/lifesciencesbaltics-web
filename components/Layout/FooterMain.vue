<template lang="pug">
div.footer(v-if="options && menu")
  .full-container
    .grid
      .logos
        logo_footer
      .right
        .top(v-if="menu.footer && menu.footer.length")
          ul.menu(v-if="menu.footer && menu.footer.length")
            li(v-for="item in menu.footer" :key="item.ID")
              NuxtLinkOrA(:url="item.url" :target="item.target") {{item.title}}
        .contactwrap
          div(v-if="options.general.footer_contact_info") 
            .main( v-html="options.general.footer_contact_info")
          div(v-if="options.general.footer_contact_small_info") 
            .small(v-html="options.general.footer_contact_small_info")
            .btnc(v-if="options.general.footer_more_button")
              Button(:to="options.general.footer_more_button.url" :href="options.general.footer_more_button.url" :text="options.general.footer_more_button.title" :target="options.general.footer_more_button.target")
    div.copy  
      div © {{year}} {{$t('copyright')}}
        //- NuxtLinkOrA.link(v-if="options.general.privacy_policy_page"  v-bind:url="options.general.privacy_policy_page.url" :target="options.general.privacy_policy_page.target") {{options.general.privacy_policy_page.title}}
        //- span(v-if="options.general.cookie_policy_page && options.general.privacy_policy_page") {{$t('and')}}
        //- NuxtLinkOrA.link(v-if="options.general.cookie_policy_page"  v-bind:url="options.general.cookie_policy_page.url" :target="options.general.cookie_policy_page.target") {{options.general.cookie_policy_page.title}}
        div.small Touched by 
          a(href="https://digitouch.lt/" target="_BLANK") digitouch!
      SocialLinks(v-if="options.general.social_links" :links="options.general.social_links")
      
</template>

<script>
import NuxtLinkOrA from '@/components/Elements/NuxtLinkOrA.vue';
import SocialLinks from '@/components/Elements/SocialLinks.vue';
import Button from '@/components/Elements/Button.vue';
import { mapGetters } from 'vuex';
import logo_footer from '~/assets/svg/logo_footer_new.svg';

export default {

  name: 'FooterMain',
  components: {
    NuxtLinkOrA,
    SocialLinks,
    Button,
    logo_footer
  },
  created() {

  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters('Options', [
      'options',
    ]),
    ...mapGetters('Menu', {
      menu: 'menu',
    }),
    year() {
      const d = new Date();
      return d.getFullYear();
    },
  },
  methods: {

  },

};
</script>

<style scoped lang="scss">
.footer {
  padding: 35px 0;
  background: #000000;
  color: #fff;
  font-size: 14px;
  line-height: 14px;
}
.copy {

  display: flex;
  flex-wrap: wrap;
  line-height: 20px;
  color: #DCE7EE;
  align-items: flex-start;
  border-top: 1px solid #B2D6F4;
  padding-top: 35px;
  margin: 0 -10px;

  > * {
    width: calc(50% - 20px);
    margin: 0 10px;
  }
  .social {
    justify-content: flex-end;
  }

  .link {

    margin-left: 4px;
    color: #10A7DE;

    &:hover {
      text-decoration: underline;
    }

    + span {
      margin-left: 4px;
    }
  }

  .small {
    a {

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.grid {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  .right {
    width: calc(100% - 280px);
  }

  .logos {
    width: 220px;
    max-width: 220px;
    margin-right: 60px;
    display: flex;
    margin-top: 100px;
    svg {
      max-width: 140px;
      margin-left: auto;
    }
    .wrp {

      display: flex;
      flex-wrap: wrap;
      align-items: stretch;
      border: 1px solid #fff;

      > * {

        padding: 6px;
        &:nth-child(1) {

          background: #fff;
        }
      }
    }
  }
}

.contactwrap {
  display: flex;
  flex-wrap: wrap;
  padding: 40px 0 70px;
  line-height: 20px;
  margin: 0 -10px;

  .btnc {
    margin-top: 20px;
  }

  > * {
    width: calc(50% - 20px);
    margin: 0 10px;
  }
  .main {
    max-width: 366px;
    :deep() {
      strong {
        font-weight: 300;
        color: #8E9EA7;
      }
      p:not(:last-child) {
          margin-bottom: 15px;
      }
      a {
        color: #10A7DE;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .small {

    :deep() {
      p:not(:last-child) {
          margin-bottom: 15px;
      }
      a {
        color: #10A7DE;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}


.menu {
  display: flex;
  flex-wrap: wrap;
  text-transform: uppercase;
  margin: 0 -12px -12px;
  font-family: 'MyriadPro'; 

  > * {
    margin: 0 12px 12px;

    a {
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.top {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  border-bottom: 1px solid #B2D6F4;
  padding-bottom: 40px;
  padding-top: 17px;
}
@media screen and (max-width: 991px) {
  .grid {
    .logos {
      width: 100%;
      margin-right: 0;
      margin-bottom: 20px;
      margin-top: 0;
      svg {
        margin-left: 0;
      }
    }
    .right {
      width: 100%;
    }
    .top {
      padding-bottom: 20px;
    }
  }

  .copy {
    margin: 0;
    >div {
      order: 2;
    }
    > * {
      width: 100%;
      margin: 0;

      + * {
        margin-bottom: 20px;
      }
    }
    .social {
      order: 1;
      justify-content: flex-start;
    }
  }
}
@media screen and (max-width: 768px) {

  .footer {
    padding-top: 50px;
  }

 .menu {
  justify-content: flex-start;
  flex-direction: column;
  margin: 0;

  > * {
    margin: 0;

    + * {
      margin-top: 20px;
    }
  }
 }
 .contactwrap {
  padding: 35px 0;
  margin: 0;

  > * {
    width: 100%;
    margin: 0;

    + * {
      margin-top: 30px;
    }
  }
 }
 .copy {


  .social {
    max-width: 200px;
  }
 }

}

</style>
