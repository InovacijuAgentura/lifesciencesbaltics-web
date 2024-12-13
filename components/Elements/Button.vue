<template lang="pug">
component(:is="nlinkOrA" tabindex="0" :to="to" :href="href" :target="targetBlank" :class="[color,size,textColor, {disabled:disabled},{loading:loading}]").btn       
    div.ico(v-if="$slots['left'] && !loading").leftico
        slot(name="left")
    div.text
        div.t(:class="{hide:loading}") {{text}}
        Loader(:color="color" v-if="loading")
    div.ico(v-if="$slots['right'] && !loading").rightico
        slot(name="right")
</template>

<script>
import Loader from '@/components/Elements/Loader.vue';

export default {

  name: 'Btn',
  props: ['href', 'disabled', 'loading', 'text', 'to', 'target', 'color', 'size', 'textColor'],
  components: {
    Loader
  },
  created() {
  },
  data() {
    return {

    };
  },
  computed: {
    nlinkOrA() {
      if (this.to && this.target !== '_blank') {
        return 'NuxtLink';
      }
      return 'a';
    },
    targetBlank(){
      if (this.target === '_BLANK' || this.target === '_blank') {
        return '_BLANK';
      }
      return false;
    }
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
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
    font-family: 'MyriadPro'; 
    svg {
      transition: all 0.3s ease-in-out;
    }

    .leftico{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 8px;
        margin-top: -4px;
        transition: 0.3s all;
    }
    .rightico{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 8px;
        margin-top: -4px;
        transition: 0.3s all;
    }

    &:hover {
        background-color: #c478a4;
        border: 1px solid #c478a4;
    }

  :deep() {
    .loader-default {
      border: solid 3px #fff;
      border-left-color: transparent;
    }
  }
  &:not(.pinktrans) {
  }
  
	&.disabled {
    opacity: 0.9;
		pointer-events: none;
	}
	&.loading {
		pointer-events: none;
        position: relative;

        .t {
            opacity: 0;
        }

        .loader {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 2;
        }

	}

    &.whitetrans {
        background: transparent;
        border: 1px solid #fff;
        color: #fff;
    }

    &.pinktrans {
        background: transparent;
        border: 1px solid #DA85B6;
        color: #DA85B6;

      &:hover {
          background-color: #c478a4;
          border: 1px solid #c478a4;
          color: #fff;
      }
    }

    &.simple {
      background: transparent;
      padding: 0;
      min-height: auto;
      border: none;
      color: #DA85B6;
    }


}

@media screen and (max-width: 768px) {
}

</style>
