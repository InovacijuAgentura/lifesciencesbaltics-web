import Cookies from 'js-cookie';

export default function({ $gtm, route }) {

  $gtm.init('GTM-PNLXVGG9');
  
  // const statistika = Cookies.get('cookiestatistics');
  // let statistika_variable = 'denied';
  // if(statistika && (statistika === 1 || statistika === '1')) {
  //   statistika_variable = 'granted';
  // }

  // const rinkodara = Cookies.get('cookiemarketing');
  // let rinkodara_variable = 'denied';
  // if(rinkodara && (rinkodara === 1 || rinkodara === '1')) {
  //   rinkodara_variable = 'granted';
  // }

  // const preference = Cookies.get('cookiepreferences');
  // let preference_variable = 'denied';
  // if(preference && (preference === 1 || preference === '1')) {
  //   preference_variable = 'granted';
  // }
  // // kolkas nesutiko
  // const hidecookiebar = Cookies.get('hidecookiebar');
  // if(!hidecookiebar) {
  //   gtag('consent', 'default', {
  //     'ad_storage': 'denied',
  //     'ad_user_data': 'denied',
  //     'ad_personalization': 'denied',
  //     'analytics_storage': 'denied',
  //     'functionality_storage': 'denied',
  //     'personalization_storage': 'denied',
  //     'security_storage': 'granted'
  //   });
  // } else {
  //   gtag('consent', 'update', {
  //     'ad_storage': rinkodara_variable,
  //     'ad_user_data': rinkodara_variable,
  //     'ad_personalization': rinkodara_variable,
  //     'analytics_storage': statistika_variable,
  //     'functionality_storage': preference_variable,
  //     'personalization_storage': preference_variable,
  //     'security_storage': 'granted'
  //   });
  //   $gtm.push({ event: 'cookie_consent_update' })
  // }
  // function gtag() {
  //   if (!window.dataLayer){
  //     window.dataLayer = [];
  //   }
  //   window.dataLayer.push(arguments);
  // }
}