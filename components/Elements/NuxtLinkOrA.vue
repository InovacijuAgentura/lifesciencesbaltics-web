<template lang="pug">
component(v-bind:is="nlinkOrA" v-bind:to="url" v-bind:href="url" v-bind:target="targetBlank")
    slot

</template>

<script>

export default {

    name: 'NuxtLinkOrA',
    components: {
    },
    props: ['url', 'target'],
    data() {
        return {

        };
    },
    computed: {
        targetBlank(){
            if (this.target === '_BLANK' || this.target === '_blank') {
            return '_BLANK';
            }
            return false;
        },
        nlinkOrA() {
            if (this.targetBlank === false) {
            return 'NuxtLink';
            }
            return 'a';
        },
    },
    created() {
    },
    methods: {

    },
};
</script>
