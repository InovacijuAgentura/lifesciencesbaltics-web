<template lang="pug">
div.spage
    AcfText(v-if="options && options.general.news_inner_video" :video="options.general.news_inner_video" background_type="video" layout_color="blue")
    .single
        .container
            h1.titleH(v-html="data.title")
            Wyswyg(v-if="data.content" :html="data.content")

   
</template>

<script>
import AcfText from '@/components/AcfBlocks/AcfText.vue'
import Wyswyg from '@/components/Elements/Wyswyg.vue';
import { mapGetters } from 'vuex';
export default {

    name: 'SingleNew',
    props: ['data'],
    components: {
        Wyswyg,
        AcfText
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
    },
    methods: {
    },
};
</script>

<style scoped lang="scss">
.spage {
    :deep() {
        .text {
            padding-top: 120px;
        }
    }
}
.single {
    padding-top: 100px;
    padding-bottom: 100px;
}
@media screen and (max-width: 768px) {
    .single {
        padding-top: 60px;
        padding-bottom: 60px;
    }
}
</style>
