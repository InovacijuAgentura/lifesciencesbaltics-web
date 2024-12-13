<template lang="pug">
.page
    SingleMember(v-if="data" :data="data")
    client-only
        Preview(v-bind:id="data.id")
</template>

<script>
import SingleMember from '@/components/SingleTemplates/SingleMember.vue';
import Preview from '@/components/Layout/Preview.vue'
import { mapGetters } from 'vuex';
export default {
    name: 'Naujiena',
    async asyncData({ $axios, app, query, params, error, payload  }) {

    if (payload && typeof payload === 'object' && Object.keys(payload).length > 0) return { data: payload.data }
    const slug = params.slug;
    return $axios.get(`/wp-json/data/v1/get_member/${slug}/?lang=${app.i18n.locale}`).then(res => {
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
        SingleMember,
        Preview,
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
            this.$store.commit('Options/setHeaderStyle', 'default');
        }
    },
    methods: {

    },
};
</script>

<style scoped lang="scss">

</style>
