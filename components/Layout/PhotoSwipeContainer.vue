<template lang="pug">
client-only
    div
        PreviewV5(v-if="list && list.length > 0" ref="previewer" :list="list" v-bind:index="index" :options="options" v-on:on-close="close")

</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'PhotoSwipeContainer',
    components: {
    PreviewV5: () =>
        import('@/components/Elements/PreviewV5.vue')
        .then(m => m)
        .catch(),
    },
    data() {
    return {
        options: {
        mainClass: 'pswp--white',
        // index: 0
        },
    };
    },
    computed: {
        ...mapGetters('PopUpImages', {
            list: 'images',
            index: 'index',
        }),
    },
    created() {
    },
    methods: {
        close() {
            this.$store.dispatch('PopUpImages/set', []);
        },
    },
    watch: {
    },
};
</script>

<style lang="stylus">

</style>
