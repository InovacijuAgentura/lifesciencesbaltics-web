<template lang="pug">
div.modal
    .grid
        .l
            .time(v-if="data.time") {{data.time}}
            .info
                .date(v-if="data.date") {{data.date}}
                .stages(v-if="data.stages")
                    span(v-for="stg in data.stages" :key="stg.term_id") {{stg.name}}
            .wish
                Button(@click.native.prevent="triggerWish" :class="{active:wishlist.includes(data.id) }" color="pinktrans" :text="btnText")
                    template(slot="left")
                        heart
        .r
            h2.title(v-html="data.title")
            Wyswyg(v-if="data.content" :html="data.content")
            .members(v-if="data.members")
                .memb(v-for="memb in data.members" :key="memb.id")
                    NuxtLink.link(v-if="memb.url" :to="memb.url")
                    .img(v-if="memb.image")
                        wpImageSmall(:image="memb.image" :width="460" :height="516" :cover="true" alt="Image")
                    h3.t(v-html="memb.title")
                    .content(v-if="memb.content" v-html="memb.content")

</template>

<script>

import Button from '@/components/Elements/Button.vue';
import Wyswyg from '@/components/Elements/Wyswyg.vue';
import heart from '~/assets/svg/heart.svg';
import wpImageSmall from '@/components/Elements/wpImageSmall.vue';
import { mapGetters } from 'vuex';
export default {

    name: 'Modal',
    props: ['data'],
    components: {
        Button,
        heart,
        Wyswyg,
        wpImageSmall
    },
    data() {
        return {

        };
    },
    computed: {
        ...mapGetters('User', [
            'wishlist',
        ]),
        btnText() {
            if(this.wishlist.includes(this.data.id)) {
                return this.$t('wishlist')

            } else {
                return this.$t('addwishlist')
            }
        }
    },
    created() {
    },
    methods: {
        close() {
            this.$emit('close');
        },
        complete() {
            this.$emit('complete');
        },
        triggerWish() {

            this.$store.commit('User/setWishlist', { id: this.data.id});
        },
    },
    watch: { 
        '$route'() {
            this.$emit('close');
        },
    },
};
</script>

<style scoped lang="scss">
.modal {
    padding: 80px 60px 70px;
}

.grid {
    display: flex;
    flex-wrap: wrap;

    .l {
        width: 240px;
        margin-right: 80px;
    }

    .r {
        width: calc(100% - 320px);
    }

    .time {
        color: #005C85;
        font-size: 45px;
        line-height: 40px;
        width: 100%;
        font-weight: 400;
        border-bottom: 1px solid #8E9EA7;
        padding-bottom: 10px;
        margin-bottom: 10px;
        font-family: 'MyriadPro';
    }

    .info {
        font-size: 18px;
        line-height: 25px;
    }

    .wish {
        margin-top: 30px;
        :deep(){
            .btn {
                &:hover {
                    svg {
                        fill: #fff;
                    }
                }

                &.active {
                background: #DA85B6;
                color: #fff;

                &:hover {
                    background: #c478a4;
                }
                svg {
                    fill: #fff;
                }
                }
            }
        }
    }

    .title {
        font-size: 35px;
        line-height: 35px;
        max-width: 620px;
    }

    .html {
        font-size: 18px;
    }
}

.members {
    display: flex;
    flex-wrap: wrap;
    margin: 40px -42px -42px;

    > * {
        width: 33.333%;

        border-right: 1px solid #8E9EA7;
        margin-bottom: 42px;
        padding: 25px 42px;

        &:nth-child(3n),
        &:last-child {
            border-color: transparent;
        }
    }
}

.stages {
    display: flex;
    flex-wrap: wrap;

    > * {

      &:not(:last-child) {
        margin-right: 4px;
        &:after {
          content: ',';
        }
      }
    }
  }
.memb {
    text-align: center;
    position: relative;

    .link {
        position: absolute;
        z-index: 2;
        left: 0;
        bottom: 0;
        right: 0;
        top: 0;
    }
    .t {
        text-transform: uppercase;
        margin-bottom: 0;
    }
    .img {
        margin-bottom: 20px;
    }

    .content {
        margin-top: 5px;
    }
}
@media screen and (max-width: 1024px) {

    .modal {
        padding: 50px 50px 20px 20px;
    }

    .grid {
        .l {
            margin-right: 40px;
        }

        .r {
            width: calc(100% - 280px);
        }

        .title {
            font-size: 30px;
            line-height: 30px;
        }
    }
    .members {
        margin: 30px -20px -20px;

        > * {
            width: 50%;
            margin-bottom: 20px;
            padding: 20px;

            &:nth-child(3n) {
                border-color: #8E9EA7;
            }

            &:nth-child(2n),
            &:last-child {
                border-color: transparent;
            }
        }
    }

}

@media screen and (max-width: 768px) {
    .modal {
        padding: 50px 20px;
    }
    .grid {
        .l {
            width: 100%;
            margin-right: 0;
        }

        .r {
            width: 100%;
            margin-top: 50px;
        }

        .time {
            font-size: 35px;
            line-height: 35px;
        }

        .info {
            font-size: 16px;
            line-height: 22px;
        }

        .wish {
            margin-top: 20px;
        }

        .title {
            font-size: 25px;
            line-height: 25px;
            max-width: none;
        }

        .html {
            font-size: 16px;
        }
    }

    .memb {
        .t {
            font-size: 25px;
            line-height: 25px;
        }
    }
}

@media screen and (max-width: 480px) {
    .members {

        margin: 50px 0 -30px;
        > * {
            width: 100%;
            border-right: none;
            border-bottom: 1px solid #8E9EA7;
            padding: 0 0 30px;
            margin-bottom: 30px;
            &:nth-child(2n),
            &:nth-child(4n) {
                border-color: #8E9EA7;
            }
            &:last-child{
                border-color: transparent;
            }
        }
    }

    .memb {
        .img {
            padding: 0 45px;
        }
    }
}
</style>
