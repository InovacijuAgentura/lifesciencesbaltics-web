<template lang="pug">
vue-final-modal(v-slot="{ params }" v-bind="$attrs"  classes="modal-container" v-bind:contentClass="contentClass" v-bind:lockScroll="true" v-bind:click-to-close="clickClose" v-bind:z-index-base="2002" transition="modal" v-on="$listeners")
    div.modal__content
        div.closeBtn(v-on:click="close" v-if="disableClose !== true")
            closeICO
        slot(v-bind:params="params")
</template>

<script>
import closeICO from '@/assets/svg/close.svg';

export default {

    name: 'Base',
    props: ['clickClose', 'disableClose'],
    components: {
        closeICO,
    },
    created() {
    },
    data() {
        return {

        };
    },
    computed: {
        contentClass() {
            return ['modal-content'];
        },
    },
    methods: {
        close() {
            this.$emit('close');
        },
    },
};
</script>

<style scoped lang="scss">
:deep() {
    .vfm--overlay {
        background-color: rgba(0, 0, 0, 0.2);
    }
    .modal-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal-content {

        position: relative;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        overflow-y: auto;
        width: 100%;
        height: 100%;
        max-width: 1268px;
        padding: 45px 0;
        margin: 0 20px;
    }
}
    
.modal__content {
    flex-grow: 1;
    overflow-y: auto;
    position: relative;
    background: #fff;
    .closeBtn {
        display: flex;
        z-index: 10;
        cursor: pointer;
        position: absolute;
        right: 30px;
        top: 30px;

    }
}

@media screen and (max-width: 1024px) {
    :deep() {
        .modal-content {
            padding: 20px 0;
        }
    }
    .modal__content {
        .closeBtn {
            right: 20px;
            top: 20px;

        }
    }
}

@media screen and (max-width: 768px) {

    :deep() {
        .modal-content {
            padding: 0;
            margin: 0;
        }
    }
}
</style> 
