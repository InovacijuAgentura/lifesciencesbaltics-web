<template lang="pug">
div.modal
    wpImageSmall(:image="data" :width="768" :contain="true")

</template>

<script>

import wpImageSmall from '@/components/Elements/wpImageSmall.vue';
export default {

    name: 'Modal',
    props: ['data'],
    components: {
        wpImageSmall
    },
    data() {
        return {

        };
    },
    computed: {
    },
    created() {
    },
    methods: {
    },
    watch: { 
    },
};
</script>

<style scoped lang="scss">
.modal {
}
</style>
