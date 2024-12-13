<template lang="pug">
div.preview(v-if="url")
    a(v-bind:href="url" target="_BLANK") Edit page

</template>

<script>

export default {

    name: 'Preview',
    components: {
    },
    props: ['id'],
    data() {
        return {

        };
    },
    computed: {
        url() {
            if (this.id && this.$preview && this.$config && this.$config.axios && this.$config.axios.browserBaseURL) {
            return `${this.$config.axios.browserBaseURL}/wp-admin/post.php?post=${this.id}&action=edit&lang=${this.$i18n.locale}`;
            }
            return false;
        },
    },
    created() {
    },
    methods: {

    },
};
</script>

<style scoped lang="scss">
.preview {
    a {
        color: #fff;
        position: fixed;
        right: 0;
        bottom: 0;
        background: #29B893;
        padding: 20px;
        z-index: 100;
    }
}
</style>
