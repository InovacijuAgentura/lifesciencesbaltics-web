<template lang="pug">
div.page
  div.container
    div(v-if="error.statusCode === 404").notf
      div
        h1.nr 404
        div.text {{ $t('errorpage') }}
      div.btnc
      Button(:to="localePath('/')" :text="$t('gohomepage')")
    div(v-else)
      h1.text {{ $t('errorocc') }}
</template>

<script>
import Button from '@/components/Elements/Button.vue';
export default {
  props: ['error'],
  components: {
    Button
  },
  layout: 'default',
  created() {
    this.$store.dispatch('Options/get', this.$i18n.locale);
    this.$store.dispatch('Menu/get', this.$i18n.locale);
  },
  mounted() {
    this.$store.commit('Options/setHeaderStyle', 'default');
  }
}
</script>


<style scoped lang="scss">
.container {

padding-top: 60px;
padding-bottom: 60px;
}
.notf {

  text-align: center;

  .nr {
    font-size: 120px;
    line-height: 120px;
    font-weight: 800;
    margin-bottom: 30px;
  }

  .text {

    text-align: center;
  }

  .btnc {

    margin-top: 20px;
  }
}
</style>