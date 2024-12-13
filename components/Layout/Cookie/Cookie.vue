<template lang="pug">
div
  div.advanced(v-on:click.prevent="openpopup")
    settings(style="width:22px;height:22px;fill:#000")
  div.cc(v-if="show")
    .box
      .wrap
        .header
          div(@click="active = 'consent'" :class="{on:active === 'consent'}") {{$t('cookie.consent')}}
          div(@click="active = 'details'" :class="{on:active === 'details'}") {{$t('cookie.details')}}
          div(@click="active = 'about'" :class="{on:active === 'about'}") {{$t('cookie.about')}}
        .c
          .scroll
            .consent(v-if="active === 'consent'")
              h3 {{$t('cookie.title')}}
              .text 
                span {{$t('cookie.content')}}
                a(v-if="options && options.general.cookie_policy_page" target='_blank' :href="options.general.cookie_policy_page.url") {{$t('cookie.cookiepolicy')}}.
            .details(v-if="active === 'details'")
              .item
                .wrp
                  .t {{$t('cookie.necessary')}}
                  YesNo(v-model="cookienecessary" v-bind:disabled="true")
                .text {{$t('cookie.necessarytext')}}
              .item
                .wrp
                  .t {{$t('cookie.preferences')}} 
                  YesNo(v-model="cookiepreferences")
                .text {{$t('cookie.preferencestext')}}
              .item
                .wrp
                  .t {{$t('cookie.statistics')}} 
                  YesNo(v-model="cookiestatistics")
                .text {{$t('cookie.statisticstext')}}
              .item
                .wrp
                  .t {{$t('cookie.marketing')}} 
                  YesNo(v-model="cookiemarketing")
                .text {{$t('cookie.marketingtext')}}
              .item
                .wrp
                  .t {{$t('cookie.unclassified')}} 
                .text {{$t('cookie.unclassifiedtext')}}
            .about(v-if="active === 'about'")
              .text(v-html="$t('cookie.aboutext')")
        .btnc
          Button(v-on:click.native.prevent="deny" :text="$t('cookie.btn1')" color="pinktrans")
          Button(v-if="active != 'details'" v-on:click.native.prevent="customize"  :text="$t('cookie.btn2')" color="pinktrans")
          Button(v-if="active === 'details'" v-on:click.native.prevent="allowselected"  :text="$t('cookie.btn3')" color="pinktrans")
          Button(v-on:click.native.prevent="allow"  :text="$t('cookie.btn4')")
</template>
<script>
import { mapGetters } from 'vuex';
import settings from '~/assets/svg/settings.svg';
import Cookies from 'js-cookie';
import YesNo from '@/components/Elements/YesNo.vue';
import Button from '@/components/Elements/Button.vue';

export default {

  name: 'Cookie',
  components: {
    settings,
    YesNo,
    Button
  },
  directives: {
  },
  mounted() {
    const hidecookiebar = Cookies.get('hidecookiebar');
    if (hidecookiebar === '1') {
      this.show = false;
      this.$gtm.push({ event: 'cookie_consent', 'gtm.uniqueEventId': 11 })
    }
    const cookiepreferences = Cookies.get('cookiepreferences');
    if (cookiepreferences === '1') {
      this.cookiepreferences = true;
    }
    const cookiestatistics = Cookies.get('cookiestatistics');
    if (cookiestatistics === '1') {
      this.cookiestatistics = true;
    }
    const cookiemarketing = Cookies.get('cookiemarketing');
    if (cookiemarketing === '1') {
      this.cookiemarketing = true;
    }
  },
  data() {
    return {
      active: 'consent',
      show: true,
      cookienecessary: true,
      cookiepreferences: false,
      cookiestatistics: false,
      cookiemarketing: false,
      show_settings: false,
    };
  },
  computed: {
    ...mapGetters('Options', [
      'options',
    ]),
  },
  methods: {
    deny() {
      Cookies.set('hidecookiebar', 1, { expires: 356 });
      Cookies.set('cookienecessary', 1, { expires: 356 });
      Cookies.set('cookiepreferences', 0, { expires: 356 });
      Cookies.set('cookiestatistics', 0, { expires: 356 });
      Cookies.set('cookiemarketing', 0, { expires: 356 });
      this.cookiemarketing = false
      this.cookiepreferences = false
      this.cookiestatistics = false
      this.show = false;
      this.disable()
    },
    allow() {
      Cookies.set('hidecookiebar', 1, { expires: 356 });
      Cookies.set('cookienecessary', 1, { expires: 356 });
      Cookies.set('cookiepreferences', 1, { expires: 356 });
      Cookies.set('cookiestatistics', 1, { expires: 356 });
      Cookies.set('cookiemarketing', 1, { expires: 356 });
      this.cookiemarketing = true
      this.cookiepreferences = true
      this.cookiestatistics = true
      this.show = false;
      this.enable();
    },
    allowselected() {
      if(this.cookiepreferences) {
        Cookies.set('cookiepreferences', 1, { expires: 356 });
      } else {
        Cookies.set('cookiepreferences', 0, { expires: 356 });
      }
      if(this.cookiestatistics) {
        Cookies.set('cookiestatistics', 1, { expires: 356 });
      } else {
        Cookies.set('cookiestatistics', 0, { expires: 356 });
      }
      if(this.cookiemarketing) {
        Cookies.set('cookiemarketing', 1, { expires: 356 });
      
      } else {
        Cookies.set('cookiemarketing', 0, { expires: 356 });
      }
      Cookies.set('cookienecessary', 1, { expires: 356 });
      Cookies.set('hidecookiebar', 1, { expires: 356 });
      this.show = false;
      this.enable()
    },
    enable() {
      const statistika = Cookies.get('cookiestatistics');
      const rinkodara = Cookies.get('cookiemarketing');
      const preference = Cookies.get('cookiepreferences');
      let statistika_variable = 'denied';
      if(statistika && (statistika === 1 || statistika === '1')) {
        statistika_variable = 'granted';
      }
      let rinkodara_variable = 'denied';
      if(rinkodara && (rinkodara === 1 || rinkodara === '1')) {
        rinkodara_variable = 'granted';
      }
      let preference_variable = 'denied';
      if(preference && (preference === 1 || preference === '1')) {
        preference_variable = 'granted';
      }
      gtag('consent', 'update', {
        'ad_storage': rinkodara_variable,
        'ad_user_data': rinkodara_variable,
        'ad_personalization': rinkodara_variable,
        'analytics_storage': statistika_variable,
        'functionality_storage': preference_variable,
        'personalization_storage': preference_variable,
        'security_storage': 'granted'
      });
      function gtag() {
        window.dataLayer.push(arguments);
      }
      this.active = "consent"
      this.$gtm.push({ event: 'cookie_consent_update' })
      this.$gtm.push({ event: 'cookie_consent', 'gtm.uniqueEventId': 11 })
    },
    disable() {
      gtag('consent', 'update', {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'analytics_storage': 'denied',
        'functionality_storage': 'denied',
        'personalization_storage': 'denied',
        'security_storage': 'granted'
      });
      function gtag() {
        window.dataLayer.push(arguments);
      }
      this.active = "consent"
      this.$gtm.push({ event: 'cookie_consent_update' })
      this.$gtm.push({ event: 'cookie_consent', 'gtm.uniqueEventId': 11 })
    },
    customize() {
      this.active ='details'
    },
    openpopup() {
      this.show = true;
    },
  },
  beforeDestroy() {
  },
};
</script>

<style scoped lang="scss">
.advanced {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 10px;
  bottom: 10px;
  z-index: 9;
  cursor: pointer;
}
.cc {

  position: fixed;
    z-index: 10001;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .75);
    display: flex;
    justify-content: center;
    align-items: center;
    
    .box {
      max-width: 900px;
      width: calc(100% - 16px);
      max-height: calc(100% - 16px);
      overflow: hidden;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 32px 68px rgba(0,0,0,.3);
    }
}

.wrap {
  align-items: flex-start;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.c {
  padding: 5px;
  width: 100%;
}

.scroll {
  padding: 15px;
  overflow-y: auto;
  max-height: calc(100dvh - 189px);
}

.consent {

  h3 {
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 14px;
  }

  span {
    padding-right: 4px;
  }

  a {
    color: #005C85;
    font-weight: 700;
  }
}

.item {
  .wrp {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
      margin-bottom: 10px;

    .t {
      width: calc(100% - 80px);
      margin-right: 20px;
      font-weight: 700;
    }
  }

  + * {

    border-top: 1px solid #BFBFBF;
    padding-top: 20px;
    margin-top: 20px;
  }
}

.header {
  display: flex;
  border-bottom: 1px solid #BFBFBF;
  border-top: 1px solid #BFBFBF;
  margin-top: 20px;
  width: 100%;
  > * {
    flex: 1;
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 700;
    padding: 5px 10px;
    line-height: 16px;
    cursor: pointer;
    border-bottom: 1px solid transparent;

    &:hover {
      color: #005C85;
    }

    &.on {
      color: #005C85;
      border-bottom: 1px solid #005C85;
    }
    
  }
}

.btnc {

  width: calc(100% + 10px);
  padding: 20px;
  border-top: 1px solid #BFBFBF;
  display: flex;
    margin: 0 -5px;

  > * {
    flex: 1;
    margin: 0 5px;
    min-width: auto;
    padding: 7px 10px 4px;
  }
}

@media screen and ( min-width: 1280px ) {
  .scroll {
    max-height: calc(75dvh - 189px);
  }
}

</style>
