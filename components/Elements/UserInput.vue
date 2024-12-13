<template lang="pug">
div.select(v-bind:class="[{error:error, disabled:disabled, placeholder:placeholder, focus:focus},color, height, {notempty:value}]")
  div.placeholder(v-if="placeholder" v-on:click="(event)=> focusELdealay()") {{placeholder}}
  input(ref="input" v-if="type=='input'"
        v-bind:value="value"
        v-on:keyup.enter="handleClick"
        v-on:input="updateValue($event.target.value)" v-on:blur="blur" v-on:focus="focusEl" autocomplete="off")
  input(ref="input" type="password" v-if="type=='password'"
        v-bind:value="value"
        v-on:keyup.enter="handleClick"
        v-on:input="updateValue($event.target.value)" v-on:blur="blur" v-on:focus="focusEl" autocomplete="off")
  input(ref="input" type="number" v-if="type=='number'"
        v-bind:value="value"
        v-on:keyup.enter="handleClick"
        v-on:input="updateValue($event.target.value)" v-on:blur="blur" v-on:focus="focusEl" autocomplete="off")
  textarea(ref="input" v-if="type=='textarea'" v-on:blur="blur" v-on:focus="focusEl"
           v-bind:value="value"
           v-on:keyup.enter="handleClick"
           v-on:input="updateValue($event.target.value)" autocomplete="off")
</template>

<script>

export default {

  name: 'UserInput',
  props: [
    'type',
    'error',
    'value',
    'disabled',
    'placeholder',
    'color',
    'height'
  ],
  components: {
  },
  created() {},
  data() {
    return {
      focus: false,
    };
  },
  computed: {
  },
  methods: {
    updateValue(value) {
      if (this.disabled !== true) {
        this.$emit('input', value);
      }
    },
    focusELdealay() {
      setTimeout(() => {
        this.focus = true;
      }, 20);
    },
    blur() {
      this.focus = false;
    },
    focusEl() {
      this.focus = true;
    },
    handleClick() {
      this.$emit('click');
    },
  },
  watch: {
    focus(to) {
      if (to === true) {
        this.$refs.input.focus();
      } else {
        this.$refs.input.blur();
      }
    },
  },  
};

</script>

<style scoped="" lang="scss">

.select {

  position: relative;
  &.disabled{
    pointer-events: none;

    input,textarea {
      color: #9FA8B7;
    }
  }

  .placeholder {
    transition: all .3s;
    transform-origin: left top;
    position: absolute;
    left: 0;
    top: 5px;
  }

  &.focus,
  &.notempty {

    .placeholder {

      transform: scale(0.7);
      top: -10px;
    }
  }

  input,textarea {
    background: transparent;
    -webkit-appearance: none;
    outline: none;
    border-radius: 0;
    border:0;
    transition: 0.3s all;
    height: 32px;
    width: 100%;
    display: flex;
    align-items: center;
    font-family: inherit;
    border-bottom: 1px solid #B2D6F4;
     -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;

    &::placeholder {
        color: #000;
    }
  }

  &:after {
    transform-origin: center bottom;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #000;
    transform: scaleX(1) scaleY(0);
    transition: all .3s;
  }

  &.error {
    input,textarea {
      border-color: #FF0606;
    }
    &:after {

      background-color: #FF0606;
    }
    .placeholder {
      color: #FF0606;
    }
  }

  &.focus {

    &:after {

      transform: scaleX(1) scaleY(1);
    }
  }

  textarea{
      min-height: 58px;
      resize: none;
  }

  &.large {

    textarea{
        min-height: 78px;
    }
  }
}
</style>
