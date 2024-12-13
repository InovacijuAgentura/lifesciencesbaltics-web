<template lang="pug">
div.newsletter(:class="[padding_top, padding_bottom]")
  div.container(:class="[container_size]")
    .grid(:class="{odd:inline}")
      h1.titleH(v-if="title && use_h1_title" v-html="title")
      h2.titleH(v-else-if="title" v-html="title")
      .form
        .row
          UserInput(v-model="email" :error="emailError" type="input" @click="submit" :placeholder="$t('email')")
        .row
            Checkbox(v-model="terms" :error="termsError")
                span {{ $t('newsletterterms') }} 
                NuxtLinkOrA.link(v-if="options && options.general.privacy_policy_page"  v-bind:url="options.general.privacy_policy_page.url" target="_blank") {{ $t('newsletterlink') }}
                span .
      .foot
          .btnc
              Button(@click.native.prevent="submit" :loading="btnload" :text="$t('newslettersend')")
          .end(v-if="end" v-html="end")
</template>

<script>

import isEmail from 'validator/lib/isEmail';
import UserInput from '@/components/Elements/UserInput.vue';
import Button from '@/components/Elements/Button.vue';
import NuxtLinkOrA from '@/components/Elements/NuxtLinkOrA.vue';
import Checkbox from '@/components/Elements/Checkbox.vue';
import { mapGetters } from 'vuex';

export default {

  name: 'AcfNewsletter',
  props: ['title','use_h1_title','padding_top','inline', 'padding_bottom', 'container_size'],
  components: {
    UserInput,
    Button,
    Checkbox,
    NuxtLinkOrA
  },
  data() {
    return {
      email: '',
      emailError: false,
      end:'',
      btnload: false,
      terms: false,
      termsError: false,
    };
  },
  computed: {
    ...mapGetters('Options', [
        'options',
    ]),
  },
  created() {
  },
  methods: {

    submit() {

      this.end = '';
      this.termsError = false;
      this.emailError = false;

      let valid = true;
      if (!this.terms) {       
          this.termsError = true;
          valid = false;
      }
      if (!isEmail(this.email)) {       
          this.emailError = true;
          valid = false;
      }

      if(valid) {
          this.btnload = true;
          this.$axios.post(`wp-json/data/v1/newsletter_form/`, {email: this.email}).then((rsp) => {
              this.btnload = false;
              if (rsp.data.status === true) {
                  this.email = '';
                  this.terms = false
                  this.end = '<span class="scc">'+this.$t('emailsend')+'</span>';
              } else {
                  this.end = '<span class="err">'+this.$t('emailretry')+'</span>';
              }
          }).catch((error) => {
              this.end = '<span class="err">'+this.$t('emailretry')+'</span>';
              this.btnload = false;
          });  
        }
      }
  },
};
</script>

<style scoped lang="scss">
.foot {
    position: relative;
}
.end {
    position: absolute;
    top: 100%;
    z-index: 2;
    font-size: 12px;
    line-height: 14px;
    margin-top: 5px;
    left: 0;
    right: 0;
    color: #fff;
    text-align: center;
}

.grid {
  &.odd {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 -10px;

    > * {
      margin: 0 10px;
      width: calc(33.333% - 20px);
    }
    .btnc {
      margin-top: 52px;
      text-align: left;
    }
    .titleH {
      margin-bottom: 0;
      text-align: left;
    }

    .end {
      text-align: left;
    }
  }
}
.newsletter {

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

    max-width: 440px;
  }
}
.titleH {
  text-align: center;
  margin-bottom: 50px;
  word-break: break-all;
}


.row {
  + .row {
    margin-top: 20px;
  }
}
.btnc {
  text-align: center;
  margin-top: 40px;

  .btn {
    min-width: 192px;
  }
}

@media screen and (max-width: 1200px) {
  .grid {
    &.odd {
      .titleH {
        font-size: 50px;
        line-height: 50px;
      }
    }
  }

}
@media screen and (max-width: 991px) {

  .grid {
    &.odd {

      > * {
        width: calc(50% - 20px);
      }

      .titleH {
        width: calc(100% - 20px);
        margin-bottom: 20px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .newsletter {

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

  .grid {
    &.odd {

      > * {
        width: calc(100% - 20px);
      }
      .form {
        max-width: 400px;
      }
      .titleH {
        text-align: center;
        font-size: 35px;
        line-height: 35px;
      }

      .btnc {
        margin-top: 30px;
        text-align: center;
      }

      .end {
        text-align: center;
      }
    }
  }
}
</style>
