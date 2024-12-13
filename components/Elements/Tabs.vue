<template lang="pug">
div.items(v-if="items.length > 0")
    div.item(v-if="item.title && item.content" v-for="(item, index) in items" :key="index" :class="{active:active[index] && active[index] === true}")
        div.title(@click="open(index)")
            h3.t {{item.title}}
            span.ico
                arrow
        Expanding
            div.collapse(v-show="active[index] && active[index] === true")
                Wyswyg.content(:html="item.content")
</template>

<script>

import Expanding from '@/components/Elements/Expanding.vue';
import Wyswyg from '@/components/Elements/Wyswyg.vue';
import arrow from '~/assets/svg/arrow_down_faq.svg';

export default {

    name: 'Tabs',
    props: ['items'],
    components: {
        Wyswyg,
        Expanding,
        arrow
    },
    data() {
    return {
        active: [],
    };
    },
    computed: {
    },
    created() {
    },
    methods: {
        open(index) {
            if (this.active[index] && this.active[index] === true) {
            this.$set(this.active, index, false);
            } else {
            this.$set(this.active, index, true);
            }
        },
    },
};
</script>

<style scoped lang="scss">

.item {

    overflow: hidden;

    &:last-child {

        border-bottom: 1px solid #8E9EA7;
    }

    .content {

        padding-bottom: 30px;
        font-size: 18px;
        line-height: 25px;
    }

    .title {

        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 0;
        cursor: pointer;
        border-top: 1px solid #8E9EA7;
    }

    .t {

        margin-bottom: 0;
        width: calc(100% - 30px);
        max-width: 574px;
        text-transform: uppercase;
    }


    .ico {
        display: flex;
        svg {
            transition: 0.3s all;
        }
    }

    &.active {

        .ico {

            svg {
                transform: rotate(180deg);
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .item {
        .title {
            padding: 15px 0;
        }
        .t {
            font-size: 16px;
            line-height: 16px;
        }
        .content {
            padding-bottom: 15px;
            font-size: 16px;
            line-height: 22px;
        }

    }
}

</style>
