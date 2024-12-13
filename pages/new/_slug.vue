<template lang="pug">
.page
    SingleNew(v-if="data" :data="data")
    DynamicBlokcs(v-if="data && data.blocks" :blocks="data.blocks")
    client-only
        Preview(v-bind:id="data.id")
</template>

<script>
import SingleNew from '@/components/SingleTemplates/SingleNew.vue';
import DynamicBlokcs from '@/components/AcfBlocks/_DynamicBlokcs.vue';
import Preview from '@/components/Layout/Preview.vue'
import { mapGetters } from 'vuex';
export default {
    name: 'Naujiena',
    async asyncData({ $axios, app, query, params, error, payload  }) {

    if (payload && typeof payload === 'object' && Object.keys(payload).length > 0) return { data: payload.data }
    const slug = params.slug;
    return $axios.get(`/wp-json/data/v1/get_new/${slug}/?lang=${app.i18n.locale}`).then(res => {
        if (res.data && res.data.status === true) {
        return { data: res.data.data  }
        } else {
        error({ statusCode: 404, message: 'Page not found' })
        }
    }).catch(e => {
        error({ statusCode: 404, message: 'Page not found' })
    })
    },
    head() {
    let image = '';
    if (this.data.image) {
        image = this.data.image;
    }
    let noindex = '';
    if (this.data && this.data.noindex === true) {
        noindex = {
            name: 'robots',
            content: 'noindex'
        };
    }
    return {
        title: this.data.meta_title,
        meta: [
            {
                name: 'title',
                property: 'og:title',
                content:  this.data.meta_title
            },
            {
                name: 'description',
                property: 'og:description',
                content: this.data.meta_desc
            },
            {
                name: 'image',
                property: 'og:image',
                content:  image
            },
            noindex,
        ]
    }
    },
    components: {
        SingleNew,
        Preview,
        DynamicBlokcs
    },
    data() {
        return {

        };
    },
    computed: {
        ...mapGetters('Options', [
            'options',
        ]),
    },
    mounted() {
        if(this.options && this.options.general.team_inner_video) {
            this.$store.commit('Options/setHeaderStyle', 'trans');
        } else {
            this.$store.commit('Options/setHeaderStyle', this.data.header_style);
        }
    },
    methods: {

    },
};
</script>

<style scoped lang="scss">

</style>
