<template lang="pug">
div.tmpage
    AcfText(v-if="options && options.general.team_inner_video" :video="options.general.team_inner_video" background_type="video" layout_color="blue")
    .single
        .container
            .grid
                div
                    h1.titleH(v-html="data.title")
                    h3.sub(v-if="data.job_title" v-html="data.job_title")
                    Wyswyg(v-if="data.content" :html="data.content")
                .img(v-if="data.image")
                    wpImageSmall(:image="data.image" :width="690" :height="774" :cover="true")
</template>

<script>
import Wyswyg from '@/components/Elements/Wyswyg.vue';
import AcfText from '@/components/AcfBlocks/AcfText.vue';
import wpImageSmall from '@/components/Elements/wpImageSmall.vue';
import { mapGetters } from 'vuex'; 
export default {

    name: 'SingleMember',
    props: ['data'],
    components: {
        Wyswyg,
        AcfText,
        wpImageSmall
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

.single {
    padding-top: 100px;
    padding-bottom: 100px;
}

.tmpage {
    :deep() {
        .text {
            padding-top: 120px;
        }
    }
}

.grid {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -20px;

    > * {
        margin: 0 20px;

        &:nth-child(1) {
            width: calc(100% - 480px);
        }
    }

    .img {
        width: 400px;
    }
}
@media screen and (max-width: 768px) {
    .tmpage {
        :deep() {
            .text {
                padding-top: 125px;
            }
        }
    }
    .single {
        padding-top: 60px;
        padding-bottom: 60px;
    }

    .grid {
        margin: 0;

        > * {
            margin: 0;

            &:nth-child(1) {
                width: 100%;
                order: 2;
            }
        }

        .img {
            width: 100%;
            max-width: 300px;
            order: 1;
            margin-bottom: 30px;
        }
    }
}
</style>
