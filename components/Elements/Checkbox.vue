<template lang="pug">
div.checkbox(v-on:click="setactivevalue" :class="[{active:value==true, error:error}, color]")
  div.in
    div.c
      checkmark
    div.text
      slot
</template>

<script>
import checkmark from '~/assets/svg/checkmark.svg';

export default {

  name: 'Checkbox',
  props: {
    color: {},
    placeholder: {},
    value: {},
    error: {},
  },
  components: {
    checkmark,
  },
  created() {
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
    setactivevalue() {
      this.$emit('input', !this.value);
    },
  },
  beforeDestroy() {
  },
};
</script>

<style  scoped lang="scss">
.checkbox{
  user-select: none;
  cursor: pointer;
  .c{
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s all;
    background: #fff;
    width: 20px;
    height: 20px;
    border: 1px solid #fff;
    position: relative;
    margin-right: 15px;
    ::v-deep svg{
      opacity: 0;
    }
  }
  .text{
    ::v-deep a{
      text-decoration: underline;
    }
  }

  .in {

      display: flex;
  }
    &.error{
        .c{
            border-color: #FF0606;
        }
    }
    &.active{
        .c{
            border-color: #000;
            ::v-deep svg{

                opacity: 1;
            }
        }
    }
}

@media screen and (max-width: 768px) {
}
</style>
