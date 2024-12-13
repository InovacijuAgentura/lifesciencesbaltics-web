<template lang="pug">
div.html(v-html="html")
</template>
<script>

export default {

  name: 'Wyswyg',
  props: ['html'],
  components: {
  },
  mounted() {

  },
  data() {
    return {

    };
  },
  computed: {
  },
  methods: {

  },
  beforeDestroy() {
  },
};
</script>

<style scoped lang="scss">

.html {


  ::v-deep ol {

    list-style: decimal;
    padding-left: 15px;
  }

  ::v-deep a {

    text-decoration: underline;

    &:hover {

      text-decoration: none;
    }
  }
  :deep() {
    h3 {
      line-height: 35px;
      font-weight: 300;
    }
    ul {

    list-style: none;

      li {
        padding-left: 20px;
        position: relative;
        &:before {
          position: absolute;
          display: block;
          left: 0;
          top: 8px;
          z-index: 2;
          content: '';
          height: 10px;
          width: 10px;
          border: 2px solid #005C85;
          border-radius: 50%;
          .blue & {
            border-color: #fff;
          }
        }

        + li {
          margin-top: 8px;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {

  .html {

    line-height: 22px;
    :deep() {
      h3 {
        font-size: 18px;
        line-height: 24px;
      }

      ul {

      list-style: none;

        li {
          &:before {
            height: 8px;
            width: 8px;
            top: 7px;
            border: 2px solid #005C85;
            .blue & {
              border-color: #fff;
            }
          }
        }
      }
    }
  }

}
</style>