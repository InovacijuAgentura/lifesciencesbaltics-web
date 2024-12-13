<template lang="pug">
.social
    Button(v-for="(item,index) in links" :key="index" :href="item.link" :text="item.icon.label" color="whitetrans" target="_blank")
        template(slot="left")
            social_fb(v-if="item.icon.value === 'fb'")
            social_linkedin(v-if="item.icon.value === 'linkedin'")
            social_x(v-if="item.icon.value === 'x'")
</template>
<script>

import social_fb from '~/assets/svg/social_fb.svg';
import social_linkedin from '~/assets/svg/social_linkedin.svg';
import social_x from '~/assets/svg/social_x.svg';
import Button from '@/components/Elements/Button.vue';
export default {

  name: 'SocialLinks',
  props: ['links'],
  components: {
	Button,
    social_fb,
    social_linkedin,
    social_x
  },
  mounted() {
  },
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">

.social {
	display: flex;
	flex-wrap: wrap;
	margin: 0 -5px -10px;

	> * {
		margin: 0 5px 10px;
	}
}

@media screen and (max-width: 768px) {
    .social {

	    margin: 0;
        flex-direction: column;

        > * {
            margin: 0;

            + * {
                margin-top: 10px;
            }
        }
    }
}

</style>
