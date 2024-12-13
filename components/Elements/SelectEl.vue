<template lang="pug">
div
  div.selectel(:class="[{error:error, disabled:disabled, notempty:value}]")
    div(v-if="label").label {{label}}
    div.after
      arrow
    select(v-model="val" v-on:change="updateValue()")
      option(:value="''" disabled selected) {{placeholder}}
      option(v-for="item in items" :value="item") {{item}}
</template>
<script>
import arrow from '~/assets/svg/arrow_select.svg';
export default {

  name: 'SelectEl',
  props: ['items', 'value', 'placeholder', 'error','disabled', 'label'],
  components: {
    arrow,
  },
  mounted() {

  },
  data() {
    return {
      val: '',
    };
  },
  computed: {
  },
  methods: {
    updateValue() {
      this.$emit('input', this.val);
    },
  },
  watch: {
    value: {
      immediate: true,
      handler(newVal) {
        if (newVal || newVal === '') {
          this.val = newVal;
        }
      },
    },
  },
};
</script>

<style scoped lang="scss">
.label{

    transition: all .3s;
    transform-origin: left top;
    transform: translateY(30px) scale(1);
    pointer-events: none;
}
.selectel{
  position: relative;
  width: 100%;

  &:after {
    transform-origin: center bottom;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #1A1818;
    transform: scaleX(1) scaleY(0);
    transition: all .3s;
  }
  &.disabled{
    pointer-events: none;
  }
  .after{
    pointer-events:none;
    position: absolute;
    bottom: 5px;
    right: 12px;
  }

  &.error {
    &:after {

      background-color: #FF0606;
    }
    .label {
      color: #FF0606;
    }

    select {
      border-color: #FF0606;
    }
  }
  &.focus,
  &.notempty {

    .label {

      transform: translateY(12px) scale(0.7);
    }
  }

  .loading{
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  select{
    cursor: pointer;
    background: #fff;
    -webkit-appearance: none;
    outline: none;
    border-radius: 0;
    border:0;
    transition: 0.3s all;
    height: 36px;
    width: 100%;
    line-height: 26px;
    display: flex;
    align-items: center;
    font-family: inherit;
    border-bottom: 1px solid #BEC6D2;
     -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;

    &::placeholder {
        color: #051519;
    }
    &::-ms-expand {
        display: none;
    }
  }

}

@media screen and (max-width: 768px) {


}

</style>
