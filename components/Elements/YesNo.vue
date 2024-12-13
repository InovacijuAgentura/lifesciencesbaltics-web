<template lang="pug">
div.out(v-bind:class="{on:on, disabled:disabled}")
	div.cont(v-on:click="toggle")
		div.in
	div.text 
		span(v-if="on===false") 
		span(v-if="on===true") 

</template>
<script>

export default {

  name: 'YesNo',
  props: ['value', 'disabled'],
  components: {
  },
  mounted() {
    this.on = this.value;
  },
  data() {
    return {
      on: true,
    };
  },
  computed: {
  },
  methods: {
    toggle() {
      this.on = !this.on;
      this.$emit('input', this.on);
    },
  },
  beforeDestroy() {
  },
};
</script>

<style scoped lang="scss">
.out {
	display: flex;
	align-items: center;
}
.disabled {
	pointer-events: none;
	opacity: 0.4;
}
.text {
	color: #FF0606;
	font-size: 14px;
	font-weight: 300;
	line-height: 14px;
}
.cont {
	cursor: pointer;
	width: 60px;
	height: 34px;
	background-color: #FF0606;

	border-radius: 17px;
	display: flex;
	align-items: center;
	padding: 3px;
	.in {
		transition: 0.4s;
		width: 28px;
		height: 28px;
		background-color: #fff;
		border-radius: 14px;
	}
}
.on {
	.cont {
		background-color: #007500;
	}
	.text {
		color: #007500;
	}
	.in {
		transform: translateX(26px);
	}
}

</style>
