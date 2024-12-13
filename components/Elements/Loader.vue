<template lang="pug">
div.loader(:class="[color,size]")
	div.loader-default
</template>

<script>
export default {

  name: 'Loader',
  props: ['color', 'size'],
  components: {
  },
  created() {},
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
.loader-default {
	width: 26px;
	height: 26px;
	border: solid 3px #000;
	border-left-color: transparent;
	border-radius: 50%;
	animation: rotation 1s linear infinite;
}
.loader {
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
	&.dark,
	&.blue,
	&.red,
	&.orange{
		.loader-default {
			border-color: #fff;
			border-left-color: transparent;
		}
	}
}
@keyframes rotation{
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(359deg);
  }
}

@media screen and (max-width: 768px) {
	.loader-default {
		width: 20px;
		height: 20px;
	}
}
</style>
